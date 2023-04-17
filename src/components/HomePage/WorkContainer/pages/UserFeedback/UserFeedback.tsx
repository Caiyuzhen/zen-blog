/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
// 通过注释来动态的引入 babel 的翻译器，用 emotion 的翻译器！
import React, { useRef, useState } from 'react'
import './UserFeedback.less'
import personal from '../../../../../assets/svg/icon-personal.svg'
import user from '../../../../../assets/svg/icon-user.svg'
import popLeftTop from '../../../../../assets/svg/pop-leftTop.svg'
import popLeftBottom from '../../../../../assets/svg/pop-leftBottom.svg'
import { useEleOnScreen } from '../../../../../utils/useEleOnScreen'


export const UserFeedback = () => {

	const pop_LeftTop_Ref = useRef<HTMLDivElement>(null)
	const [pop_LeftTop_isVisible, setPop_LeftTop_isVisible] = useState<boolean>(false)
	const [ LeftTop_isVisible ] = useEleOnScreen(pop_LeftTop_Ref, pop_LeftTop_isVisible, setPop_LeftTop_isVisible)//传入对象跟 hook 返回是否可见的值
	
	const pop_TopLeft_Ref = useRef<HTMLDivElement>(null)
	const [pop_TopLeft_isVisible, setPop_TopLeft_isVisible] = useState<boolean>(false)
	const [ TopLeft_isVisible ] = useEleOnScreen(pop_TopLeft_Ref, pop_TopLeft_isVisible, setPop_TopLeft_isVisible)//传入对象跟 hook 返回是否可见的值

	const pop_TopRight_Ref = useRef<HTMLDivElement>(null)
	const [pop_TopRight_isVisible, setPop_TopRight_isVisible] = useState<boolean>(false)
	const [ TopRight_isVisible ] = useEleOnScreen(pop_TopRight_Ref, pop_TopRight_isVisible, setPop_TopRight_isVisible)//传入对象跟 hook 返回是否可见的值	

	const pop_LeftBottom_Ref = useRef<HTMLDivElement>(null)
	const [pop_LeftBottom_isVisible, setPop_LeftBottom_isVisible] = useState<boolean>(false)
	const [ LeftBottom_isVisible ] = useEleOnScreen(pop_LeftBottom_Ref, pop_LeftBottom_isVisible, setPop_LeftBottom_isVisible)//传入对象跟 hook 返回是否可见的值	

	const pop_BottomLeft_Ref = useRef<HTMLDivElement>(null)
	const [pop_BottomLeft_isVisible, setPop_BottomLeft_isVisible] = useState<boolean>(false)
	const [ BottomLeft_isVisible ] = useEleOnScreen(pop_BottomLeft_Ref, pop_BottomLeft_isVisible, setPop_BottomLeft_isVisible)//传入对象跟 hook 返回是否可见的值	

	const pop_BottomRight_Ref = useRef<HTMLDivElement>(null)
	const [pop_BottomRight_isVisible, setPop_BottomRight_isVisible] = useState<boolean>(false)
	const [ BottomRight_isVisible ] = useEleOnScreen(pop_BottomRight_Ref, pop_BottomRight_isVisible, setPop_BottomRight_isVisible)//传入对象跟 hook 返回是否可见的值	


	const pop_RightBottom_Ref = useRef<HTMLDivElement>(null)
	const [pop_RightBottom_isVisible, setPop_RightBottom_isVisible] = useState<boolean>(false)
	const [ RightBottom_isVisible ] = useEleOnScreen(pop_RightBottom_Ref, pop_RightBottom_isVisible, setPop_RightBottom_isVisible)//传入对象跟 hook 返回是否可见的值
	
	const pop_RightTop_Ref = useRef<HTMLDivElement>(null)
	const [pop_RightTop_isVisible, setPop_RightTop_isVisible] = useState<boolean>(false)
	const [ RightTop_isVisible ] = useEleOnScreen(pop_RightTop_Ref, pop_RightTop_isVisible, setPop_RightTop_isVisible)//传入对象跟 hook 返回是否可见的值
	

	return (
	<>
		<div className="main-fb-container">

			<div className="main-bg">
				<div className="circle-text-container">
					{/* 👇小气泡 */}
					<div 
						className="popLeftTop" 
						ref={pop_LeftTop_Ref}
						css={LeftTop_isVisible && css`
							opacity: 1 !important;
							transform: translateX(2px) !important;
							transition: all 0.3s ease-in-out !important;
							transition-delay: .3s !important;
						`}
						>
						<p>Generate creative inspiration themes more quickly</p>
					</div>

					<div 
						className="popTopLeft"
						ref={pop_TopLeft_Ref}
						css={TopLeft_isVisible && css`
							opacity: 1 !important;
							transform: translateY(2px) !important;
							transition: all 0.3s ease-in-out !important;
							transition-delay: .45s !important;
						`}
						>
						<p>Easier creation of systematic content</p>
					</div>

					<div 
						className="popTopRight"
						ref={pop_TopRight_Ref}
						css={TopRight_isVisible&& css`
							opacity: 1 !important;
							transform: translateY(2px) !important;
							transition: all 0.3s ease-in-out !important;
							transition-delay: .55s !important;
						`}
						>
						<p>Easier to sink team knowledge and form team assets</p>
					</div>

					<div 
						className="popLeftBottom"
						ref={pop_LeftBottom_Ref}
						css={LeftBottom_isVisible && css`
							opacity: 1 !important;
							transform: translateX(2px) !important;
							transition: all 0.3s ease-in-out !important;
							transition-delay: 1.3s !important;
						`}
						>
						<p>Take better notes to aid my thinking and memory</p>
					</div>

					<div 
						className="popBottomLeft"
						ref={pop_BottomLeft_Ref}
						css={BottomLeft_isVisible && css`
							opacity: 1 !important;
							transform: translateX(2px) !important;
							transition: all 0.3s ease-in-out !important;
							transition-delay: .95s !important;
						`}
						>
						<p>More powerful creation ability & more enjoyable of browsing experience</p>
					</div>
				
					<div 
						className="popBottomRight"
						ref={pop_BottomRight_Ref}
						css={BottomRight_isVisible && css`
							opacity: 1 !important;
							transform: translateX(2px) !important;
							transition: all 0.3s ease-in-out !important;
							transition-delay: .85s !important;
						`}
						>
						<p>Richer project visualization capabilities</p>
					</div>

					<div 
						className="popRightBottom"
						ref={pop_RightBottom_Ref}
						css={RightBottom_isVisible && css`
							opacity: 1 !important;
							transform: translateX(2px) !important;
							transition: all 0.3s ease-in-out !important;
							transition-delay: .75s !important;
						`}
						>
						<p>More flexible and scalable, able to connect to your own business streams to increase business benefits</p>
					</div>

					<div 
						className="popRightTop"
						ref={pop_RightTop_Ref}
						css={RightTop_isVisible && css`
							opacity: 1 !important;
							transform: translateX(2px) !important;
							transition: all 0.3s ease-in-out !important;
							transition-delay: .65s !important;
						`}
						>
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





