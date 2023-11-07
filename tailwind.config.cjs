/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'vga':'IBM_VGA',
				'space-mono':'Space Mono'
			},
			dropShadow: {
				'neon': '0 0px 15px #86efac',
				'blue-neon':'0px 0px 4px #50c2dd',
				'shadow':'0px 7px 3px #000c'
			}
		},
	},
	plugins: [],
}
