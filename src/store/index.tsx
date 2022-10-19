//【8】.添加【中间件】、【调试工具】、并且初始化 store
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension" 
import reducers from "./reducers"


//【9】.初始化 【store 数据】以及【中间件】、【调试工具】
const store = createStore(reducers, composeWithDevTools(applyMiddleware()))

//【10】导出根 state 的【 rootState 类型】(ReturnType 表示这个对象是什么类型，就返回什么类型), 用来规范【要映射到组件内的数据】的类型
//⚠️注意，这个类型会在 【业务组件】 调用 {useSelector} 内进行使用, 比如 const tabs = useSelector((state: rootState))
export type rootState = ReturnType<typeof reducers>



export default store