import {Registry} from "@/registry/Registry.js";

const META_REGISTRY = new Registry("registry");

export const ENEMY_REGISTRY = createRegistry("enemy");
export const WAVE_REGISTRY = createRegistry("wave");
export const CHALLENGE_REGISTRY = createRegistry("challenge");

function createRegistry(id) {
  const registry = new Registry(id);
  return META_REGISTRY.register(id, registry);
}

export function getRegistry(id) {
  return META_REGISTRY.get(id);
}