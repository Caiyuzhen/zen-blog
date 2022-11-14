import React from 'react'
import './AutoStep.less'
import whenPage from '../../../../../assets/img/page-autopmated-step-one.jpg'
import thenPage from '../../../../../assets/img/page-autopmated-step-two.jpg'
import autoStepOne from '../../../../../assets/img/automated-Step-1.png'
import autoStepTwo from '../../../../../assets/img/automated-Step-2.png'
import autoStepThree from '../../../../../assets/img/automated-Step-3.png'



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
						<img src={autoStepOne} alt="" className="autoStepOne"/>
						<img src={autoStepTwo} alt="" className="autoStepTwo"/>
						<img src={autoStepThree} alt="" className="autoStepThree"/>
					</div>
				</div>
			</div>
		</>
	)
}


export default AutoStep