import {getRegistry} from "@/challenge/registry/Registries.js";

export function loadData() {
    const files = import.meta.glob("/src/resources/data/*/*.json");

    for (const file in files) {
        const split = file.split("/");

        const id = split.pop().replace(".json", "");
        const dir = split.pop();

        const registry = getRegistry(dir);

        registry.register(id, files[file]);
    }
}