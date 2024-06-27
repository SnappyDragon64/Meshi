import {WAVE_REGISTRY} from "@/registry/Registries.js";
import {getEnemy} from "@/registry/Enemies.js";

export function getWave(id) {
  const wave = WAVE_REGISTRY.get(id);
  return repackage(wave);
}

function repackage(wave) {
  return wave.map((enemyId) => {
    return getEnemy(enemyId);
  });
}