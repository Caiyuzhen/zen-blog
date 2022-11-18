import React from 'react'
import './PageTheme.less'

export const PageTheme = () => {
	return (
		<>
			<div className="pagetheme-main-container">
				{/* 左侧图片 */}
				<div className="pagetheme-leftPage">
					<img src="" alt="" />
				</div>
				<div className="pagetheme-rightInfo-container">
					{/* 右侧顶部描述信息 */}
					<div className="pagetheme-rightInfo-top">
						<div className="pagetheme-rightInfo-container-title">XXX config</div>
						<div className="pagetheme-rightInfo-container-des">XXX description of the config XXX description of the config XXX description of the config</div>
					</div>
					{/* 右侧底部图片 */}
					<div className="pagetheme-rightInfo-bottom">
						<img src="" alt="" className="pagetheme-framework"/>
						<img src="" alt="" className="pagetheme-page"/>
					</div>
				</div>
			</div>
		</>
	)
}


export default PageTheme