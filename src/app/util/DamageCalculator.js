import {Waves} from "@/registry/Waves.js";

function checkCondition(condition, attack) {
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

function calculateDamage(wave, attacks) {
  const enemy_list = Waves[wave];
  const damage_sustained = new Array(enemy_list.length).fill(0);
  const damage_dealt = [];
  let current_index = 0;

  for (const attack of attacks) {
    let current_enemy = enemy_list[current_index];
    let damage = attack.episodes * attack.duration / 10.0;

    const weaknesses = current_enemy.weaknesses;
    if (weaknesses) {
      weaknesses.forEach((weakness) => {
        const multiplier = weakness.multiplier;
        const condition = weakness.condition;

        if (checkCondition(condition, attack)) {
          damage *= multiplier;
        }
      })

    }

    // resistances

    damage_sustained[current_index] += damage;
    damage_dealt.push(damage);

    if (damage_sustained[current_index] >= enemy_list[current_index].hp) {
      current_index += 1;

      if (current_index >= enemy_list.length) {
        break;
      }
    }
  }

  return [damage_dealt, damage_sustained]
}

export default calculateDamage