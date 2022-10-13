import React, { FC, ReactElement } from 'react'
import './ProjectCard.less'

interface IProps {

}

const ProjectCard:FC<IProps> = (): ReactElement => {
  return (
	<>	
		<div className='project-card'>
			<h2>ABCD</h2>
			<p>Your Pages site will use the layout and styles from the Jekyll theme you have selected in your </p>
		</div>
	</>
  )
}

export default ProjectCard