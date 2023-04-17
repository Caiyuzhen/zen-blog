import React, { FC } from 'react'
import nextIcon from '../../../../../src/assets/svg/icon-next.svg'  
import './WorkTopInfo.less'


export const WorkTopInfo:FC = () => {
	return (
		<div className="workTopInfo-container">
			{/* 顶部基础信息 */}
			<div className="baseInfo-container">
				<p>
				I've experienced TocC and different types of ToB projects in my career, and in recent years I've mainly been working on SAAS products, so if you're interested, you can browse my work, thanks a lot 🙏!
				</p>
				<img src={nextIcon} alt="" 
					 style={{
						transform: 'rotate(45deg)',
					 }}
				/>
			</div>
			{/* 中间大标题 */}
			<div className="bigTitle-container">
				<div className="bigTitle text">Main Works</div>
				<div className="trim"></div>
			</div>
			{/* 底部时间轴 */}
			<div className="timeLine-container">
				<div className="timeline-Step-one timeline">
					<p className="timeline-title">2019-2023</p>
					<p className="timeline-des">Product Designer</p>
				</div>
				<div className="circle"></div>
				<div className="timeline-Step-two timeline">
					<p className="timeline-title">2018-2019</p>
					<p className="timeline-des">Beteco UI&UX Designer</p>
				</div>
				<div className="circle"></div>
				<div className="timeline-Step-three timeline">
					<p className="timeline-title">2017-2018</p>
					<p className="timeline-des">Lianjia Visual Designer</p>
				</div>
				<div className="circle"></div>
				<div className="timeline-Step-four timeline">
					<p className="timeline-title">2013-2017</p>
					<p className="timeline-des">Just a student 😄</p>
				</div>
			</div>
		</div>
	)
}
