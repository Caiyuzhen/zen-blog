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

				{/* 项目介绍 */}
				<BasicInfoPrpjectB />

				{/* 分割线 */}
				<DividerLight />
				
				{/* 用户 NPS */}
				<UserNPS />

				{/* 分割线 */}
				<DividerLight />

				{/* UX Stategy */}
				<PjbStategy />
			</div>
		</>
	)
}
