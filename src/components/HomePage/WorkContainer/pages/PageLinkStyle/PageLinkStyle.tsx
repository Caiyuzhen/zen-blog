import React from 'react'
import './PageLinkStyle.less'
import pageThemeBefore from '../../../../../assets/img/page-themeBefore.png'
import pageThemeAfter from '../../../../../assets/img/page-themeAfter.png'


export const PageLinkStyle = () => {
	return (
		<>
			<div className="pageLinkStyle-main-container">
				<div className="pageLinkStyle-leftPagesInfo-container">
					{/* 左页 */}
					<div className="pageLinkStyle-leftDetailPages-group">
						<p>Before</p>
						<img src={pageThemeBefore} alt="" className="pageThemeBefore"/>
					</div> 
					{/* 右页 */}
					<div className="pageLinkStyle-rightDetailPages-group">
						<p>After</p>
						<img src={pageThemeAfter} alt="" className="pageThemeAfter"/>
					</div> 
				</div>
				<div className="pageLinkStyle-rightInfo">
					<div className="pageLinkStyle-rightInfo-title">PageCard with Full type</div>
					<p className="pageLinkStyle-rightInfo-des">
					The traditional inline Page is a link url, but many web pages are presented in the form of cards, so we provide the document card state style settings, the user can freely drag and drop to change the card aspect ratio, and even set some simple animation effects, so that the entire document like a "live" web page.
					</p> 
				</div>
			</div>
		</>
)
}

export default PageLinkStyle