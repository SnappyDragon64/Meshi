import {ENEMY_REGISTRY} from "@/registry/Registries.js";

export async function getEnemy(id) {
  return await ENEMY_REGISTRY.get(id);
}