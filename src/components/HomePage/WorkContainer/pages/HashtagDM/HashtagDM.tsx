import React from 'react'
import './HashtagDM.less'
import HashtagPage from '../../../../../assets/img/page-HashtagPage.jpg'
import desLine from '../../../../../assets/svg/icon-desLine.svg'

export const HashtagDM = () => {
	return (
		<>
			<div className="hashtagDM-mainContainer">
				{/* 左侧信息 */}
				<div className="hashtagDM-mainContainer-left">
					<div className="hashtagDM-mainContainer-leftInfo">
						{/* 左上基础信息 */}
						<div className="hashtagDM-mainContainer-leftInfo-top">
							<div className="hashtagDM-mainContainer-leftInfo-topTitle">XXX - Simple XXX way</div>
							<p className="hashtagDM-mainContainer-leftInfo-topDes">
								We provide users with an automated way to interact with bulk slack account associations and bulk Jira Issue imports, greatly simplifying the interaction steps.We provide users with an automated way to interact with bulk slack account associations and bulk Jira Issue imports, greatly simplifying 
							</p>
						</div>
						
						{/* 左下图形化信息 */}
						<div className="hashtagDM-mainContainer-leftInfo-bottom">
							{/* 图形化圆角矩形文字 */}
							<div className="hashtagDM-mainContainer-bottomMain">
								<div className="hashtagDM-mainContainer-bottomMain-Creation">
									✏️ Creation scenes
									<span className="hashtagDM-mainContainer-bottomMain-circle">XXX XXXX</span>
									<span className="hashtagDM-mainContainer-bottomMain-circle">XXX XXXX</span>
									
								</div> 
								<div className="hashtagDM-mainContainer-bottomMain-Management">
									📁 Management scenes
									<span className="hashtagDM-mainContainer-bottomMain-circle">XXX XXXX</span>
									<span className="hashtagDM-mainContainer-bottomMain-circle">XXX XXXX</span>
								</div> 
							</div>
							{/* 图形化信息-线+文案 */}
							<div className="hashtagDM-mainContainer-bottomLineAndDes">
								<img src={desLine} alt="" className="hashtagDM-mainContainer-bottomLine"/>
								<div className="hashtagDM-mainContainer-bottomDes">Diversified content organization capabilities</div>
							</div>
						</div>
					</div>
				</div>

				{/* 右侧图片 */}
				<div className="hashtagDM-mainContainer-right">
					<img src={HashtagPage} alt="" className="HashtagPage"/>
				</div>
			</div>
		</>
	)
}

export default HashtagDM
