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
						Growth of KM experience
					</div>
					<div className="KMGrowth-topInfo-des">
					The traditional folder content management model is building walls, which has high requirements for knowledge organizers, and the hierarchy of folders will be very deep after a long time, resulting in knowledge being shelved, forgotten, and very difficult to reuse. We hope to solve the current problem from a more fundamental aspect, and there are two knowledge organization models on the market, namely 'tree' and 'net', which are not opposing and have their own advantages and disadvantages. It is not a choice between the two. Our design goal is to turn the creation process into an organizing process, so that users can know the knowledge network more efficiently and review their knowledge structure more conveniently.
					</div>
				</div>

				{/* 底部图形 容器*/}
				<div className="KMGrowth-main-container-bottomInfo">
					{/* 左信息 */}
					<div className="KMGrowth-bottomInfo-textAndGraphic-left">
						<p className="KMGrowth-bottomInfo-title">Micro Perspective - Trees</p>
						<ul className="KMGrowth-bottomInfo-bullet">
							<li className="KMGrowth-bottomInfo-list">Clearer hierarchical relationships</li>
							<li className="KMGrowth-bottomInfo-list">Stronger certainty, enough to bring a sense of stability</li>
						</ul>
					</div>

					{/* 中间圆形信息 */}
					<div className="KMGrowth-bottomInfo-circleGraphic">
						<div className="KMGrowth-centerCircle">
							<p>Creation as Management</p>
						</div>
					</div>

					{/* 右信息 */}
					<div className="KMGrowth-bottomInfo-textAndGraphic-right">
						<p className="KMGrowth-bottomInfo-title">Macro Perspective - Net</p>
						<ul>
							<li className="KMGrowth-bottomInfo-list">A bigger picture that brings out the core scope</li>
							<li className="KMGrowth-bottomInfo-list">More complete context, easy to find invisible relationships</li>
						</ul>
					</div>

					{/* 零碎的 hash tag and dots */}
					<div className="KMGrowth-hashTagAndDotsGroup">
						<span className="hashTagLeftTop">Block referenced</span>
						<span className="hashTagLeftBottom">Bidirectional link</span>
						<span className="hashTagRightTop">Intelligence recommendation</span>
						<span className="hashTagRightBottom">Hashtag</span>
						<span className="KMGrowth-leftDot">Direct <br/> relationship</span>
						<span className="KMGrowth-rightDot">Indirect <br/> relationship</span>
						<span className="KMGrowth-bottomDot">Hidden <br/> relationship</span>
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