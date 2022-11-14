import React from 'react'
import './KMGrowth.less'
import radiaLine from '../../../../../assets/svg/bg-radia.svg'
import centerLine from '../../../../../assets/svg/bg-radia-dottedLine.svg'
import insideLine from '../../../../../assets/svg/bg-radia-normalLine.svg'
import outLine from '../../../../../assets/svg/bg-radia-outLine.svg'



export const KMGrowth = () => {
	return (
		<>
			<div className="KMGrowth-main-container">
				{/* 顶部信息 */}
				<div className="KMGrowth-main-container-topInfo">
					<div className="KMGrowth-topInfo-title">
						Title information
					</div>
					<div className="KMGrowth-topInfo-des">
						We provide users with an automated way to interact with bulk slack account associations and bulk Jira Issue imports, greatly simplifying the interaction steps.
						We provide users with an automated way to interact with bulk slack account associations and bulk Jira Issue imports, greatly simplifying the interaction steps.
					</div>
				</div>

				{/* 底部图形 容器*/}
				<div className="KMGrowth-main-container-bottomInfo">
					{/* 左信息 */}
					<div className="KMGrowth-bottomInfo-textAndGraphic-left">
						<p className="KMGrowth-bottomInfo-title">Tree XXX</p>
						<ul className="KMGrowth-bottomInfo-bullet">
							<li className="KMGrowth-bottomInfo-list">list 1 XXXXXXXXXXXXXXXXXX</li>
							<li className="KMGrowth-bottomInfo-list">list 2 XXXXXXXXXXXX</li>
						</ul>
					</div>

					{/* 中间圆形信息 */}
					<div className="KMGrowth-bottomInfo-circleGraphic">
						<div className="KMGrowth-centerCircle">
							<p>XXX As XXXXXX</p>
						</div>
					</div>

					{/* 右信息 */}
					<div className="KMGrowth-bottomInfo-textAndGraphic-right">
						<p className="KMGrowth-bottomInfo-title">Net XXX</p>
						<ul>
							<li className="KMGrowth-bottomInfo-list">list 1 XXXXXXXXXXXXXXXXXX</li>
							<li className="KMGrowth-bottomInfo-list">list 2 XXXXXXXXXXXX</li>
						</ul>
					</div>

					{/* 零碎的 hash tag and dots */}
					<div className="KMGrowth-hashTagAndDotsGroup">
						<span className="hashTagLeftTop">HashTag A</span>
						<span className="hashTagLeftBottom">HashTag B</span>
						<span className="hashTagRightTop">HashTag C</span>
						<span className="hashTagRightBottom">HashTag D</span>
						<span className="KMGrowth-leftDot">XXXXXX</span>
						<span className="KMGrowth-rightDot">XXXXXX</span>
						<span className="KMGrowth-bottomDot">XXXXXX</span>
					</div> 
					{/* 放射图形 */}
					<img src={radiaLine} alt="" className="radiaLine"/>
					<img src={insideLine} alt="" className="insideLine"/>
					<img src={centerLine} alt="" className="centerLine"/>
					<img src={outLine} alt="" className="outLine"/>
				</div>
			</div>
		</>
	)
}

export default KMGrowth