/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './templates/**/*.html',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                "50": "#eff6ff",
                "100": "#dbeafe",
                "200": "#bfdbfe",
                "300": "#93c5fd",
                "400": "#60a5fa",
                "500": "#3b82f6",
                "600": "#2563eb",
                "700": "#1d4ed8",
                "800": "#1e40af",
                "900": "#1e3a8a",
                "950": "#172554",
                'Nyanza': '#E1f4CB',
                'Sage': '#BACBA9',
                'Dimgray': '#717568',
                'Blackolive': '#3F4739',
                'Misty_Blue': '#D9E9EC',
                'Sky_Blue': '#83AEBA',
                'Steel_Blue': '#62839D',
                'Midnight_Blue': '#0A102F',
            }
        },
        fontFamily: {
            'body': [
                'Inter',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'system-ui',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ],
            'sans': [
                'Inter',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'system-ui',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ]
        },
        backgroundImage: {
            'bg_splash_art': "url('/static/images/landing_splash_art.png')",
        }
    },
    plugins: [
        require('flowbite/plugin'),
    ],
}

