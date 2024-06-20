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

export function formatDate(date) {
    const year = date.year;
    const month = String(date.month).padStart(2, "0");
    const day = String(date.day).padStart(2, "0");

    return `${year}-${month}-${day}`;
}