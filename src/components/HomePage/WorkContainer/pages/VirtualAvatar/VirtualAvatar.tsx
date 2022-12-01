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

					{/* 头像 */}
					<img src={avatarPic} alt="" className="avatarPic"/>

					{/* 左描述 */}
					<div className="virtualAvatar-left-des-container">
						<div className="virtualAvatar-left-des">
							<p>xxxxxxx xxx, xxxxx ,xx xxxx xxxx,xxxxxx xxxxx ,xxx x xxx,xxxxxxxxx xxxxxx</p>
							{/* 向右虚线 */}
							<div className="trianArrowRight-right">
								<span className="dotted-line-right"></span>
								<span className="trianArrow-right-01"></span>
							</div>
						</div>
					</div>

					{/* 虚拟角色  + 光圈*/}
					<div className="avatarMan-container">
						{/* 渐变光圈 */}
						<img src={halo} alt="" className="halo"/>
						{/* 虚拟角色 */}
						<img src={avatarMan} alt="" className="avatarMan"/>
					</div>

					{/* 右描述 */}
					<div className="virtualAvatar-right-des-container">
						<div className="virtualAvatar-right-des">
						<p>xxxxxxx xxx, xxxxx ,xx xxxx xxxx,xxxxxx xxxxx ,xxx x xxx,xxxxxxxxx xxxxxx</p>
							{/* 向左虚线 */}
							<div className="trianArrowRight-left">
								<span className="dotted-line-left"></span>
								<span className="trianArrow-left-01"></span>
							</div>
						</div>
					</div>
				</div>

				{/* 右侧面板 */}
				<img src={avatarSetting} alt="" className="avatarSetting"/>
			</div>
		</>
	)
}

export default VirtualAvatar


