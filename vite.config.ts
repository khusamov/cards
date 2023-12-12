import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/training-cards',
	build: {
		outDir: 'docs'
	},
	plugins: [
		react({
			babel: {
				plugins: [
					[
						// Добавлена поддержка TypeScript-декораторов.
						// https://babeljs.io/docs/babel-plugin-proposal-decorators
						// https://stackoverflow.com/questions/66395054/how-do-i-enable-babel-plugin-proposal-decorators-with-vite
						'@babel/plugin-proposal-decorators',
						{
							version: '2022-03'
						}
					]
				]
			}
		})
	]
})
