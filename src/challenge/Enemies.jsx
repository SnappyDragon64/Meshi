import boringDummy from "@/challenge/enemies/BoringDummy.jsx";
import menacingDummy from "@/challenge/enemies/MenacingDummy.jsx";
import manequeen from "@/challenge/enemies/Manequeen.jsx";

export const Enemies = {
    BORING_DUMMY: 0,
    MENACING_DUMMY: 1,
    MANEQUEEN: 2
}

const EnemyRegistry = {
    [Enemies.BORING_DUMMY]: boringDummy,
    [Enemies.MENACING_DUMMY]: menacingDummy,
    [Enemies.MANEQUEEN]: manequeen
}

export function getEnemy(enemy) {
    return EnemyRegistry[enemy]
}