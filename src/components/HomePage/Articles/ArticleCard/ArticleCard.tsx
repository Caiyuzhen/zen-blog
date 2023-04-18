import axios from 'axios'
import React, { FC, useContext, useEffect, useState } from 'react'
import ProjectThree from '../../../../assets/img/work-3.jpg'
import Zeno from '../../../../assets/img/Zen.png'
import { IArticleList } from '../../../../types/global'
import './ArticleCard.less'  
import backIcon from '../../../../assets/svg/icon-arrowOnly.svg'
import { articleClickContext } from '../Articles'
import articleOneTempDetail from '../../../../assets/content/articles/articleList/articleOne'
import styled from '@emotion/styled'
import { css } from '@emotion/react'


// IArticleList 为全局类型, 包含 id, title, des, date, hashTag
export const ArticleCard:FC<IArticleList> = (props: IArticleList) => {

	const {id,title,des,date,hashTag,img} = props//解构赋值
	const [isfullPage, setFullPage] = useState(false) // 根据卡片点击后获得的 id 来判断要赋予对应卡片的 article-card-fullPage 类名, 否则就用默认的 article-card 的类名
	const { articleCardClick, setArticleCardClick } = useContext(articleClickContext) // 使用 articleClickContext 上下文数据 👀 // 用来跨组件改变 底部 inspired-container 的 z-index 层级


	// // 获取 md 文件内的 text
	// const [mdText, setMdText] = useState<string>("")

	// useEffect(()=>{
	// 	async function getMdText(mdPath:string) {
	// 		const res = await axios.get(mdPath)
	// 		const regex = /^.*(I\.|II\.|III\.|IV\.|V\.|VI\.|VII\.|VIII\.|IX\.|X).*$/gm // 使用正则表达式来提取带数字的字符串
	// 		const matchesTitlesText = res.data.match(regex)
	// 		let replacedText = res.data

	// 		if (matchesTitlesText) {
	// 			matchesTitlesText.forEach((match: string) => {
	// 				// const headerStyles = { fontSize: "64px", fontWeight: "bold" } //给匹配到的元素设置样式, 类似 css module 的写法
	// 				const replaceHeaderText = `<div style=font-size:32px>${match}</div>`  // 如果有匹配到带数字的字符串，就将其加粗为 h3 样式
	// 				replacedText = replacedText.replace(match, replaceHeaderText);
	// 			})
	// 		}

	// 		setMdText(replacedText)
	// 	}

	// 	getMdText(des)
	// 	console.log(mdText)
	// },[])

	// 获取 详情页数据
	const [detailPage, setDetailPage] = useState<React.ReactNode>(null)

	useEffect(()=>{
		// 渲染 des 详情页
		console.log(des())
		setDetailPage(des())
		// console.log(des())
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
					<div className="title">
						{/* fullPage 时, 渲染多一条分割线 */}
						{isfullPage && 
							<span className="fullPage-line" 
							css={css`
								display: inline-block;
								width: 100%;
								height: 1px;
								background-color: #9984ac;
								margin-bottom: 40px;
		  
								@media (max-width: 520px) {
									display: none;
								}`}
							></span>}
							
					{title}</div>
					{/* 方法二:
						<pre>{mdText}</pre>
					 */}
					{/* 方法一: 增加 pre-wrap 的样式属性 */}
					{/* <p
						className='article-detail-info'
						style={{ whiteSpace: 'pre-wrap' }}
						// dangerouslySetInnerHTML={{ __html: mdText }}
					>
						 {mdText} 
					</p>	 */}

					{/* 🔥 渲染详情页 */}
					<div 
						className='detail-page'
						style={{
							// 高度根据是否是详情页来判断
							height: isfullPage ? "100%" : "68px",
							marginTop: 0
						}}>

						{/* 渲染 articleOneTemp 组件 */}
						{des()}
					</div>


					<div className="metaInfo">
						<div className="inline-author">
							<img src={Zeno} alt=""/>
							<div className="author">Zeno</div>
						</div>

						<div className="time">{date}</div>
						
						<div className="hashTag"># {hashTag}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
