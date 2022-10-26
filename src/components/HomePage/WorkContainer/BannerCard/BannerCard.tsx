import React, { FC } from 'react'
import './BannerCard.less'
import mainWork from '../../../../assets/img/work-1.jpg'

export const BannerCard:FC = () => {
	return (
		<>
			<div className="mainWork-container">
				<img src={mainWork} alt="" className="mainWork"/>
				<div className="content-conatiner">
					<p className="content-title">UI&UX Design</p>
					<p className="content-subtitle">A simple note app, some desctiptions, and some examples of how to use it.A simple note app, some desctiptions, and some examples of how to use it.</p>
				</div>
			</div>
		</>
	)
}
