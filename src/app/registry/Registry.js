import {deepFreeze} from "@/util/Utils.js";

export class Registry {
  #id;
  #registry;

  constructor(id) {
    this.#id = id;
    this.#registry = {};
  }

  register(id, item) {
    if (this.#registry[id]) {
      return this.#registry[id];
    }

    deepFreeze(item)
    this.#registry[id] = item;
    return item;
  }

  get(id) {
    const item = this.#registry[id];
    if (item) {
      return item;
    } else {
      throw new Error(`No item found with id "${id}"`);
    }
  }

  getAll() {
    return Object.values(this.#registry);
  }

  getIds() {
    return Object.getOwnPropertyNames(this.#registry)
  }
}
