function formatEntry(entry) {
  const {
    media: {
      id,
      title: {english, romaji},
      episodes,
      duration,
      genres,
      coverImage: {medium},
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
    imageUrl: medium,
  }
}

export function formatEntries(entries) {
  return entries.map(entry => formatEntry(entry))
}

export function formatDate(date) {
  const year = date.year;
  const month = String(date.month).padStart(2, "0");
  const day = String(date.day).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function toDate(date) {
  return new Date(date.year, date.month - 1, date.day);
}

export function toDateJson(date) {
  return {
    "year": date.getFullYear(),
    "month": date.getMonth() + 1,
    "day": date.getDate(),
  }
}

export function getWaveInfo(wave) {
  const enemyNameCounter = {};
  const enemyNames = [];
  const enemyMaxHPList = [];

  for (const enemy of wave) {
    const hp = enemy.hp;
    enemyMaxHPList.push(hp);

    const name = enemy.name;

    if (!enemyNameCounter[name]) {
      enemyNameCounter[name] = 0;
    }

    enemyNameCounter[name]++;
    enemyNames.push(`${name} ${enemyNameCounter[name]}`);
  }

  return [enemyNames, enemyMaxHPList];
}