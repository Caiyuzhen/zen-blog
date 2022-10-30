import React , { createContext, FC, useState } from 'react'


//【 🏹️（4）】定义包裹值的工具函数（本质上在在子组件内传递 class 的值）


// 定义创建一个上下文 context 的函数（⚡️本质上是包裹了一个 hooks！用 cursorChangeHandler 去改变 cursorType 的值）, cursorType 是当 onMouseEnter 时要添加的 class
type IMouseContextType = {
	cursorType: string,
	cursorChangeHandler: (cursorType: string) => void
}

// 工具 1 - 包裹上下文
export const MouseContext = createContext<IMouseContextType>({
	cursorType: "", 
	cursorChangeHandler: () => {},
});
  





// 创建一个包裹上下文 context 值的工具函数, 会把值传递给 children 子组件
type IMouseContextProps = {
	children: React.ReactNode
}

// 工具 2 - 获得实际的值
const MouseContextProvider = ( {children}:IMouseContextProps ) => {
	const [cursorType, setCursorType] = useState<string>('')

	const cursorChangeHandler = (cursorType:string) => {//把值设置进 cursorType
		setCursorType(cursorType)
	}

	const value = {
		cursorType: cursorType,
		cursorChangeHandler: cursorChangeHandler
	}

	return (
		// 把值包裹给上面的 MouseContext
		<MouseContext.Provider value={value}> 
			{/* 子组件将获得 value */}
			{children}
		</MouseContext.Provider> 
	)
}


export default MouseContextProvider
