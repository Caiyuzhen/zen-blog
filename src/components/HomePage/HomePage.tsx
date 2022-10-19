import React, { FC,ReactElement, createContext } from 'react'
import { useState, useEffect, useRef } from 'react'
import HALO from "vanta/dist/vanta.halo.min";//⚡️更改这个名称来改变背景效果
import * as THREE from "three";
import TitleBar from './TitleBar/TitleBar';
import MainContainer from './MainContainer/MainContainer'
import './HomePage.less'
import AboutMe from './AboutMe/AboutMe' ;
import Articles from './Articles/Articles';
import TabContext from '../../utils/Tabcontext'



interface IProps  {
	// children? : ReactElement | ReactElement[] 
	children? : React.ReactNode | React.ReactNode[],//⚡️如果要在上层嵌套平行组件，则需对 children 进行声明
}



// 爷组件
const HomePage:FC<IProps> = (props: IProps):ReactElement => {
	

	// 内嵌子组件用 ————————————————————————————————
	const children = props.children




	// 🔥用于展示哪个 Tab  (showPage、setShowPage 传给子组件去改变，然后回调显示哪个 tab) ——————————————————
	//🛢️获取本地存的 showPage 数据
	
	const loadState = ():string => { 
		let localShowPageState = localStorage.getItem('showPageState') 

		if (localShowPageState = null) {
			return 'tab1'
		} else {
			const showPageData = (JSON.parse(localStorage.getItem('localShowPageState') as string))
			return showPageData
		}
	}

	//问题：为什么返回 null 了？
	useEffect(() => {
		loadState()
		console.log(JSON.parse(localStorage.getItem('localShowPageState') as string))
	},[])
	


	//🛢️用 hook 方法，传入本地 showPage 的初始数据,🔥本质上孙组件会执行这个 hook !
	// const [showPage, setShowPage] = useState('tab1')//硬写 tab 1 作为默认值
	const [showPage, setShowPage] = useState<string>(loadState)//读取本地数据作为默认值
	

	//与 hook 关联, 传给子组件, 子组件调用来改变父组件的状态值, 相当于可以直接 changePage('tab2') 来改变 showPage 的值!
	function changePage(showPage: string) {
		setShowPage(showPage)
		//🛢️改变后, 把 showPage 数据保存到本地
		localStorage.setItem('showPageState', showPage) 
	}




	// 渲染 vanta 背景用 ————————————————————————————————————
	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null)


	//渲染渐变背景
	useEffect(() => {
		if(!vantaEffect){
			setVantaEffect(
				HALO({
					el: vantaRef.current,
					THREE,
					// 👇额外的效果(不同背景的额外参数放这里，可以在官网调试看效果)
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 400.00,
					minWidth: 400.00,
					size: 2.50
				})
			)
		}
		return () => { 
		// vantaRef.current = null //如果依赖 Ref 变化才有可能要销毁
		}
	},[])


	return (
		<div className='home-page'>
			<div className='home-page-container'>

				{/* 📦用 Context 包裹来传递给下层数据(优雅一点的写法) */}
				<TabContext.Provider value={{showPage, changePage}}>
						<TitleBar/>
						{showPage==='tab1' ? <MainContainer/> : ''}
						{showPage==='tab2' ? <AboutMe/> : ''}
						{showPage==='tab3' ? <Articles/> : ''} 
				</TabContext.Provider>
				<div className="vanta-bg" ref={vantaRef}></div>
			</div>
		</div> 
	)
}


export default HomePage
