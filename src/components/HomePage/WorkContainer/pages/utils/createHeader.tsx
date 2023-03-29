import { useContext } from "react"
import { useCardYPosContext } from "../../ProjectCard/ProjectCard"

//抽象出来构建页面顶部的通用方法
type ConfigHeader = {
	routerFn: () => void
	projectName: string
	imgClassName: string
	projectContainerName: string
    navClassName: string
	topImgIcon: string
}


// 构造作品详情页 Header 的通用方法
export default function createHeaderFn({
	routerFn,
	projectName,
	imgClassName,
	projectContainerName,
    navClassName,
	topImgIcon
}: ConfigHeader) {

	// 👇一次性取值?
	const { pageYPos } = useContext(useCardYPosContext)

	return (
		<>
			{/* <useCardYPosContext.Consumer>	 */}
				{/* {({ pageYPos }) => ( */}
					<div className={projectContainerName}>
						{/* 导航 */}
						<div className={navClassName}>
							<img src={imgClassName} alt="" 
								onClick={ ()=>{
									routerFn
									// 打印 
									console.log('pageYPos 值:', pageYPos)
								}}
							/>
							<p>{projectName}</p>
						</div>
						<img src={topImgIcon} alt="" />
					</div>
				{/* )} */}
			{/* </useCardYPosContext.Consumer> */}
		</>
	)
}