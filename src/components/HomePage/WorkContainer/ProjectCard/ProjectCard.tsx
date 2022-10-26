import React, { FC, ReactElement } from 'react'
import './ProjectCard.less'
import { Iitem } from '../../../../types/global'
import ProjectThree from '../../../../assets/img/work-3.jpg'
import GoInToIcon from '../../../../assets/svg/icon-gointo.svg'
// import {Iitem} from '../../../../api/hygraph'


// 项目卡片的类型

interface IProps {
	content ? : Iitem
}

const ProjectCard:FC<IProps> = ({content}): ReactElement => {
  return (
	<>	
		<div className='project-card'>
			{/* 非空断言！ */}
			<div className="project-card-top">
				<div className='project-card-title'>{content!.title}</div>
				<div className="right-action">
					<img src={GoInToIcon} alt="" className="project-card-icon"/>
					<div className="project-card-time">2022</div>
				</div>
			</div>
			<img src={ProjectThree} alt="" className="project-image"/>
			{/* <p>{content!.content}</p> */}
			{/* <p>{content!.description}</p> */}
		</div>
	</>
  )
}

export default ProjectCard