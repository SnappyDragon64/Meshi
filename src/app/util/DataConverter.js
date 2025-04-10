function formatEntry(entry, status) {
  const {
    media: {
      id,
      title: {english, romaji},
      format,
      episodes,
      duration,
      genres,
      tags,
      coverImage: {medium, color},
    },
    startedAt,
    completedAt,
  } = entry;

  return {
    id: id,
    englishName: english || romaji,
    romajiName: romaji,
    format: format,
    episodes: episodes,
    duration: duration,
    genres: genres,
    tags: tags.map(item => item.name),
    startedAt: startedAt,
    completedAt: completedAt,
    imageUrl: medium,
    imageAvgColor: color,
    status: status,
  }
}

export function formatEntries(entries, status) {
  return entries.map(entry => formatEntry(entry, status))
}

export function formatDate(date) {
  const dateJson = toDateJson(date);
  return formatDateJson(dateJson);
}

export function formatDateJson(dateJson) {
  const year = dateJson.year || "YYYY";
  const month = String(dateJson.month || "MM").padStart(2, "0");
  const day = String(dateJson.day || "DD").padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function toDate(dateJson) {
  return new Date(dateJson.year, dateJson.month - 1, dateJson.day);
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

export function getNumberWithOrdinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
