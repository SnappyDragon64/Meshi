import trainingGroundsWave1 from "@/challenge/waves/training_grounds_wave_1.json";
import trainingGroundsWave2 from "@/challenge/waves/training_grounds_wave_2.json";
import trainingGroundsWave3 from "@/challenge/waves/training_grounds_wave_3.json";

export const WaveRegistry = {}

export const TRAINING_GROUNDS_WAVE_1 = registerWave("training_grounds_wave_1", trainingGroundsWave1);
export const TRAINING_GROUNDS_WAVE_2 = registerWave("training_grounds_wave_2", trainingGroundsWave2);
export const TRAINING_GROUNDS_WAVE_3 = registerWave("training_grounds_wave_3", trainingGroundsWave3)

export function getWave(id) {
    const enemy = WaveRegistry[id];

    if (enemy) {
        return enemy;
    } else {
        throw new Error(`No wave found with id "${id}"`);
    }
}

export function getWaves() {
    return Object.values(WaveRegistry);
}

function registerWave(id, enemy) {
    if (WaveRegistry[id]) {
        throw new Error(`Wave with id "${id}" is already registered`);
    }

    WaveRegistry[id] = enemy;
    return enemy
}