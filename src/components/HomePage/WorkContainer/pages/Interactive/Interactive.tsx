import React from 'react'
import './Interactive.less'
import likeCard from '../../../../../assets/img/card-like.png'
import gradualArrow from '../../../../../assets/svg/icon-gradualArrow.svg'
import emojiPanel from '../../../../../assets/img/card-emojiPanel.png'
import interactivePage from '../../../../../assets/img/page-interactive.png'
import ballons from '../../../../../assets/img/emoji-ballons.png'
import cryLaugh from '../../../../../assets/img/emoji-cryLaguh.png'
import scattered from '../../../../../assets/img/emoji-scattered.png'


export const Interactive = () => {
	return (
		<>
			<div className="interactive-main-container">
				{/* 左侧信息 */}
				<div className="interactive-leftInfo-container">
					<div className="interactive-leftInfo-textGroup">
						<div className="interactive-leftInfo-title">Diverse of emotional expression</div>
						<p className="interactive-leftInfo-des">XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX</p>
					</div>
					<div className="interactive-leftInfo-imgGroup">
						<img src={likeCard} alt="" className="likeCard"/>
						<img src={gradualArrow} alt="" className="gradualArrow"/>
						<img src={emojiPanel} alt="" className="emojiPanel"/>
					</div>
				</div>
				{/* 右侧图片 */}
				<div className="interactive-rightInfo-container">
					{/* <img src="" alt="" /> */}
					<img src={ballons} alt="" className="ballons"/>
					<img src={cryLaugh} alt="" className="cryLaugh"/>
					<img src={scattered} alt="" className="scattered"/>
					<img src={interactivePage} alt="" className="interactivePage"/>
				</div>
			</div>
		</>
	)
}

export default Interactive