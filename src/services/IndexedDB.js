let db;

export function initIndexedDB() {
  const request = indexedDB.open("ListDB", 1);

  request.onupgradeneeded = (e) => {
    db = e.target.result;

    const animeStore = db.createObjectStore("anime", { keyPath: "id" });
    animeStore.createIndex("byEnglishName", "englishName", { unique: true });
    animeStore.createIndex("byRomajiName", "romajiName", { unique: true });
  };

  request.onsuccess = (e) => {
    db = e.target.result;
    console.log("IndexedDB opened successfully");
  };

  request.onerror = (e) => {
    console.error("Error opening IndexedDB:", e.target.errorCode);
  };
}

export function storeEntries(entries) {
  if (!db) {
    console.error("IndexedDB is not initialized");
    return;
  }

  db.close();

  const request = indexedDB.open("ListDB", 1);

  request.onsuccess = (e) => {
    db = e.target.result;

    const transaction = db.transaction("anime", "readwrite");
    const animeStore = transaction.objectStore("anime");

    const clearRequest = animeStore.clear();

    clearRequest.onsuccess = () => {
      entries.forEach((anime) => {
        const addRequest = animeStore.add(anime);

        addRequest.onsuccess = () => {
          console.log(`Anime "${anime.englishName}" added`);
        };

        addRequest.onerror = (e) => {
          console.error(
            `Error adding anime "${anime.englishName}":`,
            e.target.error
          );
        };
      });

      console.log("Added entries successfully");
    };

    clearRequest.onerror = (e) => {
      console.error("Error clearing anime:", e.target.error);
    };
  };

  request.onerror = (e) => {
    console.error("Error opening IndexedDB:", e.target.errorCode);
  };
}

export function searchAnimeByName(query) {
  return new Promise((resolve, reject) => {
    if (!db) {
      reject("IndexedDB is not initialized");
      return;
    }

    const transaction = db.transaction("anime", "readonly");
    const animeStore = transaction.objectStore("anime");
    const index = animeStore.index("byEnglishName");
    const result = [];

    index.openCursor().onsuccess = (e) => {
      const cursor = e.target.result;

      if (cursor) {
        if (
          cursor.value.englishName.toLowerCase().startsWith(query.toLowerCase())
        ) {
          result.push(cursor.value);
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
