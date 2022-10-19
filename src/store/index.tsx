//【8】.添加【中间件】、【调试工具】、并且初始化 store
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension" 
import reducers from "./reducers"


//【9】.初始化 【store 数据】以及【中间件】、【调试工具】
const store = createStore(reducers, composeWithDevTools(applyMiddleware()))

//【10】导出根 state 的【 rootState 类型】(ReturnType 表示这个对象是什么类型，就返回什么类型), 用来规范【要映射到组件内的数据】的类型
//⚠️注意，这个类型会在 【业务组件】 调用 {useSelector} 内进行使用, 比如 const tabs = useSelector((state: rootState))
export type rootState = ReturnType<typeof reducers>




//【3-3】🛢️状态保存到本地的方法: 只要状态改变, 就保存到本地 (方法二: 本地存储)
const saveState = (state: string) => {
	localStorage.setItem('tabState', JSON.stringify(state))
}

// store.subscribe(() => { //🛢️在状态改变的时候存储(影响性能)
// 	saveState(store.getState().tabs.tabName)
// })

window.onbeforeunload = () => { //🛢️在关闭窗口一瞬间存储
	saveState(store.getState().tabs.tabName)
}


export default store