import React from 'react'
import './WebsitePage.less'
import mainWebSite from '../../../../../assets/img/page-mainWebSite.png'
import arrUp from '../../../../../assets/svg/icon-arrUp.svg'


export const WebsitePage = () => {
	return (
		<>
			<div className="webSitePage-main-container">
				{/* 左侧页面 */}
				<img src={mainWebSite} alt="" className="webSitePage-leftPage"/>
				{/* 右侧信息 */}
				<div className="webSitePage-rightInfo-Container">
					{/* 右侧顶部信息 */}
					<div className="webSitePage-rightInfo-top">
						<div className="webSitePage-rightInfo-title">XXX Title XXX</div>
						<p className="webSitePage-rightInfo-des">XXX description of the config XXX description of the config XXX description of the config XXX description of the config XXX description of the config XXX description of the config XXX description of the config XXX description of the config XXX description of the config</p>
					</div>
					{/* 右侧底部数据 */}
					<div className="webSitePage-rightInfo-bottom">
						<div className="webSitePage-register-container">
							<div className="register-text">
								<p className="register-numTitle">0000 +</p>  
								<p className="register-des">Registered User</p> 
							</div>
							<img src={arrUp} alt="" className="arrUp"/>
						</div>
						<div className="webSitePage-upVoteUser-container">
							<div className="upVoteUser-text">
								<p className="upVote-numTitle">0000 +</p> 
								<p className="upVote-des">Upvote User</p> 
							</div>
							<img src={arrUp} alt="" className="arrUp"/> 
						</div>
					</div> 
				</div>
			</div>
		</>
	)
}

export default WebsitePage
