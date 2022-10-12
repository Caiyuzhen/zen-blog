import React from 'react'

// 用来传递数据的（爷组件 <-> 子组件）
const TabContext = React.createContext({
	  showPage: 'tab1',
	  changePage: (showPage: string): void => {}
})

export default TabContext