import {CHALLENGE_REGISTRY} from "@/registry/Registries.js";
import {getEnemy} from "@/registry/Enemies.js";
import {getWave} from "@/registry/Waves.js";

export function getChallenge(id) {
  const challenge = CHALLENGE_REGISTRY.get(id);
  return repackage(challenge);
}

function repackage(challenge) {
  return {
    name: challenge.name,
    enemies: challenge.enemies.map((id) => {
      return getEnemy(id);
    }),
    waves: challenge.waves.map((id) => {
      return getWave(id);
    }),
  };
}