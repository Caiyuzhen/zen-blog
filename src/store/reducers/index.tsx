//【6】.引入 {combineReducers } 方法来导出定义好的每条 reducer
import { combineReducers } from 'redux'
import tabs from './tabs'


//【7】.合并所有 reducer，并且进行导出, ⚡️注意以后每新增一条 reducer 都需要来这里合并一下
export default combineReducers({tabs})