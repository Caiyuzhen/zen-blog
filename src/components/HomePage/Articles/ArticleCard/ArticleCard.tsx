import axios from 'axios'
import React, { FC, useContext, useEffect, useState } from 'react'
import ProjectThree from '../../../../assets/img/work-3.jpg'
import Zeno from '../../../../assets/img/Zen.png'
import { IArticleList } from '../../../../types/global'
import './ArticleCard.less'  
import backIcon  from '../../../../assets/svg/icon-arrowOnly.svg'
import { articleClickContext } from '../Articles'


// IArticleList 为全局类型, 包含 id, title, des, date, hashTag
export const ArticleCard:FC<IArticleList> = (props: IArticleList) => {

	const {id,title,des,date,hashTag,img} = props//解构赋值
	const [isfullPage, setFullPage] = useState(false) // 根据卡片点击后获得的 id 来判断要赋予对应卡片的 article-card-fullPage 类名, 否则就用默认的 article-card 的类名
	const { articleCardClick, setArticleCardClick } = useContext(articleClickContext) // 使用 articleClickContext 上下文数据 👀 // 用来跨组件改变 底部 inspired-container 的 z-index 层级


	// 获取 md 文件内的 text
	const [mdText, setMdText] = useState<string>("")

	useEffect(()=>{
		async function getMdText(mdPath:string) {
			const res = await axios.get(mdPath).then(res => {	// 发送 axios 获得 md 内的字符串, 并把所有数据保存到一个变量中
				setMdText(res.data)
				// console.log('请求 1 次')
				// console.log(res.data)
			})
		}
		getMdText(des)
		// console.log(mdText)
	},[])
	
	return (
		<div className={isfullPage ? "article-card-fullPage" : "article-card"}
			id={id}
			onClick={() => {
				// 把 articleCardClick 改为 true, 用来改变 inspired-container 的 z-index 层级, 本质上是上一层组件把一个 hook 工具通过 context 的方式传过来了👀
				setArticleCardClick(true)
				window.scrollTo(0, 0) // 滚动到页面顶部
				if(!isfullPage) {setFullPage(!isfullPage)}} //点击卡片进入详情, 进入详情后只能点击返回按钮
			}>

			{isfullPage && (//详情页才展示返回按钮
				<div className="article-backIcon-wrapper"
					onClick={() => {
 						setArticleCardClick(false) //不知道为什么无效
						setFullPage(!isfullPage)
					}}
				>
					<div className="article-back-circle">
					<img className="article-back-line" src={backIcon}></img>
					</div>
				</div>
			)}



			<div className="article-wrapper">
				<img src={img} alt="" />
				<div className="right-container">
					<p className="title">{title}</p>
					<p>{mdText}</p>	

					<div className="metaInfo">
						<div className="inline-author">
							<img src={Zeno} alt=""/>
							<div className="author">Zeno</div>
						</div>

						<div className="time">{date}</div>
						
						<div className="hashTag">{hashTag}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
