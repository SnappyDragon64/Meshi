import {toDate} from "@/util/DataConverter.js";

let db;

export async function initIndexedDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("ListDB", 1);

    request.onupgradeneeded = (e) => {
      db = e.target.result;

      const animeStore = db.createObjectStore("anime", {keyPath: "id"});
      animeStore.createIndex("byEnglishName", "englishName", {unique: true});
      animeStore.createIndex("byRomajiName", "romajiName", {unique: true});
    };

    request.onsuccess = (e) => {
      db = e.target.result;
      console.log("IndexedDB opened successfully");
      resolve(db);
    };

    request.onerror = (e) => {
      console.error("Error opening IndexedDB:", e.target.errorCode);
      reject(e);
    };
  });
}

export async function storeEntries(entries) {
  if (!db) {
    console.error("IndexedDB is not initialized");
    return;
  }

  db.close();

  return new Promise((resolve, reject) => {
    const request = indexedDB.open("ListDB", 1);

    request.onsuccess = (e) => {
      db = e.target.result;

      const transaction = db.transaction("anime", "readwrite");
      const animeStore = transaction.objectStore("anime");

      const clearRequest = animeStore.clear();

      clearRequest.onsuccess = () => {
        const addPromises = entries.map((anime) => {
          return new Promise((resolve, reject) => {
            const addRequest = animeStore.add(anime);

            addRequest.onsuccess = () => {
              console.log(`Anime "${anime.englishName}" added`);
              resolve();
            };

            addRequest.onerror = (e) => {
              console.error(`Error adding anime "${anime.englishName}":`, e.target.error);
              reject(e);
            };
          });
        });

        Promise.all(addPromises)
          .then(() => {
            console.log("Added entries successfully");
            resolve();
          })
          .catch((error) => {
            console.error("Error adding entries:", error);
            reject(error);
          });
      };

      clearRequest.onerror = (e) => {
        console.error("Error clearing anime:", e.target.error);
        reject(e);
      };
    };

    request.onerror = (e) => {
      console.error("Error opening IndexedDB:", e.target.errorCode);
      reject(e);
    };
  });
}

export function getAnime(language = "english", challengeStartDate = null) {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject("IndexedDB is not initialized");
      return;
    }

    const transaction = db.transaction("anime", "readonly");
    const animeStore = transaction.objectStore("anime");
    const indexName = language === "romaji" ? "byRomajiName" : "byEnglishName"
    const index = animeStore.index(indexName);
    const result = [];

    index.openCursor().onsuccess = (e) => {
      const cursor = e.target.result;

      if (cursor) {
        const anime = cursor.value;

        if (!challengeStartDate || toDate(anime.startedAt) >= challengeStartDate) {
          result.push(anime);
        }

        cursor.continue();
      } else {
        resolve(result);
      }
    };

    index.openCursor().onerror = (e) => {
      reject(e.target.error);
    };
  });
}
