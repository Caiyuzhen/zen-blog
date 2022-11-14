import React from 'react'
import './AutoStep.less'
import whenPage from '../../../../../assets/img/page-autopmated-step-one.jpg'
import thenPage from '../../../../../assets/img/page-autopmated-step-two.jpg'

export const AutoStep = () => {
	return (
		<>
			<div className="autoStep-main-container">
				{/* 左边的图文 */}
				<div className="autoStep-leftPage-container">
					<div className="autoStep-leftPage-topText-container">
						<p>When</p>
						{/* <img src="" alt="" /> */}
						<p>Then</p>
					</div>
					<div className="autoStep-leftPage-bottomPic-container">
						<img src={whenPage} alt="" />
						<img src={thenPage} alt="" />
					</div>
				</div>
				{/* 右边的流程 */}
				<div className="autoStep-rightText-container">
					<div className="autoStep-rightText-info">
						<div className="autoStep-rightText-info-title">XXXXXX</div>
						<p className="autoStep-rightText-info-des">We provide users with an automated way to interact with bulk slack account associations and bulk Jira Issue imports, greatly simplifying the interaction steps.</p>
					</div>
					<div className="sutpStep-rightImg-StepGroup">
						<div className="sutpStep-rightImg-StepGroup-stepOne"></div>
						<div className="sutpStep-rightImg-StepGroup-stepTwo"></div>
						<div className="sutpStep-rightImg-StepGroup-stepThree"></div>
					</div>
				</div>
			</div>
		</>
	)
}


export default AutoStep