/* Import modules. */
const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'blue-gray': colors.blueGray,
                cyan: colors.cyan,
                grape: colors.purple,
                orange: colors.orange,
                rose: colors.rose,
                sky: colors.sky,
                teal: colors.teal,
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography')
    ],
}
