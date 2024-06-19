import {Waves} from "@/challenge/Waves.js";

function calculateDamage(wave, attacks) {
    const enemy_list = Waves[wave];
    const damage_sustained = new Array(enemy_list.length).fill(0);
    const damage_dealt = [];
    let current_enemy = 0;

    for (const attack of attacks) {
        let damage = attack.episodes * attack.duration / 10.0;

        const weakness = current_enemy.weakness;
        if (typeof weakness === "object") {
            const weakness = current_enemy.weakness;
            const multiplier = weakness.multiplier;
            const condition = weakness.condition;
            const format = condition.format;
            const genre = condition.genre;
            const episodes = condition.episodes;
            const duration = condition.duration;

            if (format && attack.format === format || genre && attack.genres.includes(genre) || episodes && attack.episodes > episodes || duration && attack.duration > duration) {
                damage *= multiplier;
            }
        }

        const resistance = current_enemy.resistance;
        if (typeof resistance === "object") {
            const weakness = current_enemy.weakness;
            const multiplier = weakness.multiplier;
            const condition = weakness.condition;
            const format = condition.format;
            const genre = condition.genre;
            const episodes = condition.episodes;
            const duration = condition.duration;

            if (format && attack.format === format || genre && attack.genres.includes(genre) || episodes && attack.episodes < episodes || duration && attack.duration < duration) {
                damage *= multiplier;
            }
        }

        damage_sustained[current_enemy] += damage;
        damage_dealt.push(damage);

        if (damage_sustained[current_enemy] >= enemy_list[current_enemy].hp) {
            current_enemy += 1;

            if (current_enemy >= enemy_list.length) {
                break;
            }
        }
    }

    return [damage_dealt, damage_sustained]
}

export default calculateDamage