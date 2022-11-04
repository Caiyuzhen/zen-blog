import React from 'react'

// 用来传递数据的（爷组件 <-> 子组件）
const TabContext = React.createContext({
	showPage: 'tab1',//默认值为 tab1
	changePage: (showPage: string): void => {}
})


export const InspireNavContext = React.createContext({
	// showNav: 0,//默认值为 0
	changeNav: (showNav: number): void => {}
})


export default TabContext
