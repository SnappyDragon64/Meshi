import {ENEMY_REGISTRY} from "@/challenge/registry/Registries.js";

// export const BORING_DUMMY = getEnemy("boring_dummy");
// export const MENACING_DUMMY = getEnemy("menacing_dummy");
// export const MANEQUEEN = getEnemy("manequeen");

export async function getEnemy(id) {
    return await ENEMY_REGISTRY.get(id)
}

export async function getEnemies() {
    return await ENEMY_REGISTRY.getAll();
}

export function getEnemyIds() {
    return ENEMY_REGISTRY.getIds();
}