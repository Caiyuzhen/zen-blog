import React from 'react'
import './PublishUI.less'
import publishUI from '../../../../../../assets/img/migu-PublishUI.png'

export const PublishUI = () => {
	return (
		<div className="publishUI-main-container">
			<div className="publishUI-wrapper">
				<div className="publishUI-textWithLine-container">
					<div className="publishUI-line">
						<svg width="272" height="28" viewBox="0 0 272 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.2" filter="url(#filter0_d_439_50866)">
						<circle cx="10.8257" cy="10.8257" r="10.8257" transform="matrix(-1 0 0 1 268.626 4.55859)" fill="#A4DEFF"/>
						</g>
						<g filter="url(#filter1_d_439_50866)">
						<path d="M257.951 15.065L0.606634 15.065" stroke="#73C6F6" strokeWidth="1.20285" strokeDasharray="3.61"/>
						</g>
						<defs>
						<filter id="filter0_d_439_50866" x="244.569" y="0.950029" width="26.4628" height="26.4628" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="-1.20285"/>
						<feGaussianBlur stdDeviation="1.20285"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.33327 0 0 0 0 0.349698 0 0 0 0 1 0 0 0 0.5 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_439_50866"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_439_50866" result="shape"/>
						</filter>
						<filter id="filter1_d_439_50866" x="0.0130525" y="12.0582" width="260.344" height="6.01357" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset/>
						<feGaussianBlur stdDeviation="1.20285"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.666667 0 0 0 0 0.831373 0 0 0 0 0.92549 0 0 0 1 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_439_50866"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_439_50866" result="shape"/>
						</filter>
						</defs>
						</svg>
					</div>
					<div className="publishUI-text">
						<p>Publish & Share</p>
						<p>Record users' recent postings by default, and quickly direct them to friends or social channels for sharing after publish.</p>
					</div>
				</div>
				{/* 发布状态 UI */}
				<img src={publishUI} alt="" />
			</div>
		</div>
	)
}
