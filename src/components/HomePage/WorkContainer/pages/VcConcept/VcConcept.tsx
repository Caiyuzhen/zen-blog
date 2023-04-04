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
						Structured Video Conference Innovative Concept
						</div>
						<img src={catalogCard} alt="" className="catalogCard"/>
					</div>

					<div className="VcConcept-rightContainer">
						<div className="VcConcept-main-des">
						Based on the combined concept of timeline + slides, video conferencing can be disassembled into a combined media stream of countless screens, so we proposed the concept of video structuring. After a meeting, the user can create a document like a document, and the video is automatically deconstructed into multiple small particles to facilitate the flow of information after the meeting.
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