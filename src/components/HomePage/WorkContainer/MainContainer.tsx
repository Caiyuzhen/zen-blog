import React, { createContext, FC, ReactElement, useEffect, useRef, useState } from 'react'
import ProjectCard, { UseYPosProvider } from './ProjectCard/ProjectCard'
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


// 骨架图
const SkeletonCard = () => {
	return (
		<div className="skeleton-card">
			{/* 占位符样式，可以使用动画等效果增加用户体验 */}
			<div className="skeleton-card-placeholder" />
		</div>
	)
}


// 这一层用来发送请求，接收数据
const MainContainer:FC = ():ReactElement => {

	//声明个 hook 来获取 ProjectData 的数据(api 的数据). 在 api 内, projectData 是 Iitem[] 类型, 需要定义默认值为 [], 不然会报错 -> projectData 可能为未定义
	const [projectData, setData] = useState<ProjectData>([]) 
	const [isLoading, setIsLoading] = useState(true) //判断数据是否获取完毕


	//调用 api 函数，发送请求来获取数据
	useEffect(()=>{
		// 🔢 从本地存储中读取数据
		const cachedData = localStorage.getItem('projectData')

		//定义调用服务端 api 的函数, 给 notion 的 db 发送请求来获取数据
		async function getBlogData() {
			try {
				const res = await fetch('/api/getTitles', {
					method: 'GET',
				})
				const data = await res.json()
				console.log(data) //一个数组对象 [{}, {}, {}]
				setData(data)
				setIsLoading(false)
				// const title = data[0].title
			} catch(error) {
				console.log(error)
			}
	
		}

		// 🔢 先判断是否有缓存, 再判断缓存是否过期了
		if(cachedData) {
			// 🔢 如果缓存中有数据，直接使用缓存数据
			const { projectData, timestamp, expireTime } = JSON.parse(cachedData) //取出 work 数据、 时间戳、过期时间 3 个数据

			if(new Date().getTime() < expireTime) { // 🔢 缓存未过期, 使用缓存中的数据
				setData(projectData)  // 把缓存中的 projectData 数据保存到 hook 上进行渲染
				setIsLoading(false)  // 这里要手动清除骨架图, 因为没有走发送请求的 getBlogData() !
				return
			} else if(new Date().getTime() >= expireTime)  { // 🔢 缓存过期了，移除数据并重新发送请求
				localStorage.removeItem('projectData')
				getBlogData()
				return
			}
		} else {
			// 🔢 如果缓存中没有数据，发送请求获取数据
			getBlogData()
			return
		  }

		// getBlogData()
		// .catch((err) => {
		// 	alert(err)
		// })
		// console.log('🌞得到数据了'+projectData)
	},[])


	// 🔢  缓存 work data 数据到本地
	useEffect(() => {
		const now = new Date().getTime()
		const data = { 
			projectData: projectData, 
			timestamp: now, 
			expireTime: now + 15 * 60 * 1000  // 🔢 缓存时间为 15 分钟
			
		} 
		localStorage.setItem('projectData', JSON.stringify(data)) //key, value
		// localStorage.setItem('projectData', JSON.stringify(projectData))
	},[projectData])


	const [ YPos, setYPos ] = useState<number>(0) // 用来存储卡片距离, 从详情页回来后, 滚动回去
	const updateYPosFn = (newYPos: number) => {
		setYPos(newYPos);
	}

	return (
		<>
			{/* <UseYPosProvider> */}
				{/* <useCardYPosContext.Provider value={{ YPos, updateYPosFn }}> */}
					<div className="context-container">
						<WorkTopInfo />
						<Tilty 
							className="tilty" 
							style={{zIndex: 10, padding:0, width:'100%', transformStyle: "preserve-3d"}}
							settings={{
								glare: true,
								"max-glare": 0.5
							}}
						>
							<BannerCard />
						</Tilty>
						<div className="works-container">
							{	
								isLoading ? 
								// 如果数据还没加载完，则显示骨架图 （写死数组长度为 3, 然后进行遍历, 生成 3 个占位符）
								(Array.from({ length: 3 }, (_, index) => (
									<SkeletonCard key={index} />))
								):(
									// 如果数据加载完毕, 则遍历接从 notion api 接收回来的 work 数据并进行渲染
									// projectData && projectData.map((item:Iitem, index:number) => {
									projectData.map((item:Iitem, index:number) => {
										return (
											// 传入 id，用于判读路由 Link 哪一页
											<ProjectCard content={item} key={index} index={index}/>
										)
									})
								)
							}
						</div>
						<img src={BgCircle} alt="" className="BgCircle"/>
						<img src={squareGraphicIcon} alt="" className="squareIcon"/>
						<img src={gear} alt="" className="gear"/>
					</div>
				{/* </useCardYPosContext.Provider> */}
			{/* </UseYPosProvider> */}
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
