import { useEffect,} from 'react'
import './App.less'
import HomePage from './components/HomePage/HomePage'
import TitleBar from './components/TitleBar/TitleBar'
import MainContainer from './components/MainContainer/MainContainer'




function App() {

	useEffect(() => {
		const threeScript = document.createElement('script')
		threeScript.setAttribute('id', 'threeScript')
		threeScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js')
		document.getElementsByTagName('head')[0].appendChild(threeScript)//🔥🔥把脚本添加到head中
		// 清理，防止每次都重复添加这个脚本
		// return () => {
		// 	if(threeScript){
		// 		threeScript.remove()
		// 	}
		// }
	},[])


	
	return (
		<div className="App">
			<HomePage>
				<TitleBar/>
				<MainContainer/>	
			</HomePage>
		</div>
	)
}

export default App
