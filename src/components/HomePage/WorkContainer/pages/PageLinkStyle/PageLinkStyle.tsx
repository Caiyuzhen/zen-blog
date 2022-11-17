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
					<div className="pageLinkStyle-rightInfo-title">XXX Titles</div>
					<p className="pageLinkStyle-rightInfo-des">XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX</p> 
				</div>
			</div>
		</>
)
}

export default PageLinkStyle