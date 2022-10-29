import React from 'react'
import './MouseDot.less'
import getMousePosition from '../../hooks/getMousePosition'

const MouseDot = () => {

	const { x, y } = getMousePosition() //从 hook 获得鼠标的 X , Y 坐标
	console.log(x,y)

	return (
		<>
			{/* 外圆 */}
			<div 
				className="ring" 
				style={{
					left: `${x}px`, 
					top: `${y}px`
				}}>
			</div>

			{/* 内圆 */}
			<div 
				className="dot"
				style={{
					left: `${x}px`, 
					top: `${y}px`
				}}>	
			</div>
		</>
	)
}

export default MouseDot
