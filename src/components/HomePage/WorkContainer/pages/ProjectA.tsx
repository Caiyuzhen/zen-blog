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
import KnowledgeGraphic from '../pages/KnowledgeGraphic/KnowledgeGraphic'
import PublishAbility from '../pages/PublishAbility/PublishAbility'
import Interactive from '../pages/Interactive/Interactive'
import MutilPage from '../pages/MutilPage/MutilPage'
import NestedLayout from '../pages/NestedLayout/NestedLayout'
import PageLinkStyle from '../pages/PageLinkStyle/PageLinkStyle'
import PageTheme from '../pages/PageTheme/PageTheme'
import WebsitePage from '../pages/WebsitePage/WebsitePage'
import BackToTop from '../pages/BackToTop/BackToTop'
import BG from '../../../../assets/img/project-A-bg.jpg'

// background: url('../../../../assets/img/project-A-bg.jpg') center center no-repeat;


export const ProjectA = () => {

	// 封装一个监听页面滚动距离的方法
	function getScrollY(): number {
		const [scrollY, setScrollY] = useState<number>(0)

		useEffect(() => {
			const pageMoveHandler = () => {
				const scrollY_Value = parseInt(window.scrollY.toFixed(2)) //取小数点后两位
				setScrollY(scrollY_Value) //把值设置进 hook 内
			}

			const pageMove = Trottle(pageMoveHandler, 50) //引入节流方法包裹函数

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
				{/* <Border /> */}

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

				{/* 图谱 */}
				<KnowledgeGraphic />

				{/* 建站能力 */}
				<PublishAbility />

				{/* 互动能力 */}
				<Interactive />

				{/* 多页 */}
				<MutilPage />

				{/* 页面主题 */}
				<PageLinkStyle />

				{/* 多栏 */}
				<NestedLayout />

				{/* 页面主题 */}
				<PageTheme />

				{/* 官网页面 */}
				<WebsitePage />

				{/* 返回顶部 */}
				<BackToTop />

				<img src={BG} alt="" className="projectA-BG"/>
			</div>
		</>
	)
}


export default ProjectA
