import React from 'react'
import './VirtualAvatar.less'
import avatarMan from '../../../../../assets/img/avatar_man.png'
import avatarSetting from '../../../../../assets/img/card-avatarSetting.png'
import avatarPic from '../../../../../assets/img/avatar-manPicture.png'
import halo from '../../../../../assets/svg/bg-halo.svg'

export const VirtualAvatar = () => {
	return (
		<>
			<div className="virtualAvatar-main-container">

				{/* 左侧信息 */}
				<div className="virtualAvatar-left-infoContainer">
					<span className="virtualAvatar-maintitle"> Virtual Avatar </span>
					<p>Virtual AvatarVirtual AvatarVirtual AvatarVirtual Avatar AvatarVirtual Avatar AvatarVirtual Avatar</p>

					{/* 头像 */}
					<img src={avatarPic} alt="" className="avatarPic"/>

					{/* 左描述 */}
					<div className="virtualAvatar-left-des-container">
						<div className="virtualAvatar-left-des">
							{/* 向右虚线 */}
							<div className="trianArrowRight-right">
								<span className="dotted-line-right"></span>
								<span className="trianArrow-right-01"></span>
							</div>
							<p>Staff can do it during the onboard stage phase Generate unique avatars from photos</p>
						</div>
					</div>

					{/* 虚拟角色  + 光圈*/}
					<div className="avatarMan-container">
						{/* 渐变光圈 */}
						<div className="halo-circle-1">
							<svg width="419" height="105" viewBox="0 0 419 105" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M418 52.7329C418 59.3004 412.586 65.8495 402.032 72.0128C391.549 78.1351 376.313 83.6827 357.399 88.3549C319.586 97.6953 267.295 103.483 209.5 103.483C151.705 103.483 99.4139 97.6953 61.6009 88.3549C42.6867 83.6827 27.4509 78.1351 16.9679 72.0128C6.41439 65.8495 1 59.3004 1 52.7329C1 46.1655 6.41439 39.6164 16.9679 33.453C27.4509 27.3307 42.6867 21.7831 61.6009 17.111C99.4139 7.77052 151.705 1.98291 209.5 1.98291C267.295 1.98291 319.586 7.77052 357.399 17.111C376.313 21.7831 391.549 27.3307 402.032 33.453C412.586 39.6164 418 46.1655 418 52.7329Z" stroke="url(#paint0_linear_516_52032)" stroke-width="2"/>
							<defs>
							<linearGradient id="paint0_linear_516_52032" x1="209.5" y1="104.483" x2="209.5" y2="0.982911" gradientUnits="userSpaceOnUse">
							<stop stop-color="#2B2F36"/>
							<stop offset="0.265625" stop-color="#71757C" stop-opacity="0.3"/>
							<stop offset="0.510417" stop-color="#B7BCC3" stop-opacity="0.2"/>
							<stop offset="0.75" stop-color="#B7BCC3" stop-opacity="0"/>
							<stop offset="1" stop-color="#B7BCC3" stop-opacity="0"/>
							</linearGradient>
							</defs>
							</svg>
						</div>

						<img src={halo} alt="" className="halo"/>

						<div className="halo-circle-2">
							<svg width="279" height="70" viewBox="0 0 279 70" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M278 35.2324C278 39.4568 274.538 43.7694 267.53 47.897C260.589 51.9846 250.48 55.7003 237.9 58.834C212.755 65.0977 177.965 68.9824 139.5 68.9824C101.035 68.9824 66.2451 65.0977 41.1003 58.834C28.5202 55.7003 18.4106 51.9846 11.4701 47.897C4.46159 43.7694 1 39.4568 1 35.2324C1 31.008 4.46159 26.6955 11.4701 22.5678C18.4106 18.4802 28.5202 14.7646 41.1003 11.6308C66.2451 5.36715 101.035 1.48242 139.5 1.48242C177.965 1.48242 212.755 5.36715 237.9 11.6308C250.48 14.7646 260.589 18.4802 267.53 22.5678C274.538 26.6955 278 31.008 278 35.2324Z" stroke="url(#paint0_linear_516_52033)" stroke-width="2"/>
							<defs>
							<linearGradient id="paint0_linear_516_52033" x1="139.5" y1="69.9824" x2="139.5" y2="0.482422" gradientUnits="userSpaceOnUse">
							<stop stop-color="#2B2F36"/>
							<stop offset="0.265625" stop-color="#71757C" stop-opacity="0.3"/>
							<stop offset="0.532867" stop-color="#B7BCC3" stop-opacity="0"/>
							<stop offset="1" stop-color="#B7BCC3" stop-opacity="0"/>
							</linearGradient>
							</defs>
							</svg>
						</div>

						{/* 虚拟角色 */}
						<img src={avatarMan} alt="" className="avatarMan"/>
					</div>

					{/* 右描述 */}
					<div className="virtualAvatar-right-des-container">
						<div className="virtualAvatar-right-des">
							{/* 向右虚线 */}
							<div className="trianArrowRight-left">
								<span className="dotted-line-left"></span>
								<span className="trianArrow-left-01"></span>
							</div>
							<p>Avatar will be used in video conferencing and IM communication</p>
						</div>
					</div>

					<img src={avatarSetting} alt="" className="avatarSetting"/>
				</div>

				{/* 右侧面板 */}
				{/* <img src={avatarSetting} alt="" className="avatarSetting"/> */}
			</div>
		</>
	)
}

export default VirtualAvatar


