import React, { FC,createContext, useEffect, MouseEvent, useContext, useRef } from 'react'
import './Filter.less'
import TabContext from '../../../../utils/Tabcontext' //createContext + use Context


interface IProps {
	isActive: string,//判断 tab 是否选中了
	onChangeTab: (isActive: string) => void, //⚡️由父组件传的方法给子组件
	// showPage: string;//判断显示哪个页面
	// changePage: (showPage: string) => void;//⚡️由父组件传的方法给子组件
}


// 孙组件
const FilterTabs:FC<IProps> = ( {isActive, onChangeTab} ) => {//传入父组件的 hook 

	//⚡️从爷组件传过来的数据, 利用 useContext 来获取
	const {showPage, changePage} = useContext(TabContext) 

	//👋获取 tab 节点跟 tab 底部色块 (两种获取方式)
	const bottomTabBar = useRef<HTMLDivElement>(null)

	// const tab1 = document.querySelector('#tab1')
	// const tab2 = document.querySelector('#tab2')
	// const tab3 = document.querySelector('#tab3')

	// 色块的基础位置
	const Position = {
		baseX: -8,//🔥tab 底部色块的初始距离, 与 tab 的 padding 还有 margin 相关，需要细调！
		baseY: -4,
	}


	//⚡️封装个改变 tab 的位置的函数
	function changeBottomColor(e:MouseEvent): void {
		if(bottomTabBar.current !== null) {
			if(isActive){
				bottomTabBar.current.style.transform = `translate(${Position.baseX + (e.target as HTMLElement).offsetLeft}px, ${Position.baseY}px)`//等于当前选中的 tab 的 offset 加上基础位置
			}
		}
		console.log((e.target as HTMLElement).offsetLeft)
	}

	// useEffect(()=>{
		// console.log('当前的页数:' + showPage)
		// if(bottomTabBar.current !== null) {
		// 	if(isActive === 'tab1'){
		// 		bottomTabBar.current.style.transform = `translate(${Position.baseX}px, ${Position.baseY}px)`//等于当前选中的 tab 的 offset 加上基础位置
		// 	}
		// 	if(isActive === 'tab2'){
		// 		bottomTabBar.current.style.transform = `translate(${Position.baseX + 60}px, ${Position.baseY}px)`//等于当前选中的 tab 的 offset 加上基础位置
		// 	}
		// 	if(isActive === 'tab3'){
		// 		bottomTabBar.current.style.transform = `translate(${Position.baseX + 132}px, ${Position.baseY}px)`//等于当前选中的 tab 的 offset 加上基础位置
		// 	}
		// }
	// 	changeBottomColor()
	// },[isActive])


	return (
		<div>
			<div className="filter-container">
				<div 
					id='tab1'
					className={`tab-styles ${isActive==='tab1' ? 'filter-option-active' : 'filter-option'}`} //模板字符串添加多个类名的写法
					onClick={ (e)=>{onChangeTab('tab1'); changePage('tab1'); changeBottomColor(e)} }//🔥本质上是执行了父组件的函数
					>All</div>
				<div 
					id='tab2'
					className={`tab-styles ${isActive==='tab2' ? 'filter-option-active' : 'filter-option'}`} //模板字符串添加多个类名的写法
					onClick={ (e)=>{onChangeTab('tab2'); changePage('tab2'); changeBottomColor(e)} }//🔥本质上是执行了父组件的函数
					>About</div>
				<div 
					id='tab3'
					className={`tab-styles ${isActive==='tab3' ? 'filter-option-active' : 'filter-option'}`} //模板字符串添加多个类名的写法
					onClick={ (e)=>{onChangeTab('tab3'); changePage('tab3'); changeBottomColor(e) } }//🔥本质上是执行了父组件的函数
					>Project</div>
				<div className="filter-bg" ref={bottomTabBar}></div>
			</div>
		</div>
	)
}

export default FilterTabs
