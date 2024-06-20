import {clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function deepFreeze(object) {
    const properties = Object.getOwnPropertyNames(object);

    properties.forEach((property) => {
        const value = object[property];

        if (value && typeof value === 'object') {
            deepFreeze(value);
        }
    });

    return Object.freeze(object);
}