import React from 'react'
import arrow from '../../../../../assets/svg/icon-gradualArrow.svg'
import profile from '../../../../../assets/img/card-profile.png'
import framework from '../../../../../assets/img/card-profileFramework.png'
import widgetLeft from '../../../../../assets/img/card-widgetLeft.png'
import widgetRight from '../../../../../assets/img/card-widgetRight.png'
import './PfWidget.less'

export const PfWidget = () => {
	return (
		<>
			<div className="pfWidget-main-container">
				{/* 顶部信息 */}
				<p className="pfWidget-main-container-topInfo">
					xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx
					xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx
					xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx 
				</p>

				{/* 底部信息 */}
				<div className="pfWidget-main-container-bottomInfo">
					<div className="pfWidget-bottomInfo-profileContainer">
						<img src={profile} className="profileContainer-left"/>
						<img src={framework} className="profileContainer-right"/>
					</div>
					<img src={arrow} alt="" className="arrow"/>
					<div className="pfWidget-bottomInfo-widgetContainer">
						<img src={widgetLeft} className="widgetContainer-left"></img>
						<img src={widgetRight} className="widgetContainer-right"></img>
					</div>
				</div>
			</div>
		</>
	)
}


export default PfWidget