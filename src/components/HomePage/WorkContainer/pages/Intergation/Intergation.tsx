import React from 'react'
import './Intergation.less'
import arrDown from '../../../../../assets/svg/icon-arrDown.svg'
import arrUp from '../../../../../assets/svg/icon-arrUp.svg'
import gradualArrow from '../../../../../assets/svg/icon-gradualArrow.svg'
import slackPage from '../../../../../assets/img/page-intergation-slack.jpg'
import jiraPage from '../../../../../assets/img/page-intergation-jira.jpg'
import jiraIcon from '../../../../../assets/img/icon-squareJira.png'

export const Intergation = () => {
	return (	
			<>
				<div className='intergation-container'>
					{/* 左侧的描述跟数据 */}
					<div className="intergation-info-container">
						<div className="intergation-info-text">
							<div className="intergation-title">Improve the efficiency of the admin</div>
							<div className="intergation-sub">We provide users with an automated way to interact with bulk slack account associations and bulk Jira Issue imports, greatly simplifying the interaction step.</div>
						</div>
						<div className="intergation-number-mainContainer">
							{/* 数据 */}
							<div className="intergation-number-TopContainer">
								<div className="numberTopLeft">
									<div className="intergation-number">10 min</div>
									<img src={arrDown} alt="" />
								</div>
								<img src={gradualArrow} alt="" className="numberTopCenter"/>
								<div className="numberTopRight">
									<div className="intergation-number">2.5 s</div>
									<img src={arrUp} alt="" />
								</div>
							</div>
							{/* 数据 */}
							<div className="intergation-number-BottomContainer">
								<div className="numberTopLeft">
									<div className="intergation-number">15 min</div>
									<img src={arrDown} alt="" />
								</div>
								<img src={gradualArrow} alt="" className="numberBottomCenter"/>
								<div className="numberBottomRight">
									<div className="intergation-number">6 s</div>
									<img src={arrUp} alt="" />
								</div>
							</div>
						</div>
					</div>
					{/* 右侧的 page */}
					<div className="intergation-info-pageContainer">
						<div className="intergation-info-pageSlack">
							<img src={slackPage} alt="" />
						</div>
						<div className="intergation-info-pageJira">
							<img src={jiraIcon} alt="" className="jiraIcon"/>
							<img src={jiraPage} alt="" />
						</div>
					</div>
				</div>
			</>
		)
}

export default Intergation
