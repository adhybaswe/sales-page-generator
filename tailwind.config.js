import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    bg: '#f4f2ec',
                    dark: '#27292d',
                    tan: '#dbd5c4',
                    yellow: '#ffcc00',
                    red: '#ff6b6b',
                }
            }
        },
    },

    plugins: [forms],
};
