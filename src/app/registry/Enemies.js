import {ENEMY_REGISTRY} from "@/registry/Registries.js";

export function getEnemy(id) {
  return ENEMY_REGISTRY.get(id);
}