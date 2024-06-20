import {Registry} from "@/challenge/registry/Registry.js";
import {LazyRegistry} from "@/challenge/registry/LazyRegistry.js";

const META_REGISTRY = new Registry("registry");

export const ENEMY_REGISTRY = createRegistry("enemy", LazyRegistry);
export const WAVE_REGISTRY = createRegistry("wave", LazyRegistry);

function createRegistry(id, registryClass) {
    const registry = new registryClass(id);
    return META_REGISTRY.register(id, registry);
}

export function getRegistry(id) {
    return META_REGISTRY.get(id);
}

export function getRegistries() {
    return META_REGISTRY.getAll();
}