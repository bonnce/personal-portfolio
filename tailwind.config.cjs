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
			}
		},
	},
	plugins: [],
}
