function checkCondition(attack, condition) {
  const {type, attribute, value} = condition;

  if (!Object.hasOwn(attack, attribute)) {
    throw new Error(`Attribute "${attribute}" not found in attack object`);
  }

  const attackAttributeValue = attack[attribute];

  switch (type) {
    case "greater_than":
      return attackAttributeValue > value;
    case "less_than":
      return attackAttributeValue < value;
    case "includes":
      return attackAttributeValue.includes(value);
    default:
      return attackAttributeValue === value;
  }
}

function checkConditions(attack, conditions) {
  for (const condition of conditions) {
    if (!checkCondition(attack, condition)) {
      return false;
    }
  }

  return true;
}

function applyMultipliers(damage, attack, conditionalMultipliers) {
  if (conditionalMultipliers) {
    for (const conditionalMultiplier of conditionalMultipliers) {
      const {multiplier, conditions} = conditionalMultiplier;

      if (conditions && checkConditions(attack, conditions)) {
        damage *= multiplier;
      }
    }
  }

  return damage;
}

export function calculateDamage(wave, attacks) {
  const damageSustained = new Array(wave.length).fill(0);
  const damageDealt = [];
  const attackTargets = [];
  const attackTargetHPList = [];
  let currentIndex = 0;

  for (const attack of attacks) {
    attackTargets.push(currentIndex);
    let currentEnemy = wave[currentIndex];
    let damage = attack.episodes * attack.duration / 10.0;

    damage = applyMultipliers(damage, attack, currentEnemy.weaknesses);
    damage = applyMultipliers(damage, attack, currentEnemy.resistances);

    const oldDamageSustainedFloor = Math.floor(damageSustained[currentIndex]);

    damageSustained[currentIndex] += damage;

    const damageSustainedFloor = Math.floor(damageSustained[currentIndex]);
    const remainingHP = Math.max(0, currentEnemy.hp - damageSustainedFloor);
    attackTargetHPList.push(remainingHP);

    damageDealt.push(damageSustainedFloor - oldDamageSustainedFloor);

    if (damageSustainedFloor >= currentEnemy.hp) {
      currentIndex = currentIndex + 1;

      if (currentIndex >= wave.length) {
        break;
      }
    }
  }

  return [damageDealt, attackTargets, attackTargetHPList]
}