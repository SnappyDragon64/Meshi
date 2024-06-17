function formatDate(date) {
    const year = date.year;
    const month = String(date.month).padStart(2, "0");
    const day = String(date.day).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function formatEntry(entry) {
    const {
        media: {
            id,
            title: { english, romaji },
            episodes,
            duration,
            genres,
        },
        startedAt,
        completedAt,
    } = entry;

    return {
        id: id,
        englishName: english || romaji,
        romajiName: romaji,
        episodes: episodes,
        duration: duration,
        genres: genres,
        startedAt: formatDate(startedAt),
        completedAt: formatDate(completedAt),
    }
}

function formatEntries(entries) {
    return entries.map(entry => formatEntry(entry))
}

export default formatEntries