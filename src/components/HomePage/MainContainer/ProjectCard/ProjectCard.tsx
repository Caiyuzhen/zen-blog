import React, { FC, ReactElement } from 'react'
import './ProjectCard.less'
import {Iitem, ProjectData} from '../../../../api/index'


interface IProps {
	content ? : Iitem
}

const ProjectCard:FC<IProps> = ({content}): ReactElement => {
  return (
	<>	
		<div className='project-card'>
			{/* 非空断言！ */}
			<h2>{content!.projectTitle}</h2>
			<p>{content!.description}</p>
			<p>{content!.datePublished}</p>
		</div>
	</>
  )
}

export default ProjectCard