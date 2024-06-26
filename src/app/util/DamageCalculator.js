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

function calculateDamage(wave, attacks) {
  const damage_sustained = new Array(wave.length).fill(0);
  const damage_dealt = [];
  let current_index = 0;

  for (const attack of attacks) {
    let current_enemy = wave[current_index];
    let damage = attack.episodes * attack.duration / 10.0;

    damage = applyMultipliers(damage, attack, current_enemy.weaknesses)
    damage = applyMultipliers(damage, attack, current_enemy.resistances)

    damage_sustained[current_index] += damage;
    damage_dealt.push(damage);

    if (Math.floor(damage_sustained[current_index]) >= current_enemy.hp) {
      current_index = current_index + 1;

      if (current_index >= wave.length) {
        break;
      }
    }
  }

  return [damage_dealt, damage_sustained]
}

export default calculateDamage