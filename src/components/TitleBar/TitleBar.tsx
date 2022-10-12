import React, { FC,ReactElement, useState } from 'react'
import ZenAvatar from '../../assets/img/Zen.png'
import FilterTabs from '../FilterTabs/FilterTabs'
import './TitleBar.less'


interface IProps {

}


//⚡️Tab 核心思路，【父组件】把【方法】跟【初始状态】传给子组件，子组件调用父组件的方法去改变父组件的状态值
const TitleBar:FC<IProps> = ():ReactElement => {

	const[isActive, setIsActive] = useState('tab1')

	function changeTab  (isActive:string) {
		setIsActive(isActive)
		console.log(isActive)
	}

	return (
		<>
			<div className="main-nav">
				<div className="page-logo">
					<img src={ZenAvatar} decoding="async" alt="" width="40px"/>
				</div>
				{/* 判断 filter 是否选中了, 🔥点击后【传值】给子组件，跟【传方法】给子组件 */}
				<FilterTabs 
					isActive={isActive} 
					onChangeTab={changeTab}/>
				<div className="contact"><p>Contact</p></div>
			</div>
		</>
	)
}

export default TitleBar