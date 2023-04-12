/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
// 通过注释来动态的引入 babel 的翻译器，用 emotion 的翻译器！
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UXInnovationUI from '../../../../assets/img/ProjectB-topImg.png'
import './ProjectB.less'
// import backIcon from '../../../../assets/svg/icon-back-dm.svg'
import backToTopDark from '../../../../assets/svg/icon-arrowOnlyTop-Dark.svg'
import backIconDark from '../../../../assets/svg/icon-arrowOnly.svg'
import { BasicInfoPrpjectB } from './BasicInfoPrpjectB/BasicInfoPrpjectB'
import { DividerLight } from './DividerLight/DividerLight'
import UserNPS from './UserNPS/UserNPS'
import { PjbStategy } from './PjbStategy/PjbStategy'
import VirtualAvatar from './VirtualAvatar/VirtualAvatar'
import AiGenerare from './AiGenerare/AiGenerare'
import VcConcept from './VcConcept/VcConcept'
import { VcStructure } from './VcStructure/VcStructure'
import BackToTopDark from './BackToTopDark/BackToTopDark'
import createHeaderFn from './utils/createHeader'


export const ProjectB = () => {

	const navigate = useNavigate() 
	function goBack() {
		navigate('/homepage/works')
	}

	// 实例化详情页的 header
	const projectB_Header = createHeaderFn({
		routerFn: goBack,
		projectName: "Design Innovation",
		imgClassName: backIconDark,
		projectContainerName: "top-img-pjB",
		navClassName: "top-nav-pjB",
		topImgUrl: UXInnovationUI,
	  });


	return (
		<>
			<div className='projectB-container'>
				{/* 不抽象头图 */}
				{/* <div className="top-img-pjB">
					<div className="top-nav-pjB">
						<img src={backIcon} alt="" onClick={ ()=>goBack() }/>
						<p>Design Innovation</p>
					</div>
					<img src={UXInnovationUI} alt="" />
				</div> */}

				{/* 创建 header 的公共 createHeaderFn 方法, 写样式的话【类名】用【上面定义的】！ */}
				{projectB_Header }
				<BasicInfoPrpjectB />
				<UserNPS />
				<PjbStategy />
				<VirtualAvatar />
				<AiGenerare />
				<VcConcept />
				<VcStructure />
				<BackToTopDark 
					content="Back to Top"
					fontColor='#211F3C'
					borderColor='#211F3C'
					backToTopArrow={backToTopDark}
				/>
			</div>
		</>
	)
}
