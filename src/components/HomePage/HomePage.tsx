import React, { FC,ReactElement, createContext } from 'react'
import { useState, useEffect, useRef } from 'react'
import HALO from "vanta/dist/vanta.halo.min";//⚡️更改这个名称来改变背景效果
import * as THREE from "three";
import TitleBar from './TitleBar/TitleBar';
import MainContainer from './WorkContainer/MainContainer'
import './HomePage.less'
import AboutMe from './AboutMe/AboutMe' ;
import Articles from './Articles/Articles';
import TabContext from '../../utils/Tabcontext'
import { Outlet } from 'react-router-dom';



interface IProps  {
	// children? : ReactElement | ReactElement[] 
	children? : React.ReactNode | React.ReactNode[],//⚡️如果要在上层嵌套平行组件，则需对 children 进行声明
}



// 爷组件
const HomePage:FC<IProps> = (props: IProps):ReactElement => {
	

	// 内嵌子组件用 ————————————————————————————————
	const children = props.children




	//用于展示哪个 Tab  (showPage、setShowPage 传给子组件去改变，然后回调显示哪个 tab) ——————————————————
	//🛢️获取本地存的 showPage 数据
	const loadState = ():string => { 
		// 首次进入时，先判断一下是否有本地存储
		let localShowPageState = localStorage.getItem('showPageState') 
		//如果没有本地存储的话，就在本地存一份数据为 tab1
		if (!localShowPageState) {
			localStorage.setItem('showPageState', 'tab1') 
			let defaultState = (localStorage.getItem('showPageState') as string)
			return defaultState
		} else {
			let showPageData = (localStorage.getItem('showPageState') as string)
			return showPageData
		}
	}

	//⚡️问题：为什么返回 null 了？(因为不需要通过 stringify 转换成字符串，直接返回就行了，其次是上一次的色块的位置是通过 e.target 算出来的，再次加载的时候需要通过 useEffect 执行一下)
	useEffect(() => {
		loadState()//需要执行一下，否则不会显示上一次的 tab
		console.log(loadState())
		// console.log(localStorage.getItem('showPageState'))
	},[loadState()])
	


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
					mouseControls: false, //性能有点卡，先关闭了
					touchControls: false, //性能有点卡，先关闭了
					gyroControls: false,
					minHeight: 900,
					minWidth: 800,
					size: 1.70
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
						{/* ⚡️下面为二级路由的出口, 因为不是用 Link to 指定的跳转链接, 所以不用加路由出口 */}
						{/* <Outlet /> */}
						{showPage==='tab1' ? <AboutMe/> : ''}
						{showPage==='tab2' ? <MainContainer/> : ''}
						{showPage==='tab3' ? <Articles/> : ''} 
				</TabContext.Provider>
				<div className="vanta-bg" ref={vantaRef}></div>
			</div>
		</div> 
	)
}


export default HomePage
