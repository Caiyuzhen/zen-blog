/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
// 通过注释来动态的引入 babel 的翻译器，用 emotion 的翻译器！
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import topImg from '../../../../assets/img/ProjectB-topImg.jpg'
import './ProjectB.less'
import backIcon from '../../../../assets/svg/icon-back-dm.svg'
import { BasicInfoPrpjectB } from './BasicInfoPrpjectB/BasicInfoPrpjectB'
import { DividerLight } from './DividerLight/DividerLight'
import UserNPS from './UserNPS/UserNPS'
import { PjbStategy } from './PjbStategy/PjbStategy'
import VirtualAvatar from './VirtualAvatar/VirtualAvatar'
import AiGenerare from './AiGenerare/AiGenerare'
import VcConcept from './VcConcept/VcConcept'
import { VcStructure } from './VcStructure/VcStructure'
import PjbData from './PjbData/PjbData'
import BackToTopDark from './BackToTopDark/BackToTopDark'


export const ProjectB = () => {

	const navigate = useNavigate() 
	function goBack() {
		navigate('/homepage/works')
	}


	return (
		<>
			<div className='projectB-container'>
				{/* 头图 */}
				<div className="top-img-pjB">
					{/* 导航 */}
					<div className="top-nav-pjB">
						<img src={backIcon} alt="" onClick={ ()=>goBack() }/>
						<p>Project B Name</p>
					</div>
					<img src={topImg} alt="" />
				</div>

				{/* project intro */}
				<BasicInfoPrpjectB />
				
				{/* 用户 NPS */}
				<UserNPS />

				{/* UX Stategy */}
				<PjbStategy />

				{/* avatar */}
				<VirtualAvatar />

				{/* Ai */}
				<AiGenerare />

				{/* VC Concept */}
				<VcConcept />

				{/* VC Structure */}
				<VcStructure />

				{/* divider */}
				<DividerLight />

				{/* 数据 */}
				<PjbData />

				{/* 返回顶部 */}
				<BackToTopDark />
			</div>
		</>
	)
}
