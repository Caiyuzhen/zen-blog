import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

	//【11】.导入 redux 跟 store 相关的方法来包裹根组件
	<Provider store={store}>
    	<App />
	</Provider>

)
