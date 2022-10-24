import React, { FC, ReactElement } from 'react'
import './ProjectCard.less'
// import {Iitem} from '../../../../api/hygraph'
import { Iitem } from '../../../../types/global'


interface IProps {
	content ? : Iitem
}

const ProjectCard:FC<IProps> = ({content}): ReactElement => {
  return (
	<>	
		<div className='project-card'>
			{/* 非空断言！ */}
			<h2>{content!.title}</h2>
			<p>{content!.content}</p>
			{/* <p>{content!.description}</p> */}
		</div>
	</>
  )
}

export default ProjectCard