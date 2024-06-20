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
        startedAt: startedAt,
        completedAt: completedAt,
    }
}

function formatEntries(entries) {
    return entries.map(entry => formatEntry(entry))
}

export default formatEntries