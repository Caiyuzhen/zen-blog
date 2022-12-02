import React from 'react'
import mobileFramework from '../../../../../assets/img/page-mobileCoverFramework.png'
import mobileCoverDefault from '../../../../../assets/img/page-mobileCoverDefault.png'
import mobileCoverDark from '../../../../../assets/img/page-mobileCoverDark.png'
import mobileCoverLight from '../../../../../assets/img/page-mobileCoverLight.png'
import './MobileCover.less'

export const MobileCover = () => {
	return (
		<>
			<div className="mobile-main-container">
				{/* 顶部信息 */}
				<div className="mobile-main-topInfo">
					<div className="mobile-main-top-title">
						XXX-end Axxxxxxxx
					</div>
					<p className="mobile-main-top-des">
						xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxx
					</p>
				</div>
				{/* 底部图片 */}
				<div className="mobile-main-bottomPic">
					<img src={mobileFramework} alt="" className="mobileFramework"/>
					<img src={mobileCoverDefault} alt="" className="mobileCoverDefault"/>
					<img src={mobileCoverDark} alt="" className="mobileCoverDark"/>
					<img src={mobileCoverLight} alt="" className="mobileCoverLight"/>
				</div>
			</div>
		</>
	)
}

export default MobileCover