import React, { FC, ReactElement, useEffect, useState } from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import './MainContainer.less'
import { ProjectData, Iitem } from '../../../../src/types/global'
import {WorkTopInfo} from './WorkTopInfo/WorkTopInfo'
import { BannerCard } from './BannerCard/BannerCard'
import BgCircle  from '../../../../src/assets/svg/icon-circle.svg'
import ProjectTwo from '../../../../assets/img/work-2.jpg'
import ProjectThree from '../../../../assets/img/work-3.jpg'
import squareGraphicIcon from '../../../assets/svg/icon-squareGraphic.svg'
import gear from '../../../assets/svg/icon-gear.svg'
import Tilty from 'react-tilty'
// import {ProjectData, Iitem, getProjectData} from '../../../api/hygraph'



// 这一层用来发送请求，接收数据
const MainContainer:FC = ():ReactElement => {

	//声明个 hook 来获取 ProjectData 的数据(api 的数据)
	const [projectData, setData] = useState<ProjectData>() //api 内, projectData 是 Iitem[] 类型

	//定义调用服务端 api 的函数, 给 notion 的 db 发送请求来获取数据
	async function getBlogData() {
		const res = await fetch('/api/getTitles', {
			method: 'GET',
		})
		const data = await res.json()
		console.log(data) //一个数组对象 [{}, {}, {}]
		setData(data)
		// const title = data[0].title
	}

	//调用 api 函数，发送请求来获取数据
	useEffect(()=>{
		getBlogData()
		// .catch((err) => {
		// 	alert(err)
		// })
		// console.log('🌞得到数据了')
	},[])

	return (
		<>
			<div className="context-container">
				<WorkTopInfo />
				<Tilty 
					className="tilty" 
					style={{zIndex: 10, padding:0, transformStyle: "preserve-3d"}}
					settings={{
						glare: true,
						"max-glare": 0.5
					  }}
				>
					<BannerCard />
				</Tilty>
				<div className="works-container">
					{
						// 遍历数据并进行渲染
						projectData && projectData.map((item:Iitem, index) => {
							return (
								<ProjectCard content={item} key={item.id} />
							)
						})
					}
				</div>
				<img src={BgCircle} alt="" className="BgCircle"/>
				<img src={squareGraphicIcon} alt="" className="squareIcon"/>
				<img src={gear} alt="" className="gear"/>
			</div>
		</>
	)
}



//⚡️获取 Hygraph 数据的写法
// const MainContainer:FC = ():ReactElement => {

// 	//声明个 hook 来获取 ProjectData 的数据(api 的数据)
// 	const [projectData, setData] = useState<ProjectData>() //api 内, projectData 是 Iitem[] 类型

// 	//调用 api 函数，发送请求来获取数据
// 	useEffect(()=>{
// 		getProjectData().then((data) => {
// 			if(typeof data === 'undefined') {//过滤掉为空状态
// 				return ''
// 			} else {
// 				setData(data) //获取 api 传过来的数据
// 				// console.log(data)
// 			}
// 		}).catch((err) => {
// 			alert(err)
// 		})
// 		// console.log('🌞得到数据了')
// 	},[])

// 	return (
// 		<>
// 			<div className="context-container">
// 				{/* {
// 					//⚡️循环创建 4 个 slider, 然后判断是否有卡片，有则添加【key】
// 					[1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) => 
// 						<div key={index}>
// 							<ProjectCard/>
// 						</div>
// 					)
// 				} */}
// 				{
// 					// 遍历数据并进行渲染
// 					projectData && projectData.map((item:Iitem, index) => {
// 						return (
// 							<div key={item.id}>
// 								<ProjectCard content={item}/>
// 							</div>
// 						)
// 					})
// 				}

// 			</div>
// 		</>
// 	)
// }

export default MainContainer
