import { useEffect,} from 'react'
import './App.less'
import HomePage from './components/HomePage/HomePage'
import MainContainer from './components/HomePage/WorkContainer/MainContainer'
import {Test2} from './api/hygraph'
// import MouseDot from './components/Mouse/MouseDot'


function App() {
	// 引入 vanta 库的初始化定义，用于渲染背景
	useEffect(() => {
		const threeScript = document.createElement('script')
		threeScript.setAttribute('id', 'threeScript')
		threeScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js')
		document.getElementsByTagName('head')[0].appendChild(threeScript)//🔥🔥把脚本添加到 head 中
	},[])

	return (
		<div className="App">
			{/* <Test2/> */}
			{/* <MouseDot/> */}
			<HomePage/>
		</div>
	)
}

export default App
