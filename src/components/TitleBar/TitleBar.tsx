import React, { FC,ReactElement, useState } from 'react'
import ZenAvatar from '../../assets/img/Zen.png'
import './TitleBar.less'


interface IProps {

}


const TitleBar:FC<IProps> = ():ReactElement => {


	const[isActive, setIsActive] = useState(true)

	return (
	<>
		<div className="main-nav">
			<div className="page-logo">
				<img src={ZenAvatar} decoding="async" alt="" width="40px"/>
			</div>
			<div className="filter-container">
				{/* 判断是否选中了 */}
				<div className={isActive ? 'filter-option-active' : 'filter-option'}>All</div>
				<div className="filter-option">About</div>
				<div className="filter-option">Project</div>
			</div>
			<div className="contact"><p>Contact</p></div>
		</div>
	</>
	)
}

export default TitleBar