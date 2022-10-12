import React, { FC,createContext, useEffect } from 'react'
import './Filter.less'



interface IProps {
	isActive: string,//判断 tab 是否选中了
	onChangeTab: (isActive: string) => void, //⚡️由父组件传的方法给子组件
	showPage: string;//判断显示哪个页面
	changePage: (showPage: string) => void;//⚡️由父组件传的方法给子组件
}


// 孙组件
const FilterTabs:FC<IProps> = ( {isActive, onChangeTab, showPage, changePage} ) => {

	useEffect(()=>{
		console.log(showPage)
	},[showPage])

	return (
		<div>
			<div className="filter-container">
				<div 
					className={isActive==='tab1' ? 'filter-option-active' : 'filter-option'}
					onClick={ ()=>{onChangeTab('tab1');changePage('tab1')} }//🔥本质上是执行了父组件的函数
					>All</div>
				<div 
					className={isActive==='tab2' ? 'filter-option-active' : 'filter-option'}
					onClick={ ()=>{onChangeTab('tab2');changePage('tab2')} }//🔥本质上是执行了父组件的函数
					>About</div>
				<div 
					className={isActive==='tab3' ? 'filter-option-active' : 'filter-option'}
					onClick={ ()=>{onChangeTab('tab3');changePage('tab3') } }//🔥本质上是执行了父组件的函数
					>Project</div>
			</div>
		</div>
	)
}

export default FilterTabs
