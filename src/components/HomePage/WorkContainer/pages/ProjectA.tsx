import React from 'react'
import topImg from '../../../../assets/img/ProjectA-topImg.jpg'
import gradualArrow from '../../../../assets/svg/icon-gradualArrow.svg'
import colorBorder from '../../../../assets/svg/icon-colorBorder.svg'
import backIcon from '../../../../assets/svg/icon-back.svg'
import './ProjectA.less'
import { useNavigate } from 'react-router-dom'



export const ProjectA = () => {

	// 返回
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
				<div className="basic-info">
					<p>ProjectA</p>
					<div className="basic-info-topContainer">
						<div className="basic-info-topLeft">
							<div className="main-title">Hybrid Working background</div>
							<div className="content">The black swan event of the epidemic has quickly transformed the organization's collaboration mode from the traditional offline mode to a remote office mode, followed by a change in the entire organization's collaboration mode, which has also triggered companies to re-engineer their own workflow. Review, use tools to improve business efficiency, increase business effects, and improve business benefits.</div>
						</div>
						<div className="basic-info-topRight">
							<div className="circle">Single product Create tool</div>
							<img src={gradualArrow} alt="" />
							<div className="circle">Compound Create tool</div>
						</div>
					</div>
					<div className="basic-info-bottomContainer">
						<div className="basic-info-bottomLeft">
							<div className="main-title">The rise of the creator economy</div>
							<div className="content">In the era of Web 2.0, big platforms monopolized the ownership of content, but in the era of Web 3.0, the ownership of content will return to creators, and the environment has also spawned more freelancers. We also found that more and more The NCLC platform has sprung up like mushrooms after a rain, and the entire industry has ushered in a bonus period.</div>
						</div>
						<div className="basic-info-bottomRight">
							<div className="circle">Centralized Edit mode</div>
							<img src={gradualArrow} alt="" />
							<div className="circle">Decentralization Creative mode</div>
						</div>
					</div>
				</div>

				{/* 分割线 */}
				<img src={colorBorder} alt="" />
			</div>
		</>
	)
}


export default ProjectA
