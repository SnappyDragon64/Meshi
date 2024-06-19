import boringDummy from "@/challenge/enemies/boring_dummy.json";
import menacingDummy from "@/challenge/enemies/menacing_dummy.json";
import manequeen from "@/challenge/enemies/manequeen.json";
import {Registry} from "@/challenge/registry/Registry.js";

const ENEMY_REGISTRY = new Registry();

export const BORING_DUMMY = ENEMY_REGISTRY.register("boring_dummy", boringDummy);
export const MENACING_DUMMY = ENEMY_REGISTRY.register("menacing_dummy", menacingDummy);
export const MANEQUEEN = ENEMY_REGISTRY.register("manequeen", manequeen);

export function getEnemy(id) {
    return ENEMY_REGISTRY.get(id);
}

export function getEnemies() {
    return ENEMY_REGISTRY.getAll();
}