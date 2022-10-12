import React, {FC} from 'react'
import './Filter.less'



interface IProps {
	isActive: string,//判断 tab 是否选中了
	onChangeTab: (isActive: string) => void //⚡️由父组件传的方法给子组件
}


const FilterTabs:FC<IProps> = ({isActive, onChangeTab}) => {
  return (
	<div>
		<div className="filter-container">
			<div 
				className={isActive==='tab1' ? 'filter-option-active' : 'filter-option'}
				onClick={ ()=>{onChangeTab('tab1')} }//🔥本质上是执行了父组件的函数
				>All</div>
			<div 
				className={isActive==='tab2' ? 'filter-option-active' : 'filter-option'}
				onClick={ ()=>{onChangeTab('tab2')} }//🔥本质上是执行了父组件的函数
				>About</div>
			<div 
				className={isActive==='tab3' ? 'filter-option-active' : 'filter-option'}
				onClick={ ()=>{onChangeTab('tab3')} }//🔥本质上是执行了父组件的函数
				>Project</div>
		</div>
	</div>
  )
}

export default FilterTabs
