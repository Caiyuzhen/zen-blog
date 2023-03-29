// 🌟用于在平行组件中传递数据, 类比鼠标 hover 放大效果, 相当于自己造一个父组件去嵌套别人~
import React , { createContext, FC, useState } from 'react'


/*
	【 🏹️（4）】定义包裹值的工具函数（本质上在在子组件内传递 class 的值, 然后去改变⭕️圆圈的大小!!）
	因为全局都要使用，所以抽象出来
*/


// 上下文函数的类型(配合 useState 使用, useState 用来改变值， 改变后的值用 MouseContext 来传递给子组件)
type IMouseContextType = {
	cursorType: string,
	cursorChangeHandler: (cursorType: string) => void
}


// 工具 1 - 定义创建一个上下文 context 的函数来包裹上下文 --- one 快递车 MouseContext,实际传送的值就是这个【MouseContext】
//（⚡️本质上是包裹了一个 hooks！用 cursorChangeHandler 去改变 cursorType 的值）, cursorType 是当 onMouseEnter 时要添加的 class
export const MouseContext = createContext<IMouseContextType>({ //👈MouseContext 不是 useState!!!
	cursorType: "", 
	cursorChangeHandler: () => {},
});
  





// 创建一个包裹上下文 context 值的工具函数, 会把值传递给 children 子组件
type IMouseContextProps = {
	children: React.ReactNode //要执行 cursorChangeHandler 的组件
}

// 工具 2 - 获得实际的值
const MouseContextProvider = ( {children}:IMouseContextProps ) => {
	const [cursorType_, setCursorType] = useState<string>('') //👈本质上用的是 useState 的 hook ！

	const cursorChangeHandler_ = (cursorType:string) => {//执行这个函数就会把值设置进上面的 hooks 内
		setCursorType(cursorType)
	}

	// 定义个对象来接收最终的值，更方便些
	const value = {
		cursorType: cursorType_, //hook 函数的值！
		cursorChangeHandler: cursorChangeHandler_ //上面的函数, 给到子组件去执行
	}

	return (
		// 把值包裹给上面的 MouseContext -- two 快递货
		<MouseContext.Provider value={value}>  
			{/* 子组件将获得 value( 包含一个 cursorChangeHandler 跟 cursorType 值) */}
			{children}
		</MouseContext.Provider> 
	)
}


export default MouseContextProvider
