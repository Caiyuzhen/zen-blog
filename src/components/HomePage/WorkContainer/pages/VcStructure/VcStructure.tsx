import React from 'react'
import './VcStructure.less'
import catalogCard from '../../../../../assets/img/page-catalogCard.jpg'
import timeLine from '../../../../../assets/img/page-timeline.jpg'
import videoDoc from '../../../../../assets/img/page-videoDoc.jpg'
import videoLine from '../../../../../assets/img/page-videoLine.jpg'
import AuroraGradientBG from '../../../../../assets/svg/bg-colorFulLinear.svg'
import gradualArrow from '../../../../../assets/svg/icon-gradualArrowBlue.svg'


export const VcStructure = () => {
	return (
		<>
			<div className="VcStructure-main-container">
				<div className="VcStructure-inside-container">
					<div className="VcStructure-top-document">
						<div className="VcStructure-top-circle">Based on presentation topics convert to structured document</div>
										{/* 右虚线 */}
										<div className="VcStructure-trianArrowRight-right">
							<span className="dotted-line-right"></span>
							<span className="trianArrow-right-01"></span>
						</div>
						
						<img src={catalogCard} alt="" className="video-catalogCard"/>
						<img src={gradualArrow} alt="" className="gradualArrow-right"/>
						<img src={videoDoc} alt="" className="video-doc"/>
					</div>


					<div className="VcStructure-bottom-timeline">
						<div className="VcStructure-bottom-circle">Video-based collateral info conversion to structured tables</div>
						{/* 右虚线 */}
						<div className="VcStructure-trianArrowRight-right">
							<span className="dotted-line-left"></span>
							<span className="trianArrow-left-02"></span>
						</div>
						
						<img src={timeLine} alt="" className="video-timeLine"/>
						<img src={gradualArrow} alt="" className="gradualArrow-right"/>
						<img src={videoLine} alt="" className="video-structure"/>
					</div>

					{/* 极光背景 */}
					<img src={AuroraGradientBG} alt="" className="video-AuroraGradientBG"/>
				</div>
			</div>
		</>
	)	
}
