import React, { createContext, FC, ReactElement, useCallback, useContext, useEffect, useRef, useState } from 'react'
import './ProjectCard.less'
import { Iitem } from '../../../../types/global'
// import ProjectThree from '../../../../assets/img/work-3.jpg'
import GoInToIcon from '../../../../assets/svg/icon-gointo.svg'
import { MouseContext } from '../../../Mouse/useMouseContext'
import { useNavigate } from 'react-router-dom'
// import { useCardYPosContext } from '../pages/utils/useCardYPosContext'
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

// useCootext 的接口
interface CardYPosContextValue {
	YPos: number;
	updateYPosFn: (YPos: number) => void;
}

type IYpos = {
	children: React.ReactNode 
}


// 用来传递数据的 context (页面位置)
export const useCardYPosContext = createContext<CardYPosContextValue>({
	YPos: 0,//默认位置为 0
	updateYPosFn: () => {} // 修改 pageTPos 的方法, 用 UseYPosProvider 的 hook 进行替换
})


// 跨组件传递数据的方法（实际修改 context 的 hook～）, 然后去包裹 mainConainer 组件! 不能包裹 App 根组件！因为路由会变化！
export const UseYPosProvider = ( {children}:IYpos ) => {
	const [YPos_, setYPos] = useState<number>(0)

	function updateYPosFn_(_YPos_: number) {
		setYPos(_YPos_)
		// 把 _YPos_ 保存到会话储存空间中, 然后给到详情页
		sessionStorage.setItem('YPos', JSON.stringify(_YPos_))
		
	}

	const value = {
		YPos: YPos_,
		updateYPosFn: updateYPosFn_
	}

	useEffect(()=>{
		if(YPos_ !== 0) {
			console.log('更新了:',YPos_) //拿到值为 1147
		}
	},[value.updateYPosFn])

	return (
		// 所有 React 树的 children 都能访问到这个 context
		<useCardYPosContext.Provider value={value}>
			{children} 
		</useCardYPosContext.Provider>
	)
}




// 渲染项目卡片的组件
const ProjectCard:FC<IProps> = ({content, index}): ReactElement => {

	const { cursorType, cursorChangeHandler } = useContext(MouseContext)//引入工具, 添加鼠标样式
	const { YPos, updateYPosFn } = useContext(useCardYPosContext) 
	

	useEffect(()=>{
		const projectCard = document.querySelectorAll('.project-card')[0]
		if(projectCard) {
			const _CardYPos = Math.floor(projectCard.getBoundingClientRect().top + window.pageYOffset) //向下取整
			if(_CardYPos >= 0) {
				// console.log(_CardYPos)
				console.log(YPos)
				updateYPosFn(_CardYPos)
			}
		}
	},[])


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
		
		// console.log(target.dataset.index) // 打印 target 元素身上设置的数据 [1,2,3]
	}

	return (
		<>	
			{/* Provider 传递 cardYPosContext */}
			{/* <useCardYPosContext.Provider value={newPosValue}> */}

				<div className='project-card'
					id={content!.id}
					onMouseEnter={() => cursorChangeHandler('hovered')}
					onMouseLeave={() => cursorChangeHandler('')}
					onClick={ (e)=>{
						window.scrollTo(0,0) //去到最顶部
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

			{/* </useCardYPosContext.Provider> */}
		</>
	)
}

export default ProjectCard