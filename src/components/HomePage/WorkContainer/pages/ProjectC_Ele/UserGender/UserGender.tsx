import React from 'react'
import './UserGender.less'
import female from '../../../../../../assets/svg/icon-female.svg'
import male from '../../../../../../assets/svg/icon-male.svg'

export const UserGender = () => {
	return (	
		<div className="migu-userGender-container">
			<div className="migu-userGender-container-bg">

				<div className="userGender-container-top">
					<div className="male-icon-container">
						<img src={male} alt="" className="female"/>
						<p>Male Users</p>
					</div>
					<div className="progressBar-male">
						<svg width="608" height="120" viewBox="0 0 608 120" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect opacity="0.4" width="575.614" height="30" rx="15" transform="matrix(1 0 0 -1 32.0465 75.2017)" fill="#B9D5FE" fillOpacity="0.6"/>
						<g filter="url(#filter0_d_439_50803)">
						<rect width="237.139" height="30" rx="15" transform="matrix(1 0 0 -1 32.0465 75.2017)" fill="#B9D5FE"/>
						</g>
						<defs>
						<filter id="filter0_d_439_50803" x="0.7489" y="0.490791" width="326.56" height="119.422" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dx="13.4133"/>
						<feGaussianBlur stdDeviation="22.3554"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.153186 0 0 0 0 0.0799915 0 0 0 0 0.279212 0 0 0 0.15 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_439_50803"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_439_50803" result="shape"/>
						</filter>
						</defs>
						</svg>

						<span>37.2%</span>
					</div>
					<p className="data"></p>
				</div>

				<div className="userGender-container-bottom">
					<div className="female-icon-container">
						<img src={female} alt="" className="female"/>
						<p>Female Users</p>
					</div>
					<div className="progressBar-female">
						<svg width="607" height="120" viewBox="0 0 607 120" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="575.611" height="30" rx="15" transform="matrix(1 0 0 -1 31.0499 74.9829)" fill="#97719D" fillOpacity="0.5"/>
						<g filter="url(#filter0_d_439_50802)">
						<rect width="380.561" height="30" rx="15" transform="matrix(1 0 0 -1 31.0498 74.9829)" fill="#C165D0"/>
						</g>
						<defs>
						<filter id="filter0_d_439_50802" x="0.202477" y="0.915298" width="468.696" height="118.135" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dx="13.2203"/>
						<feGaussianBlur stdDeviation="22.0338"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.153186 0 0 0 0 0.0799915 0 0 0 0 0.279212 0 0 0 0.15 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_439_50802"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_439_50802" result="shape"/>
						</filter>
						</defs>
						</svg>

						<span>62.8%</span>
					</div>
				</div>
			</div>
		</div>
	)
}
