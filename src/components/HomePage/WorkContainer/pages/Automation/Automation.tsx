import React from 'react'
import './Automation.less'
import automationBg from '../../../../../assets/svg/bg-automation.svg'
import automationGtaphic from '../../../../../assets/img/graphic-automation.png'
import asanaIcon from '../../../../../assets/img/icon-asana.jpg'
import jiraIcon from '../../../../../assets/img/icon-jira.jpg'
import discordIcon from '../../../../../assets/img/icon-discord.jpg'
import gmailIcon from '../../../../../assets/img/icon-gmail.jpg'
import mondayIcon from '../../../../../assets/img/icon-monday.jpg'
import slackIcon from '../../../../../assets/img/icon-slack.jpg'



export const Automation = () => {
	return (
		<>
			<div className="automation-main-container">
				<div className="automation-inside-content">
					<div className="automation-topContainer">
						<div className="automation-title">XXXXXXX</div>
						<p className="automation-des">description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock</p>
					</div>
					
					<div className="automation-bottomContainer">

						<img src={jiraIcon} alt="" className="jiraIcon"/>
						<img src={mondayIcon} alt="" className="mondayIcon"/>
						<img src={asanaIcon} alt="" className="asanaIcon"/>


						<img src={discordIcon} alt="" className="discordIcon"/>
						<img src={slackIcon} alt="" className="slackIcon"/>
						<img src={gmailIcon} alt="" className="gmailIcon"/>

						<img src={automationGtaphic} alt="" className="automationGtaphic"/>
						<img src={automationBg} alt="" className="automationBg"/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Automation