import React from 'react'
import upArrow from '../../../../../assets/svg/icon-upArrow.svg'
import tranglesTop from '../../../../../assets/svg/graphic-tranglesTop.svg'
import tranglesMedium from '../../../../../assets/svg/graphic-tranglesMedium.svg'
import tranglesBottom from '../../../../../assets/svg/graphic-tranglesBottom.svg'
import './BusinessGoals.less'

export const BusinessGoals = () => {
	return (
		<>
			<div className="business-goal-container">
				<div className="business-goal-text-container">
					<p>Business Goals</p>
					<p>As an experimental and innovative product, we have divided it into three phases, each with a word business goal, ultimately to become the Digital Hub for personal or teams.</p>
				</div>
				<div className="business-goal-graphic-container">
					<div className="goal-state">
						<p>Strategy</p>
						<img src={upArrow} alt="" />
						<p>Tactics</p>
						<img src={upArrow} alt="" />
						<p>Campaign</p>
					</div>
					<div className="goal-modelGraphic">
						<img src={tranglesTop} alt="" />
						<img src={tranglesMedium} alt="" />
						<img src={tranglesBottom} alt="" />
					</div>
				</div>
			</div>
		</>
	)
}

export default BusinessGoals
