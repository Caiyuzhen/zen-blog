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
	
	// 渲染 vanta 背景用
	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null)


	// 内嵌子组件用
	const children = props.children


	// 🔥展示哪个 Tab 用 (⚡️showPage、setShowPage 传给子组件去改变显示哪个 tab)
	const [showPage, setShowPage] = useState('tab1')

	function changePage(showPage: string) {//与 hook 关联, 传给子组件, 子组件调用来改变父组件的状态值, 相当于可以直接 changePage('tab2') 来改变 showPage 的值!
		setShowPage(showPage)
	}


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

				{/* 📦传递给下层数据(挫一点的写法就是一层层传) */}
				{/* <TitleBar showPage={showPage} changePage={changePage}/>  */}
				{/* 📦传递给下层数据(优雅一点的写法) */}
				<TabContext.Provider value={{showPage, changePage}}>
						<TitleBar/>
						{showPage==='tab1' ? <MainContainer/> : ''}
						{showPage==='tab2' ? <AboutMe/> : ''}
						{showPage==='tab3' ? <Articles/> : ''} 
					</TabContext.Provider>
				<div className="vanta-bg" ref={vantaRef}>
					{/* 👇子组件 */}
					{/* {children} */}
	
					
				</div>
			</div>
		</div> 
	)
}


export default HomePage
