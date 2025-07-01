/** @type {import('tailwindcss').Config} */
import { COLORS } from './src/constants/colors.constants'

module.exports = {
    content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: COLORS,
            padding: {
                layout: '2rem',
            },
            boxShadow: {
                'custom-green': '0 4px 74px 0 rgba(98, 167, 138, 0.8)',
            },
        },
    },
    plugins: [],
}
