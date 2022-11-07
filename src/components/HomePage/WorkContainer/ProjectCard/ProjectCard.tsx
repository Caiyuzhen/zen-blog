import React, { FC, ReactElement, useContext, useEffect, useRef } from 'react'
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


const ProjectCard:FC<IProps> = ({content, index}): ReactElement => {

	const { cursorType, cursorChangeHandler } = useContext(MouseContext)//引入添加样式


	// 路由跳转方法
	const projectRef = useRef<HTMLDivElement>(null)

	const navigate = useNavigate()

	function goProjectA (target: HTMLElement): void {

		// 🔥在上游把 index 传递下来, 设置到元素的 data-XXX 属性身上了！所以可以根据这个值来判断要跳转到哪个路由详情页！
		if (target.dataset.index === '0') {
			navigate('/homepage/works/projectA')
			// console.log('A')
		} 

		// 🔥打印 target 元素身上设置的数据
		console.log(target.dataset.index)
	}


	return (
		<>	
			<div className='project-card'
				 id={content!.id}
				 onMouseEnter={() => cursorChangeHandler('hovered')}
				 onMouseLeave={() => cursorChangeHandler('')}
				 onClick={ (e)=>{goProjectA(e.currentTarget as HTMLElement)} } //🔥注意，需要通过 e.currentTarget 才能拿到 data-index 的dataset 数据！！并且不能为驼峰命名！！
				 ref={projectRef}
				 data-index={index}
			>
				{/* 非空断言！ */}
				<div className="project-card-top">
					<div className='project-card-title'>{content!.title}</div>
					<div className="right-action">
						<img src={GoInToIcon} alt="" className="project-card-icon"/>
						<div className="project-card-time">2022</div>
					</div>
				</div>
				<img src={content!.cover} alt="" className="project-image"/>
				{/* <p>{content!.content}</p> */}
				{/* <p>{content!.description}</p> */}
			</div>
		</>
	)
}

export default ProjectCard