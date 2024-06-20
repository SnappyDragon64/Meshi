import {WAVE_REGISTRY} from "@/registry/Registries.js";

export function getWave(id) {
  return WAVE_REGISTRY.get(id);
}

export function getWaves() {
  return WAVE_REGISTRY.getAll();
}