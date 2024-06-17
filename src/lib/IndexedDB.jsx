let db;

export function initIndexedDB() {
    const request = indexedDB.open("ListDB", 1);

    request.onupgradeneeded = (e) => {
        db = e.target.result;

        if (db.objectStoreNames.contains("anime")) {
            db.deleteObjectStore("anime");
        }

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
            entries.forEach(anime => {
                const addRequest = animeStore.add(anime);

                addRequest.onsuccess = () => {
                    console.log(`Anime "${anime.englishName}" added`);
                };

                addRequest.onerror = (e) => {
                    console.error(`Error adding anime "${anime.englishName}":`, e.target.error);
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
