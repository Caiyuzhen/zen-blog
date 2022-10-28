import React, { FC, useRef, useEffect, useState } from 'react'
import './BannerCard.less'
import mainWork0 from '../../../../assets/img/work-1.jpg'
import mainWork1 from '../../../../assets/img/work-2.jpg'
import mainWork2 from '../../../../assets/img/work-3.jpg'
import detailIcon from '../../../../assets/svg/icon-detail.svg'




export const BannerCard:FC = () => {

	const [index, setIndex] = useState(0) //最开始是第 0 张
	
	// const mask = document.querySelector('.imgMask-box') as HTMLDivElement
	const work0 = document.querySelector('.work-0') as HTMLImageElement
	const work1 = document.querySelector('.work-1') as HTMLImageElement
	const work2 = document.querySelector('.work-2') as HTMLImageElement


	// 轮播方法
	function ToggleWorks(targetDot: string) {
		if(targetDot === 'dot0'){
			console.log(work0)
			setIndex(0)
			return
		} 
		else if (targetDot === 'dot1') {
			setIndex(1)
			if(work1 !== null) {
				work0.style.transform = `translate(-${work0.offsetWidth * index}px)`
			}
		}
		else if (targetDot === 'dot2') {
			setIndex(2)
			console.log(work2)
			if(work2 !== null) {
				work0.style.transform = `translate(-${work0.offsetWidth * index}px)`
				work1.style.transform = `translate(-${work1.offsetWidth * index}px)`
			}
		}
	}


	return (
		<>
			<div className="mainWork-banner-container">

				{/*  用 mask 来规定显示的尺寸大小 */}
				<div className="imgMask-box">
						{/* 所有图片 */}
						<img src={mainWork0} alt="" className="mainWork work-0" />
						<img src={mainWork1} alt="" className="mainWork work-1" />
						<img src={mainWork2} alt="" className="mainWork work-2" />
						{/* 放第一张用来循环 */}
						{/* <img src={mainWork0} alt="" className="mainWork work-0" /> */}
				</div>
				
				{/* 右侧内容 */}
				<div className="content-conatiner">
					<p className="content-title">UI&UX Design</p>
					<p className="content-subtitle">A simple note app, some desctiptions, and some examples of how to use it.A simple note app, some desctiptions, and some examples of how to use it.</p>
					<div className="navDot-container">
						{/* 导航的小点点 */}
						<div className="navDotGroup">
							<span className="dot " onClick={ (e) => {ToggleWorks('dot0')} }></span>
							<span className="dot dot-Selector" onClick={ (e) => {ToggleWorks('dot1')} }></span>
							<span className="dot " onClick={ (e) => {ToggleWorks('dot2')} }></span>
						</div>
						<img src={detailIcon} alt="" />
					</div>
				</div>
			</div>
		</>
	)
}
