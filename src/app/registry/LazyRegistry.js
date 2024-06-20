import {Registry} from "@/registry/Registry.js";
import {deepFreeze} from "@/util/Utils.js";

export class LazyRegistry extends Registry {
  #cache;

  constructor(id) {
    super(id);
    this.#cache = {};
  }

  async get(id) {
    return await this.getCachedItem(id);
  }

  async getAll() {
    const allIds = super.getIds();
    const allPromises = allIds.map(async (id) => {
      return await this.getCachedItem(id);
    });

    return await Promise.all(allPromises);
  }

  async getCachedItem(id) {
    if (this.#cache[id]) {
      return this.#cache[id];
    } else {
      const lazyItem = super.get(id);
      const item = (await lazyItem()).default;
      deepFreeze(item);
      this.#cache[id] = item;
      return item;
    }
  }
}