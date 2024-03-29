import { useContext, useEffect, useState } from "react"
import { useCardYPosContext } from "../../ProjectCard/ProjectCard"



//抽象出来构建页面顶部的通用方法
type IConfigHeader = {
	routerFn: () => void
	projectName: string
	imgClassName: string
	projectContainerName: string
    navClassName: string
	topImgUrl: string
}


// 构造作品详情页 Header 的通用方法
export default function createHeaderFn({
	routerFn,
	projectName,
	imgClassName,
	projectContainerName,
    navClassName,
	topImgUrl
}: IConfigHeader) {

	const { YPos,updateYPosFn } = useContext(useCardYPosContext) //获取跨组件快递来的值 ❌ 切换路由了, 值就没了

	// 读取会话储存空间中的值 (比较挫)
	// const YPos = JSON.parse(sessionStorage.getItem('YPos') || '0')

	return (
		<>
			{/* <useCardYPosContext.Consumer>	 */}
				{/* {({ YPos }) => ( */}
					<div className={projectContainerName}>
						{/* 导航 */}
						<div className={navClassName}>
							<div className="back-circle-container" 
								 onClick={ ()=> {
										routerFn(),
										window.scrollTo(0, YPos), // 返回到上次的位置
										console.log('YPos 值:', YPos) // 打印 
								}}>
									{/* 内部箭头 */}
								<img src={imgClassName} alt=""/>
							</div>
							<p>{projectName}</p>
						</div>
						<img src={topImgUrl} alt="" />
					</div>
				{/* )}   */}
			{/* </useCardYPosContext.Consumer> */}
		</>
	)
}