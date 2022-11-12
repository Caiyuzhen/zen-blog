import React from 'react'
import './UxStategy.less'
import gradualArrow from '../../../../../assets/svg/icon-gradualArrow.svg'


export const UxStategy = () => {
	return (
		<>
			<div className="ux-stategy-main-container">
				<div className="ux-stategy-text-container">
					<div className="ux-stategy-title">UX Design Goal & Strategy</div>
					<div className="ux-stategy-des">We developed a design strategy for each path based on the user's creation path to better achieve the project goals.</div>
				</div>
				<div className="ux-stategy-state-flow">
					<div className="ux-stategy-textContainer">
						<p>Stage</p>
						<p>Goals</p>
						<p>Stategy</p>
					</div>

					<div className="ux-stategy-flowGraphic-container">
						{/* 设计策略流程 */}
						<div className="ux-stategy-flow">
							<div className="stategy-flow-container">
								<div className="ux-stategy-circle">
									<p>Think & Plan</p>
								</div>
								<div className="ux-stategy-content">
									<p>text placeholder</p>
									<p>text placeholder</p>
									<p>text placeholder</p>
								</div>
							</div>
							<div className="ux-stategy-text">UX stategy description</div>
						</div>

						{/* 箭头 */}
						<img src={gradualArrow} alt="" />

						<div className="ux-stategy-flow">
							<div className="stategy-flow-container">
								<div className="ux-stategy-circle">
									<p>Interaction & <br/> Collaboration</p>	
								</div>
								<div className="ux-stategy-content">
									<p>text placeholder</p>
									<p>text placeholder</p>
									<p>text placeholder</p>
								</div>
							</div>
							<div className="ux-stategy-text">UX stategy description</div>
						</div>

						{/* 箭头 */}
						<img src={gradualArrow} alt="" />

						<div className="ux-stategy-flow">
							<div className="stategy-flow-container">
								<div className="ux-stategy-circle">
									<p>Archive & <br/> Accumulate</p>
								</div>
								<div className="ux-stategy-content">
									<p>text placeholder</p>
									<p>text placeholder</p>
									<p>text placeholder</p>
								</div>
							</div>
							<div className="ux-stategy-text">UX stategy description</div>
						</div>
						
						{/* 箭头 */}
						<img src={gradualArrow} alt="" />

						<div className="ux-stategy-flow">
							<div className="stategy-flow-container">
								<div className="ux-stategy-circle">
									<p>Share & Browse</p>
								</div>
								<div className="ux-stategy-content">
									<p>text placeholder</p>
									<p>text placeholder</p>
									<p>text placeholder</p>
								</div>
							</div>
							<div className="ux-stategy-text">UX stategy description</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


export default UxStategy