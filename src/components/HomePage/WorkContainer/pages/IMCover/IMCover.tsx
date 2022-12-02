import React from 'react'
import './IMCover.less'
import coverFramework from '../../../../../assets/img/page-coverFramework.png'
import coverFrameworkLeft from '../../../../../assets/img/page-coverFrameworkLeft.jpg'

export const IMCover = () => {
	return (
		<>
			<div className="IMCover-main-container">
				<p className="IMCover-main-content">
					xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxx
				</p>
				<img src={coverFramework} alt="" className="coverFramework"/>
				<img src={coverFrameworkLeft} alt="" className="coverFrameworkLeft"/>
			</div>
		</>
	)
}

export default IMCover
