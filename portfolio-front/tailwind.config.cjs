/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xxs: '0px',
			xs: '480px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1440px',
			xxl: '2000px',
    },
		colors: {
			...colors,
			background_dark: '#101828',
			background_light: '#fff',
			card_dark: '#1f2937',
			card_light: '#f7f7f9',
			accent: '#ffc400',
			complementary: '#003cff',
			analogous: '#ff4400',
			font_primary: 'black',
			font_primary_dark: 'white',
			font_secondary: '#949494',
			font_secondary_dark: '#fefefe',
			font_paragraph: '#707070',
			font_paragraph_dark: '#fefefe',
			background_nav: 'rgba(255, 255, 255, 0.8)',
			background_nav_dark: 'rgba(31, 41, 55, 0.8)',
    },
		extend: {}
	},
	plugins: [],
}
