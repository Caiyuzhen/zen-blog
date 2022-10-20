import React, { FC, ReactElement } from 'react'
import './ProjectCard.less'
import {Iitem} from '../../../../api/index'


interface IProps {
	content ? : Iitem[] | undefined
}

const ProjectCard:FC<IProps> = ({content}): ReactElement => {
  return (
	<>	
		<div className='project-card'>
			<h2>Title</h2>
			<p>Your Pages site will use the layout and styles from the Jekyll theme you have selected in your </p>
		</div>
	</>
  )
}

export default ProjectCard