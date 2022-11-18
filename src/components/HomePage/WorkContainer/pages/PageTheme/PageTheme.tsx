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
							<div className="pagetheme-rightInfo-container-title">XXX config</div>
							<p className="pagetheme-rightInfo-container-des">
								XXX description of the config XXX description of the config XXX description of the config XXX description of the config XXX description of the config XXX description of the config XXX description of the config XXX description of the config XXX description of the config 
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