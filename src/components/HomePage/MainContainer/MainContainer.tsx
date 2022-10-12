import React, { FC,ReactElement } from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import './MainContainer.less'

interface IProps {
	
}

const MainContainer:FC<IProps> = ():ReactElement => {


	return (
		<>
			<div className="context-container">
				{
					//⚡️循环创建 4 个 slider, 然后判断是否有卡片，有则添加【key】
					[1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) => 
						<div key={index}>
							<ProjectCard/>
						</div>
					)
				}

			</div>
		</>
	)
}

export default MainContainer
