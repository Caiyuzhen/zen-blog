/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
// 通过注释来动态的引入 babel 的翻译器，用 emotion 的翻译器！
import React, { useEffect, useState } from 'react'
import './PublishAbility.less'
import webBrowsing from '../../../../../assets/svg/icon-webBrowsing.svg'
import webBuilding from '../../../../../assets/svg/icon-webBuilding.svg'
import dashDotLeft from '../../../../../assets/svg/line-dashDot-left.svg'
import dashDotRight from '../../../../../assets/svg/line-dashDot-right.svg'
import shadowBg from '../../../../../assets/svg/bg-shadow.svg'


type isHover = {
	left : boolean,
	right : boolean,
}


export const PublishAbility = () => {

	const [isHover, setIsHover] = useState<isHover>(function(): isHover{
		return {
			left : false,
			right: false,
		}
	})

	useEffect(()=>{
		console.log(isHover)
	},[isHover])


	return (
		<>
			<div className="publishAbility-main-container">
				{/* 顶部信息 */}
				<div className="publishAbility-topInfo-container">
					<div className="publishAbility-topInfo-title">Web-based of Build & Publish</div>
					<p className="publishAbility-topInfo-des">
						Based on the design perspective to give the product more differentiated value, we creatively proposed the "web-based" design strategy, the core goal is to make the document expression ability more similar to the web page, everyone can easily get started, without the complex skills of making web pages, can achieve the web-level production and browsing experience.
					</p>
				</div>
				{/* 底部信息 */}
				<div className="publishAbility-bottomInfo-container">
					<div className="publishAbility-bottomInfo-leftItem">
						<p>Multi-page View mode</p>
						<p>Polymorphic Card Display Form</p>
					</div>
					{/* 中间两个圆 */}
					<div className="publishAbility-bottomInfo-centerItem">
						<img src={dashDotLeft} alt="" className="dashDotLeft"/> 
						<img src={dashDotRight} alt="" className="dashDotRight"/>



						{/* 左圆 */}
						<div className="publishAbility-bottomInfo-leftCircle"
							 onMouseEnter={()=>{setIsHover({left: true, right: false})}} //左右都得赋值，不然就会 undefined！
							 onMouseLeave={()=>{setIsHover({left: false, right: false})}}
						>
							<img src={webBrowsing} alt="" />
							<p> Web-level browsing <br/> experience </p>
						</div>
						<img src={shadowBg} alt="" 
							 className="shadowBgLeft" 
							 css={(isHover.left) && css`
							 	opacity: 1 !important;
								transition: all .3s ease-in-out !important;
							 `}
						/>



						{/* 右圆 */}
						<div className="publishAbility-bottomInfo-rightCircle"
							 onMouseEnter={()=>{setIsHover({left: false, right: true})}}
							 onMouseLeave={()=>{setIsHover({left: false, right: false})}}
						>
							<img src={webBuilding} alt="" />
							<p> Web-level site building  <br/> capability </p>
						</div>
						<img src={shadowBg} alt="" 
							 className="shadowBgRight" 
							 css={(isHover.right) && css`
							 	opacity: 1 !important;
								transition: all .3s ease-in-out !important;
							 `}
						/>
					</div>
					<div className="publishAbility-bottomInfo-rightItem">
						<p>Column nesting layout capability</p>
						<p>Configurable of page structure</p>
					</div>
				</div>

			</div>
		</>
	)
}

export default PublishAbility
