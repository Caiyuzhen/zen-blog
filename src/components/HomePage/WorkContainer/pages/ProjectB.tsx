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
import UXFrameWork from './UXFrameWork/UXFrameWork'
import EmotionalModel from './EmotionalModel/EmotionalModel'
import VirtualAvatar from './VirtualAvatar/VirtualAvatar'
import PfWidget from './PfWidget/PfWidget'
import IMCover from './IMCover/IMCover'
import MobileCover from './MobileCover/MobileCover'
import AiGenerare from './AiGenerare/AiGenerare'
import VcConcept from './VcConcept/VcConcept'
import { VcStructure } from './VcStructure/VcStructure'


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

				{/* divider */}
				<DividerLight />
				
				{/* 用户 NPS */}
				<UserNPS />

				{/* divider */}
				<DividerLight />

				{/* UX Stategy */}
				<PjbStategy />

				{/* UX FrameWork */}
				<UXFrameWork />

				{/* design model */}
				<EmotionalModel />

				{/* avatar */}
				<VirtualAvatar />

				{/* Profile */}
				<PfWidget />

				{/* IMCover */}
				<IMCover />

				{/* Mobile */}
				<MobileCover />

				{/* Ai */}
				<AiGenerare />

				{/* VC Concept */}
				<VcConcept />

				{/* VC Structure */}
				<VcStructure />
			</div>
		</>
	)
}
