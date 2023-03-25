import React, { FC, useEffect, useState } from 'react'
import './InspiraCard.less'
import Zeno from '../../../../assets/img/Zen.png'
import { IinspireCardContent } from '../../../../types/global'
import backIcon  from '../../../../assets/svg/icon-arrowOnly.svg'

// 接口继承
interface IProps extends IinspireCardContent {
	
}


export const InspiraCard: FC<IProps> = ({
	id,
	content, 
	time, 
	author,
	hashTag})  => {

	const [isfullPage, setFullPage] = useState(false) 
	const [cardTop, setCardTop] = useState(0) //记录卡片相对页面顶部的距离, 用于返回时滚动回去

	return (
		<>
			<div 
				className={isfullPage ? "inspired-card-fullPage" : "card-container"}
				id={id}
				onClick={
					(e)=>{if(!isfullPage){
							setFullPage(!isfullPage)
							window.scrollTo(0, 0) // 滚动到页面顶部
							const cardTop = e.currentTarget.offsetTop // 记录当前 currentTarget 点击的这个卡片距离窗口顶部的距离, 真正点击的 this 
							setCardTop(cardTop ?? 0) //🔥空值合并运算符（??） 提供一个默认值, 如果为 undefined 则取 ?? 后面的值
						}
					} //点击进入详情, 进入详情后只能点击返回按钮
				}
			>
				{isfullPage && (//详情页才展示返回按钮
					<div className="article-backIcon-wrapper"
						onClick={()=> {
							setFullPage(!isfullPage);
							// 页面向下滚动回刚刚的位置
							console.log(cardTop)
							window.scrollTo(0, cardTop) // document.getElementsByClassName('.card-container')?.offsetTop) //可选链运算符（?.）, 如果对象返回 null 则不获取 offsetTop
						}}
					>
						<div className="article-back-circle">
							<img className="article-back-line" src={backIcon}></img>
						</div>
					</div>
				)}

				<p> {content} </p>
				<div className="metaInfo">
					<div className="inline-author">
						<img src={Zeno} alt=""/>
						<div className="author">{author}</div>
					</div>
					<span className="time"> {time} </span>
					<span className="hashTag"> {hashTag} </span>
				</div>
			</div>
		</>
	)
}
