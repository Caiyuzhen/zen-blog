import React, { FC,ReactElement } from 'react'
import ZenAvatar from '../../assets/img/Zen.png'
import './TitleBar.less'


interface IProps {

}


const TitleBar:FC<IProps> = ():ReactElement => {
  return (
	<>
		<div className="main-nav">
			<div className="page-logo">
				<img src={ZenAvatar} decoding="async" alt="" width="40px"/>
			</div>
			<div className="filter-container">
				<div className="filter-option">All</div>
				<div className="filter-option">About</div>
				<div className="filter-option">Project</div>
			</div>
			<div className="contact"><p>Contact</p></div>
		</div>
	</>
  )
}

export default TitleBar