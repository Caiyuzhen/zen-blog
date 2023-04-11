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
						<div className="webSitePage-rightInfo-title">Make Website by Innos!</div>
						<p className="webSitePage-rightInfo-des">
						At the stage of product promotion and release, our team started to try to eat our own dog food, using our own documentation to build the official website, and on the day of Landing, we got 200+ Upvotes on PH by our team's own promotion and operation alone! It was ranked in the top 10 product recommendations that week, and by the time the project stopped running, it had a total of 40,000+ registered users.
						</p>
					</div>
					{/* 右侧底部数据 */}
					<div className="webSitePage-rightInfo-bottom">
						<div className="webSitePage-register-container">
							<div className="register-text">
								<p className="register-numTitle"> 40000 + </p>  
								<p className="register-des">Registered User</p> 
							</div>
							<img src={arrUp} alt="" className="arrUp"/>
						</div>
						<div className="webSitePage-upVoteUser-container">
							<div className="upVoteUser-text">
								<p className="upVote-numTitle"> 200 +</p> 
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
