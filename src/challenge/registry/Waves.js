import trainingGroundsWave1 from "@/challenge/waves/training_grounds_wave_1.json";
import trainingGroundsWave2 from "@/challenge/waves/training_grounds_wave_2.json";
import trainingGroundsWave3 from "@/challenge/waves/training_grounds_wave_3.json";
import {Registry} from "@/challenge/registry/Registry.js";

const WAVE_REGISTRY = new Registry();

export const TRAINING_GROUNDS_WAVE_1 = WAVE_REGISTRY.register("training_grounds_wave_1", trainingGroundsWave1);
export const TRAINING_GROUNDS_WAVE_2 = WAVE_REGISTRY.register("training_grounds_wave_2", trainingGroundsWave2);
export const TRAINING_GROUNDS_WAVE_3 = WAVE_REGISTRY.register("training_grounds_wave_3", trainingGroundsWave3)

export function getWave(id) {
    return WAVE_REGISTRY.get(id);
}

export function getWaves() {
    return WAVE_REGISTRY.getAll();
}