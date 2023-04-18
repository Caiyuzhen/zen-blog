import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import md from 'vite-plugin-md'
import path from 'path' 


// https://vitejs.dev/config/
export default defineConfig({
	//   plugins: [react()],
	plugins: [
		react({ jsxImportSource: '@emotion/react' }), //试一下，使用 emotion 的库
		md({
			// 配置 `vite-plugin-md` 的选项
			wrapperComponent: 'MarkdownWrapper',
			mode: [
			  'html',
			  'vue',
			],
		}),
	],
  	server: {
		cors: true, // 默认启用并允许任何源
		// port: 3005,
		// open: true, // 在服务器启动时自动在浏览器中打开应用程序
		proxy: { //代理配置以避免跨域问题
			'/api': {
				target: 'http://localhost:3005',  //代理接口
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			},		
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'), //配置路径别名, 可以通过 @ 进行引入, 避免路径更换导致的问题
		},
	},
	// build: {
	// 	rollupOptions: {
	// 		input: {
	// 		  main: path.resolve(__dirname, 'index.html'),
	// 		  articleOne: path.resolve(__dirname, '/src/assets/content/articles/articleList/articleOne.md'),
	// 		},
	// 	  },
  	// }
})
