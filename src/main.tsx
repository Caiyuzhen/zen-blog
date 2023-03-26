import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import MouseContextProvider from './components/Mouse/useMouseContext'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import router from './router/index'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

	//【11】.导入 redux 跟 store 相关的方法来包裹根组件
	<Provider store={store}>
		{/* 【 🏹️（（5）】在全局内传递鼠标坐标的 provider */}
		<MouseContextProvider>
    		{/* <App /> */}
			<RouterProvider router={router}/>
		</MouseContextProvider>
	</Provider>
)
