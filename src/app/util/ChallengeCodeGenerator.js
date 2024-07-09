import {formatDate, formatDateJson, getNumberWithOrdinal, toDate} from "@/util/DataConverter.js";

function generateAttack(index, anime, damageDealt, attackTarget, enemyName, enemyRemainingHP, enemyMaxHP) {
  return [
    "",
    `${index.toString().padStart(2, "0")}) [${anime.status === "COMPLETED" ? "X" : "O"}] __Attack ${index}__`,
    `https://anilist.co/anime/${anime.id}/`,
    `Start: ${formatDateJson(anime.startedAt)} Finish: ${formatDateJson(anime.completedAt)} // ${enemyName} ${enemyRemainingHP}/${enemyMaxHP}`,
  ];
}

export function generateChallengeCode(challengeName, wave, challengeStartDate, animeList, results) {
  const text = [
    `# __${challengeName}__`,
    "",
    `Wave: ${getNumberWithOrdinal(wave + 1)}`,
    "",
    `Challenge Start Date: ${challengeStartDate ? formatDate(challengeStartDate) : "YYYY-MM-DD"}`,
    "Challenge Finish Date: ",
    "Legend: [X] = Completed [O] = Not Completed",
    "",
    "<hr>",
  ];

  let completedDate;

  for (let index = 0; index < animeList.length; index++) {
    const anime = animeList[index];
    const damageDealt = results.damageDealt[index];
    const attackTarget = results.attackTargets[index];
    const enemyRemainingHP = results.attackTargetHPList[index];
    const enemyName = results.enemyNames[attackTarget];
    const enemyMaxHP = results.enemyMaxHPList[attackTarget];

    if (!completedDate) {
      completedDate = toDate(anime.completedAt);
    } else {
      const animeDate = toDate(anime.completedAt);

      if (animeDate > completedDate) {
        completedDate = animeDate;
      }
    }

    const attack = generateAttack(index + 1, anime, damageDealt, attackTarget, enemyName, enemyRemainingHP, enemyMaxHP);
    text.push(...attack);
  }

  const finishDateIndex = text.indexOf("Challenge Finish Date: ");
  let toAppend = "YYYY-MM-DD";

  if (results.waveCleared && completedDate) {
    toAppend = formatDate(completedDate);
  }

  text[finishDateIndex] += toAppend;

  return text.join("\n");
}