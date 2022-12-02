import React from 'react'
import './EmotionalModel.less'
import gradualArrow from '../../../../../assets/svg/icon-gradualArrowBlue.svg'
import bendingLine from '../../../../../assets/svg/line-bendingLine.svg'


export const EmotionalModel = () => {
	return (
		<>
			<div className="emotionalModel-main-container">

				{/* 左描述 */}
				<div className="emotionalModel-left-personal-container">
					<div className="emotionalModel-left-personal-top">Xxx xx xxxxx xxxxxxx xx xxxx xxxx xx xxx</div>
					<img src={bendingLine} alt="" className="bendingLine-leftTop"/>
					<div className="emotionalModel-left-PersonalAndProduct-container">
						<div className="emotionalModel-left-Personal">Personal</div>  
						<div className="emotionalModel-left-des">Xxx xx xxxxx xxxxxxx xx xxxx xxxx <br/> xx Xxxxxx xxxxxxx xx xxxx xx</div>  
						<div className="emotionalModel-left-Product">Product</div>  
					</div>
					<img src={bendingLine} alt="" className="bendingLine-leftBottom"/>
					<div className="emotionalModel-left-personal-bottom">Xxx xx xxx xxxxxxxxx xxxx</div>
				</div>

				{/* 左箭头 */}
				<img src={gradualArrow} alt="" className="emotionalModel-left-gradualArrow"/>

				{/* 中间图形 */}
				<div className="emotionalModel-center-graphic">
					<p>
						Customize 
						<br />
							& 
						<br />
						Emotional
					</p>
				</div>

				{/* 右箭头 */}
				<img src={gradualArrow} alt="" className="emotionalModel-right-gradualArrow"/>

				{/* 右描述 */}
				<div className="emotionalModel-right-Teams-container">
					<div className="emotionalModel-right-Teams-top">Xxx xx xxxxx xxxxxxx xx xxxx xxxx xx xxx</div>
					<img src={bendingLine} alt="" className="bendingLine-rightTop"/>
					<div className="emotionalModel-right-ProductAndTeams-container">
						<div className="emotionalModel-right-Product">Product</div>  
						<div className="emotionalModel-right-des">Xxx xx xxxxx xxxxxxx xx xxxx xxxx xx <br/> Xxx xx xxxxx xxxxxxx xx xxxx xxxx xx</div>  
						<div className="emotionalModel-right-Teams">Teams</div>  
					</div>
					<img src={bendingLine} alt="" className="bendingLine-rightBottom"/>
					<div className="emotionalModel-right-personal-bottom">Xxx xx xxx xxxxxxxxx xxxx</div>
				</div>
			</div>
		</>
	)
}

export default EmotionalModel
