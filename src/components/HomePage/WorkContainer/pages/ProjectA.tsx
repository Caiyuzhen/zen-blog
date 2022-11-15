/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
// 通过注释来动态的引入 babel 的翻译器，用 emotion 的翻译器！
import React, { RefObject, useEffect, useRef, useState } from 'react'
import topImg from '../../../../assets/img/ProjectA-topImg.jpg'
import backIcon from '../../../../assets/svg/icon-back.svg'
import './ProjectA.less'
import { useNavigate } from 'react-router-dom'
import Trottle from '../../../../utils/Trottle'
import BasicInfo from '../pages/BasicInfo/BasicInfo'
import Border from '../../../Border/Border'
import UserTypeInfo from '../pages/UserTypeInfo/UserTypeInfo'
import UserFeedback from '../pages/UserFeedback/UserFeedback'
import BusinessGoals from '../pages/BusinessGoals/BusinessGoals'
import UxStategy from '../pages/UxStategy/UxStategy'
import Editoral from '../pages/Editorial/Editoral'
import DefinitionBlock from '../pages/DefinitionBlock/DefinitionBlock'
import ExpandPlayground from '../pages/ExpandPlayground/ExpandPlayground'
import CanvasBlock from '../pages/CanvasBlock/CanvasBlock'
import Automation from '../pages/Automation/Automation'
import Intergation from '../pages/Intergation/Intergation'
import AutoStep from '../pages/AutoStep/AutoStep'
import KMGrowth from '../pages/KMGrowth/KMGrowth'
import BlockReference from '../pages/BlockReference/BlockReference'
import HashtagDM from '../pages/HashtagDM/HashtagDM'


export const ProjectA = () => {

	// 封装一个监听页面滚动距离的方法
	function getScrollY(): number {
		const [scrollY, setScrollY] = useState<number>(0)

		useEffect(() => {
			const pageMoveHandler = () => {
				const scrollY_Value = parseInt(window.scrollY.toFixed(2))
				setScrollY(scrollY_Value) //把值设置进 hook 内
			}

			const pageMove = Trottle(pageMoveHandler, 50) //引入节流方法

			window.addEventListener('scroll', pageMove!) //执行监听包裹节流方法的函数
			return () => window.removeEventListener("scroll", pageMove!)
		}, [])

		console.log(scrollY) 

		return scrollY	//返回页面滚动的距离
	}
	// getScrollY()


	// 返回上一页的函数
	const navigate = useNavigate()
	function goBack(): void {
		navigate('/homepage/works')
	}


	return (
		<>
			<div className='projectA-container'>
				{/* 头图 */}
				<div className="top-img">
					{/* 导航 */}
					<div className="top-nav">
						<img src={backIcon} alt="" onClick={ ()=>goBack() }/>
						<p>Project A Name</p>
					</div>
					<img src={topImg} alt="" />
				</div>
				
				{/* 首屏 */}
				<BasicInfo />

				{/* 分割线 */}
				<Border />

				{/* UserType */}
				<UserTypeInfo />

				{/* 用户反馈 */}
				<UserFeedback />

				{/* 业务目标 */}
				<BusinessGoals />

				{/* 分割线 */}
				<Border />

				{/* 设计策略 */}
				<UxStategy />

				{/* Editorial */}
				<Editoral />

				{/* DefinitionBlock */}
				<DefinitionBlock />

				{/* Expand playground */}
				<ExpandPlayground />

				{/* Canvas block  */}
				<CanvasBlock />

				{/* 分割线 */}
				<Border />

				{/* automation */}
				<Automation />

				{/* 集成 */}
				<Intergation />

				{/* Auto Step */}
				<AutoStep />

				{/* KMGrowth, Circle Graphic */}
				<KMGrowth />

				{/* Block Reference and Bidirectional link */}
				<BlockReference />

				{/* Hashtag 页面 */}
				<HashtagDM />
			</div>
		</>
	)
}


export default ProjectA
