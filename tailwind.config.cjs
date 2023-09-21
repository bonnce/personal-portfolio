/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'vga':'IBM_VGA',
				'vga-plus':'IBM_VGA_PLUS',
				'mda':'IBM_MDA',
				'mda-plus':'IBM_MDA_PLUS',
				'botera':'BOTERA',
				'botera-stencil':'BOTERA_STENCIL',
			}
		},
	},
	plugins: [],
}
