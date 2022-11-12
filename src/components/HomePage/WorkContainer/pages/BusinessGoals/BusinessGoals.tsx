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
					<p className="goal-title">Business Goals</p>
					<p className="goal-description">As an experimental and innovative product, we have divided it into three phases, each with a word business goal, ultimately to become the Digital Hub for personal or teams.</p>
				</div>

				<div className="business-goal-graphic-container">
					<div className="goal-modelGraphic">
						<div className="model-graphic-top">

							<div className="graphic-top-textContainer">
								<p>Strategy</p>
								<img src={upArrow} alt="" />
							</div>
							<span className="dotted-line"></span>
							<div className="tranglesTop-container">
								<p>Text placeholder <br/>Text placeholder <br/>Text placeholder</p>
								<img src={tranglesTop} alt="" className="tranglesTop-des"/>
							</div>
						</div>

						<div className="model-graphic-medium">
							<p>Tactics</p>
							<span className="dotted-line"></span>
							<div className="tranglesMedium-container">
								<p>Text placeholder <br/>Text placeholder <br/>Text placeholder</p>
								<p>Text placeholder <br/>Text placeholder <br/>Text placeholder</p>
								<p>Text placeholder <br/>Text placeholder <br/>Text placeholder</p>
								<img src={tranglesMedium} alt="" className="tranglesMedium-des"/>
							</div>
						</div>

						<div className="model-graphic-bottom">
							<div className="graphic-bottom-textContainer">
							<img src={upArrow} alt="" />
								<p>Campaign</p>
							</div>
							<span className="dotted-line"></span>
							<div className="tranglesBottom-container">
								<p>Text placeholder <br/>Text placeholder <br/>Text placeholder</p>
								<p>Text placeholder <br/>Text placeholder <br/>Text placeholder</p>
								<p>Text placeholder <br/>Text placeholder <br/>Text placeholder</p>
								<span className="dotted-line"></span>
								<p>Text placeholder <br/>Text placeholder <br/>Text placeholder</p>
								<p>Text placeholder <br/>Text placeholder <br/>Text placeholder</p>
								<p>Text placeholder <br/>Text placeholder <br/>Text placeholder</p>
								<img src={tranglesBottom} alt="" className="tranglesBottom-des"/>
							</div>
						</div>

					</div>
				</div>
			</div>
		</>
	)
}

export default BusinessGoals
