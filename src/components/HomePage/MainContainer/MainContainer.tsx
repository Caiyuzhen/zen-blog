import React, { FC, ReactElement, useEffect, useState } from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import './MainContainer.less'
import {Iitem, getProjectData} from '../../../api/index'




const MainContainer:FC = ():ReactElement => {

	//声明个 hook 来获取 ProjectData 的数据(api 的数据)
	const [projectData, setData] = useState<Iitem[]>() //api 内, projectData 是 Iitem[] 类型

	//调用 api 函数，发送请求来获取数据
	useEffect(()=>{
		getProjectData().then((data) => {
			if(typeof data === 'undefined') {//过滤掉为空状态
				return ''
			} else {
				setData(data) //获取 api 传过来的数据
				// console.log(data)
			}
		}).catch((err) => {
			alert(err)
		})
		// console.log('🌞得到数据了')
	},[])

	return (
		<>
			<div className="context-container">
				{
					// //⚡️循环创建 4 个 slider, 然后判断是否有卡片，有则添加【key】
					// [1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) => 
					// 	<div key={index}>
					// 		{/* {
					// 			// 遍历数据并进行渲染
					// 			projectData && projectData.map((item:Iitem) => {
					// 				return ( */}
					// 					<ProjectCard content={item}/>
					// 				{/* ) */}
					// 			{/* })
					// 		} */}
					// 	</div>
					// )
				}
				{
					// 遍历数据并进行渲染
					projectData && projectData.map((item:Iitem) => {
						return (
							<div key={item.id}>{item.projectTitle}</div>
						)
					})
				}

			</div>
		</>
	)
}

export default MainContainer
