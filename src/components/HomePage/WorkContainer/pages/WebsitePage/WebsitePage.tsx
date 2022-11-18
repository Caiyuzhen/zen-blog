import React from 'react'
import './WebsitePage.less'


export const WebsitePage = () => {
	return (
		<>
			<div className="webSitePage-main-container">
				<div className="webSitePage-leftPage"></div>
				<div className="webSitePage-rightInfo-Container">
					{/* 右侧顶部信息 */}
					<div className="webSitePage-rightInfo-top">
						<div className="webSitePage-rightInfo-title"></div>
						<div className="webSitePage-rightInfo-des"></div>
					</div>
					{/* 右侧底部数据 */}
					<div className="webSitePage-rightInfo-bottom">
						<div className="webSitePage-rightInfo-register">
							XXX + 
							<img src="" alt="" />
						</div>
						<div className="webSitePage-rightInfo-activeUser">
							XXX +
							<img src="" alt="" />
						</div>
					</div> 
				</div>
			</div>
		</>
	)
}

export default WebsitePage
