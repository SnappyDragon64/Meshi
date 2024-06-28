import {getRegistry} from "@/registry/Registries.js";

export async function loadData() {
  const files = import.meta.glob("/src/data/*/*.json");

  for (const file in files) {
    const split = file.split("/");

    const id = split.pop().replace(".json", "");
    const dir = split.pop();

    const registry = getRegistry(dir);
    const obj = (await files[file]()).default;

    registry.register(id, obj);
  }
}