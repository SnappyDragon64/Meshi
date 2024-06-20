import {Registry} from "@/challenge/registry/Registry.js";

const WAVE_REGISTRY = new Registry("wave");

export const TRAINING_GROUNDS_WAVE_1 = getWave("training_grounds_wave_1");
export const TRAINING_GROUNDS_WAVE_2 = getWave("training_grounds_wave_2");
export const TRAINING_GROUNDS_WAVE_3 = getWave("training_grounds_wave_3")

export function getWave(id) {
    return WAVE_REGISTRY.get(id);
}

export function getWaves() {
    return WAVE_REGISTRY.getAll();
}