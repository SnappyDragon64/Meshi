import {WAVE_REGISTRY} from "@/registry/Registries.js";
import {getEnemy} from "@/registry/Enemies.js";

export async function getWave(id) {
  const wave = await WAVE_REGISTRY.get(id);
  return await repackage(wave);
}

async function repackage(wave) {
  return wave.map(async (enemyId) => {
    return await getEnemy(enemyId);
  })
}