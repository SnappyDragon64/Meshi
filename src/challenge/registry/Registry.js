export class Registry {
    constructor() {
        this.registry = {};
    }

    deepFreeze(object) {
        const properties = Object.getOwnPropertyNames(object);

        properties.forEach((property) => {
            const value = object[property];

            if (value && typeof value === 'object') {
                this.deepFreeze(value);
            }
        });

        return Object.freeze(object);
    }

    register(id, item) {
        if (this.registry[id]) {
            throw new Error(`Item with id "${id}" is already registered`);
        }

        this.deepFreeze(item)
        this.registry[id] = item;
        return item;
    }

    get(id) {
        const item = this.registry[id];
        if (item) {
            return item;
        } else {
            throw new Error(`No item found with id "${id}"`);
        }
    }

    getAll() {
        return Object.values(this.registry);
    }
}
