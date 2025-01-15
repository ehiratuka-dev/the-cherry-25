import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		viteStaticCopy({
			targets: [
				{
					src: 'public/assets/**/*',
					dest: 'assets',
				},
			],
		}),
	],
	server: {
		watch: {
			usePolling: true,
			interval: 100,
		},
		host: true,
		port: 3000,
		strictPort: true,
	},
	build: {
		copyPublicDir: false,
	},
})
