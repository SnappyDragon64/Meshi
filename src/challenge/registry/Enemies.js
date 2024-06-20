import {ENEMY_REGISTRY} from "@/challenge/registry/Registries.js";

export async function getEnemy(id) {
    return await ENEMY_REGISTRY.get(id)
}

export async function getEnemies() {
    return await ENEMY_REGISTRY.getAll();
}

export function getEnemyIds() {
    return ENEMY_REGISTRY.getIds();
}