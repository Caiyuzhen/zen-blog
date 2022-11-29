import React from 'react'
import './UserNPS.less'
import overseaFeedbackPic from '../../../../../assets/img/img-oversea-feedback.png'
import domesticFeedbackPic from '../../../../../assets/img/img-domestic-feedback.png'
import AuroraGradientBG_2 from '../../../../../assets/svg/bg-AuroraGradient-2.svg'


export const UserNPS = () => {
	return (
	<>
		<div className="userNPS-main-container">
			{/* 顶部一块信息 */}
			<div className="userNPS-main-container-top">
				{/* 海外用户反馈 */}
				<div className="userNPS-left-overseas-container">
					{/* 左侧 */}
					<div className="userNPS-left-overseas-titleCotainer">
						<div className="userNPS-left-overseas-title">
							Overseas xxx xxxxxxxx xx XXXX
						</div>
						<div className="userNPS-left-overseas-bottomDataContainer">
							<p className="left-overseas-NPS">NPS:&nbsp;XX%</p>
							<p className="left-overseas-NPS">Satisfaction:&nbsp;X.XX</p>
						</div>
					</div>
					{/* 中间图片 */}
					<img src={overseaFeedbackPic} alt="" className="overseaFeedbackPic"/>
				</div>

				{/* 国内用户反馈 */}
				<div className="userNPS-right-domestic-container">
					{/* 右侧 */}
					<div className="userNPS-right-domestic-titleContainer">
						<div className="userNPS-right-domestic-title">
							Domestic xxx xxxxxxxx xx XXXX
						</div>
						<div className="userNPS-right-domestic-bottomDataContainer">
							<p className="right-domestic-NPS">NPS:&nbsp;XX%</p>
							<p className="right-domestic-NPS">Satisfaction:&nbsp;X.XX</p>
						</div>
					</div>
					{/* 中间图片 */}
					<img src={domesticFeedbackPic} alt="" className="domesticFeedbackPic"/>
				</div>
			</div>

			{/* 底部一块信息 */}
			<div className="userNPS-main-container-bottom">
				<p className="userNPS-main-description">
					xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx
				</p>
			</div> 

			{/* 最底部的弥散投影 */}
			<img src={AuroraGradientBG_2} alt="" className="AuroraGradientBG_2"/>
		</div>
	</>
	)
}


export default UserNPS