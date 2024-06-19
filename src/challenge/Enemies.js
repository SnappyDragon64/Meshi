import boringDummy from "@/challenge/enemies/boring_dummy.json";
import menacingDummy from "@/challenge/enemies/menacing_dummy.json";
import manequeen from "@/challenge/enemies/manequeen.json";

export const EnemyRegistry = {}

export const BORING_DUMMY = registerEnemy("boring_dummy", boringDummy);
export const MENACING_DUMMY = registerEnemy("menacing_dummy", menacingDummy);
export const MANEQUEEN = registerEnemy("manequeen", manequeen)

export function getEnemy(id) {
    const enemy = EnemyRegistry[id];

    if (enemy) {
        return enemy;
    } else {
        throw new Error(`No enemy found with id "${id}"`);
    }
}

export function getEnemies() {
    return Object.values(EnemyRegistry);
}

function registerEnemy(id, enemy) {
    if (EnemyRegistry[id]) {
        throw new Error(`Enemy with id "${id}" is already registered`);
    }

    EnemyRegistry[id] = enemy;
    return enemy
}