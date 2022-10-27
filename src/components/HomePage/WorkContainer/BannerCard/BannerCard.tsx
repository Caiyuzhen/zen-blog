import React, { FC } from 'react'
import './BannerCard.less'
import mainWork from '../../../../assets/img/work-1.jpg'
import detailIcon from '../../../../assets/svg/icon-detail.svg'


export const BannerCard:FC = () => {
	return (
		<>
			<div className="mainWork-container">
				<img src={mainWork} alt="" className="mainWork"/>
				<div className="content-conatiner">
					<p className="content-title">UI&UX Design</p>
					<p className="content-subtitle">A simple note app, some desctiptions, and some examples of how to use it.A simple note app, some desctiptions, and some examples of how to use it.</p>
					<div className="navDot-container">
						<div className="navDotGroup">
							<span className="dot "></span>
							<span className="dot dot-Selector"></span>
							<span className="dot "></span>
							<span className="dot "></span>
						</div>
						<img src={detailIcon} alt="" />
					</div>
				</div>
			</div>
		</>
	)
}
