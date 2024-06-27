import {formatDate, formatDateJson, getNumberWithOrdinal} from "@/util/DataConverter.js";

function generateAttack(index, anime, damageDealt, attackTarget, enemyName, enemyRemainingHP, enemyMaxHP) {
  const attack = [
    "",
    `${index.toString().padStart(2, "0")}) [X] __Attack ${index}__`,
    `https://anilist.co/anime/${anime.id}/`,
    `Start: ${formatDateJson(anime.startedAt)} Finish: ${formatDateJson(anime.completedAt)} // ${enemyName} ${enemyRemainingHP}/${enemyMaxHP}`,
  ]

  return attack;
}

export function generateChallengeCode(challengeName, wave, challengeStartDate, animeList, results) {
  const text = [
    `# __${challengeName}__`,
    "",
    `Wave: ${getNumberWithOrdinal(wave + 1)}`,
    "",
    `Challenge Start Date: ${formatDate(challengeStartDate)}`,
    `Challenge Finish Date: ${formatDate(new Date())}`,
    "Legend: [X] = Completed [O] = Not Completed",
    "",
    "<hr>",
  ];

  for (let index = 0; index < animeList.length; index++){
    const anime = animeList[index];
    const damageDealt = results.damageDealt[index];
    const attackTarget = results.attackTargets[index];
    const enemyRemainingHP = results.attackTargetHPList[index];
    const enemyName = results.enemyNames[attackTarget];
    const enemyMaxHP = results.enemyMaxHPList[attackTarget];

    const attack = generateAttack(index, anime, damageDealt, attackTarget, enemyName, enemyRemainingHP, enemyMaxHP);
    text.push(...attack);
  }

  return text.join("\n");
}