import React from 'react'
import './UserFeedback.less'
import userFeedBack from '../../../../../assets/svg/userfeedback.svg'
import personal from '../../../../../assets/svg/icon-personal.svg'
import user from '../../../../../assets/svg/icon-user.svg'
import popLeftTop from '../../../../../assets/svg/pop-leftTop.svg'
import popLeftBottom from '../../../../../assets/svg/pop-leftBottom.svg'


export const UserFeedback = () => {
  return (
	<>
		<div className="main-fb-container">

			<div className="main-bg">
				<div className="circle-text-container">
					{/* 👇小气泡 */}
					<div className="popLeftTop">
						<p>Generate creative inspiration themes more quickly</p>
					</div>

					<div className="popTopLeft">
						<p>Easier creation of systematic content</p>
					</div>

					<div className="popTopRight">
						<p>Easier to sink team knowledge and form team assets</p>
					</div>

					<div className="popLeftBottom">
						<p>Take better notes to aid my thinking and memory</p>
					</div>

					<div className="popBottomLeft">
						<p>More powerful creation ability & more enjoyable of browsing experience</p>
					</div>
				
					<div className="popBottomRight">
						<p>Richer project visualization capabilities</p>
					</div>

					<div className="popRightBottom">
						<p>More flexible and scalable, able to connect to your own business streams to increase business benefits</p>
					</div>

					<div className="popRightTop">
						<p>More seamless goal management to level the information gap</p>
					</div>

					{/* 底部的 circle */}
					<div className="circle-container">
						<div className="big-circle big-circle-1">
							<div className="medium-circle-1">
								<div className="small-circle-1">
									<img src={personal} alt="" />
									<p>Personal users</p>
								</div>
							</div>
						</div>
						<div className="big-circle big-circle-2">
							<div className="medium-circle-2">
								<div className="small-circle-2">
									<img src={user} alt="" />
									<p>Team Users</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</>
  )
}

export default UserFeedback





