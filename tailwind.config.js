/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'theme-color-light': '#4b2b2b',
                'theme-color-dark': '#3d2121',
            },
        },
    },
    plugins: [],
}

