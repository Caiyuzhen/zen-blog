import React, { useEffect, useState } from 'react'
import Trottle from '../../src/utils/Trottle'


//【 🏹️（1）】 定义获得鼠标坐标的 hooks

// 鼠标坐标参数的类型
type MousePos = { x: number, y: number }



//🌟方法一: 调用【封装好的节流工具函数】
// 获得鼠标坐标的 hooks, 返回一个【鼠标坐标的对象】
export default function getMousePosition(): MousePos {


	const [mousePosition, setMousePosition] = useState<MousePos>({ x: 0, y: 0 }) //用来存储鼠标的位置	

	useEffect(() => {

		// 定义湖区鼠标坐标的函数
		const mouseMoveHandler = (e:MouseEvent) => {
			const { clientX, clientY } = e //🔥从鼠标事件中解构出鼠标的 X , Y 坐标
			setMousePosition({ x: clientX, y: clientY }) //🔥把鼠标的 X , Y 坐标存储到 mousePosition 中
		}

		// 调用节流函数，传入上面的函数
		const mouseMove = Trottle(mouseMoveHandler, 50)

		//真正执行节流函数（并执行获取坐标的函数来获得 e + 延迟秒数）
		document.addEventListener('mousemove', mouseMove) //监听鼠标移动事件, 执行函数 mouseMoveHandler 来获得坐标

		// 停止执行函数
		return () => {
			document.removeEventListener('mousemove', mouseMove) //组件卸载时, 移除鼠标移动事件的监听 
		}
	}, [])

	//返回鼠标坐标位置
	return mousePosition
}


// 🌟方法二: 自制【简易节流器】
// // 获得鼠标坐标的 hooks, 返回一个【鼠标坐标的对象】
// export default function getMousePosition(): MousePos {

// 	let timer: string | null | NodeJS.Timeout = null//节流，在指定时间内只执行一次

// 	const [mousePosition, setMousePosition] = useState<MousePos>({ x: 0, y: 0 }) //用来存储鼠标的位置
	
// 	useEffect(() => {
// 		if (timer) { //节流,每隔 100ms 停一下
// 			return
// 		}

// 		timer = setTimeout(() => {
// 			const mouseMoveHandler = (e:MouseEvent) => {
// 				const { clientX, clientY } = e //🔥从鼠标事件中解构出鼠标的 X , Y 坐标
// 				setMousePosition({ x: clientX, y: clientY }) //🔥把鼠标的 X , Y 坐标存储到 mousePosition 中
// 			}
	
// 			document.addEventListener('mousemove', mouseMoveHandler) //监听鼠标移动事件, 执行函数 mouseMoveHandler 来获得坐标
	
// 			return () => {
// 				document.removeEventListener('mousemove', mouseMoveHandler) //组件卸载时, 移除鼠标移动事件的监听 
// 			}
// 		}, 50)//节流时间
	
// 	}, [])

// 	//返回鼠标坐标位置
// 	return mousePosition
// }
