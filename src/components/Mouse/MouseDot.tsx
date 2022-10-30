import React, { useContext } from 'react'
import './MouseDot.less'
import getMousePosition from '../../hooks/getMousePosition'
import { MouseContext } from '../Mouse/useMouseContent'


//【 🏹️（2）】渲染鼠标的圆点组件及样式

//鼠标圆点实例
const MouseDot = () => {

	const { cursorType } = useContext(MouseContext)//【 🏹️（8）】用来接受 MouseContext 内 cursorType 的值（在别处被别的组件所改变了）

	const { x, y } = getMousePosition() //【 🏹️（3）】从 hook 获得鼠标的 X , Y 坐标
	// console.log(x,y)

	return (
		<>
			{/* 外圆 */}
			<div 
	// className={`tab-styles ${isActive==='tab1' ? 'filter-option-active' : 'filter-option'}`} //模板字符串添加多个类名的写法
				// className={"ring" + ` ${cursorType}`}//【 🏹️（9）传入 cursorType 这个动态添加的类名】
				className={`ring  +  ${cursorType}`}//【 🏹️（9）传入 cursorType 这个动态添加的类名】
				style={{
					left: `${x}px`, 
					top: `${y}px`
				}}>
			</div>

			{/* 内圆 */}
			<div 
				className={"mouseDot" + ` ${cursorType}`}
				style={{
					left: `${x}px`, 
					top: `${y}px`
				}}>	
			</div>
		</>
	)
}

export default MouseDot
