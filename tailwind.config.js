module.exports = {
    darkMode: 'class',
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#00112c",
                brand: "#050f2c",
                secondary: "#030b28",
                light: "#F0F0F0",
                brandYellow: "#F1D00A",
                detailPrimary: "rgba(61.5, 10.5, 10.5, .5)",
                detailSecondary: "rgba(71.5, 10.5, 10.5, 0.34)",

            },
            variants: {
                scrollbar: ['dark']
            },
        },

    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
}
