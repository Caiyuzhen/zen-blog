import React, { createContext, FC, ReactElement, useContext, useEffect, useRef, useState } from 'react'
import './ProjectCard.less'
import { Iitem } from '../../../../types/global'
// import ProjectThree from '../../../../assets/img/work-3.jpg'
import GoInToIcon from '../../../../assets/svg/icon-gointo.svg'
import { MouseContext } from '../../../Mouse/useMouseContext'
import { useNavigate } from 'react-router-dom'
// import {Iitem} from '../../../../api/hygraph'


// 项目卡片的类型
interface IProps {
	content ? : Iitem,
	index: number,
}

// 路由的枚举
enum NavigatorPath {
	ProjectA = '/homepage/works/projectA',
	ProjectB = '/homepage/works/projectB',
	ProjectC = '/homepage/works/projectC'
}


// 用来传递数据(页面位置)
export const useCardYPosContext = createContext({
	pageYPos: 0,//默认位置为 0
	setPageYPos: (pageYPos: number) => {} // 修改 pageTPos 的方法
})


const ProjectCard:FC<IProps> = ({content, index}): ReactElement => {

	const { cursorType, cursorChangeHandler } = useContext(MouseContext)//引入工具, 添加鼠标样式
	const [ cardYPos, setCardYPos ] = useState<number>(0) // 记录当前停留的位置, 从详情页回来后, 滚动回去

	// 拿到快递的 pageYPos , 并对其进行修改
	const { pageYPos,setPageYPos } = useContext(useCardYPosContext) 
	const value = {
		pageYPos: pageYPos,
		setPageYPos: setPageYPos
	}
	useEffect(()=>{
		console.log('卡片高度:',cardYPos) //👈为什么变成 0 了 ？
		if(cardYPos !== 0) {
			// 修改 pageYPos 的值
			setPageYPos(cardYPos)
		}
	},[cardYPos])


	// 路由跳转方法
	const projectRef = useRef<HTMLDivElement>(null)
	const navigate = useNavigate()

	function goProject(target: HTMLElement): void {
		// 🔥在上游 (MainContainer) 把 index 传递下来, 设置到元素的 data-XXX 属性身上了！所以可以根据这个值来判断要跳转到哪个路由详情页！
		// 👇抽象过后
		const index = target.dataset.index
		const path = index === '0' ? NavigatorPath.ProjectA : 
					 index === '1' ? NavigatorPath.ProjectB :
					 index === '2' ? NavigatorPath.ProjectC :
					 null
		if(path) {
			navigate(path)
		}

		// 👇未抽象前
		// if (target.dataset.index === '0') {
		// 	navigate('/homepage/works/projectA')
		// 	// console.log('A')
		// } else if (target.dataset.index === '1') {
		// 	navigate('/homepage/works/projectB')
		// 	// console.log('B')
		// }
		console.log(target.dataset.index) // 打印 target 元素身上设置的数据 [1,2,3]
	}


	return (
		<>	
			{/* Provider 传递 cardYPosContext */}
			<useCardYPosContext.Provider value={value}>

				<div className='project-card'
					id={content!.id}
					onMouseEnter={() => cursorChangeHandler('hovered')}
					onMouseLeave={() => cursorChangeHandler('')}
					onClick={ (e)=>{
						const targerPos = e.currentTarget.offsetTop //获取位置
						setCardYPos(targerPos ?? 0), //储存位置
						window.scrollTo(0, 0), // 滚动到页面顶部

						goProject(e.currentTarget as HTMLElement)//🔥注意，需要通过 e.currentTarget 才能拿到 data-index 的 dataset 数据！！并且不能为驼峰命名！！
					}} 
					ref={projectRef}
					data-index={index} //🔥设置 data-index 属性为上游 MainContainer 的 index ，用来判断点击的是哪个项目卡片
				>
					{/* 非空断言！ */}
					<div className="project-card-top">
						<div className='project-card-title'>{content!.title}</div>
						<div className="right-action">
							<img src={GoInToIcon} alt="" className="project-card-icon"/>
							<div className="project-card-time">2019</div>
						</div>
					</div>
					<img src={content!.cover} alt="" className="project-image"/>
					{/* <p>{content!.content}</p> */}
					{/* <p>{content!.description}</p> */}
				</div>

			</useCardYPosContext.Provider>
		</>
	)
}

export default ProjectCard