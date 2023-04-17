import React from 'react'
import './PageTheme.less'
import pageThemePic from '../../../../../assets/img/page-themeConfig.png'
import styleSetting from '../../../../../assets/img/page-styleSetting.png'
import panel from '../../../../../assets/img/page-panel.png'
import gradualArrow from '../../../../../assets/svg/icon-gradualArrow.svg'
import circleRipple from '../../../../../assets/svg/icon-circleRipple.svg'



export const PageTheme = () => {
	return (
		<>
			<div className="pagetheme-main-container">

				<img src={circleRipple} alt="" className="circleRipple"/>

				<div className="pagetheme-main-container-inside">
					{/* 左侧图片 */}
					<img src={pageThemePic} alt="" className="pageThemePic"/>
					
					{/* 右侧信息 */}
					<div className="pagetheme-rightInfo-container">
						
						<div className="pagetheme-rightInfo-top">
							<div className="pagetheme-rightInfo-container-title">Page theme config</div>
							<p className="pagetheme-rightInfo-container-des">
							We wanted to make the application of the page not only limited to the document, if the user can customize the structure of the page, then the document itself will become very large space for expansion. So our designers creatively came up with the idea of "web-based", where users can customize the structure of the page, so that the document can be transformed into a personal blog, personal profile, home navigation page, etc.
							</p>
						</div>

						<div className="pagetheme-rightInfo-bottom">
							<img src={styleSetting} alt="" className="pagetheme-framework"/>
							<img src={gradualArrow} alt="" className="gradualArrow"/>
							<img src={panel} alt="" className="pagetheme-page"/>
						</div>
					</div>
				</div>
			</div> 
		</>
	)
}


export default PageTheme