import React from 'react'
import './VcConcept.less'
import catalogCard from '../../../../../assets/img/page-catalogCard.jpg'
import timeLine from '../../../../../assets/img/page-timeline.jpg'
import videoBg from '../../../../../assets/img/bg-videoBg.jpg'


export const VcConcept = () => {
	return (
		<>
			<div className="VcConcept-main-container">
				{/* 顶部信息 */}
				<div className="VcConcept-main-insideContainer">

					<div className="VcConcept-leftContainer">
						<div className="VcConcept-main-title">
							XXXXXXX XXXXX XXXXXXX XXXXXX XXXXXXXXX
						</div>
						<img src={catalogCard} alt="" className="catalogCard"/>
					</div>

					<div className="VcConcept-rightContainer">
						<div className="VcConcept-main-des">
							xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx 
						</div> 
						<img src={timeLine} alt="" className="timeLine"/>
						{/* 背景 */}
						<img src={videoBg} alt="" className="videoBg"/>
					</div>
				</div>
	
			</div>
		</>
	)
}

export default VcConcept