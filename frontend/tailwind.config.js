/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'white': '#eeeeee',
            'bacon': '#FBE9E9',
            'mint-light': '#DBFBF0',
            'mint': '#8ED8BF',
            'mint-dark': '#489078',
            'coal': '#353131',
            'gray-dark': '#605858',
            'gray': '#716A69',
            'gray-light': '#837D7C',
            'gray-lightest': '#C2C1C1',
            'snow': '#ECEAE7',
            'alert': '#EB5757',
        },
        fontFamily: {
            fira: ['Fira Sans', 'sans-serif'],
        },
    },
}