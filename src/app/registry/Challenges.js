import {CHALLENGE_REGISTRY} from "@/registry/Registries.js";
import {getEnemy} from "@/registry/Enemies.js";
import {getWave} from "@/registry/Waves.js";

export async function getChallenge(id) {
  const challenge = await CHALLENGE_REGISTRY.get(id);
  return await repackage(challenge);
}

async function repackage(challenge) {
  const enemyPromises = challenge.enemies.map(async (id) => {
    return await getEnemy(id);
  });
  const enemies = await Promise.all(enemyPromises);


  const wavePromises = challenge.waves.map(async (id) => {
    return await getWave(id);
  });
  const waves = await Promise.all(wavePromises);

  return {
    name: challenge.name,
    enemies: enemies,
    waves: waves,
  };
}