import {toDate} from "@/util/DataConverter.js";
import {MediaListStatus} from "@/services/AniListClient.js";

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
  return new Promise((resolve, reject) => {
    if (!db) {
      console.error("IndexedDB is not initialized");
      reject();
    }

    db.close();

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

export function getEligibleAnime(language = "english", challengeStartDate = null) {
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

        // Assumption that a user will not want to use a dropped anime for a challenge
        // Challenge does not allow anime to be re-watched
        if (!(anime.status === MediaListStatus.DROPPED || anime.status === MediaListStatus.REPEATING)) {
          // Minimum episode duration must be 10 minutes
          if (anime.duration >= 10) {
            // Planned anime are eligible
            // Completed anime are eligible if they were started after the challenge start date
            if (anime.status === MediaListStatus.PLANNING || (!challengeStartDate || toDate(anime.startedAt) >= challengeStartDate)) {
              result.push(anime);
            }
          }
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
