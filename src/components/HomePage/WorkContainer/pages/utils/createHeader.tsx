//抽象出来构建页面顶部的通用方法
type ConfigHeader = {
	routerFn: () => void
	imgClassName: string
	projectContainerName: string
    navClassName: string
	topImgIcon: string
}


// 构造作品详情页 Header 的通用方法
export default function createHeaderFn({
	routerFn,
	imgClassName,
	projectContainerName,
    navClassName,
	topImgIcon

}: ConfigHeader) {
	return (
		<>
			{/* 头图 */}
			<div className={projectContainerName}>
				{/* 导航 */}
				<div className={navClassName}>
					<img src={imgClassName} alt="" onClick={ routerFn }/>
					<p>Project B Name</p>
				</div>
				<img src={topImgIcon} alt="" />
			</div>
		</>
	)
}