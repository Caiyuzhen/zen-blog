import axios from 'axios'
import React, { FC, useContext, useEffect, useState } from 'react'
import ProjectThree from '../../../../assets/img/work-3.jpg'
import Zeno from '../../../../assets/img/Zen.png'
import { IArticleList } from '../../../../types/global'
import './ArticleCard.less'   

// IArticleList 为全局类型, 包含 id, title, des, date, hashTag
export const ArticleCard:FC<IArticleList> = (props: IArticleList) => {

	const {id,title,des,date,hashTag,img} = props//解构赋值
	const [isfullPage, setFullPage] = useState(false) // 根据卡片点击后获得的 id 来判断要赋予对应卡片的 article-card-fullPage 类名, 否则就用默认的 article-card  的类名


	// 获取 md 文件内的 text
	const [mdText, setMdText] = useState<string>("")

	useEffect(()=>{
		async function getMdText(mdPath:string) {
			const res = await axios.get(mdPath).then(res => {	// 发送 axios 获得 md 内的字符串, 并把所有数据保存到一个变量中
				setMdText(res.data)
				console.log('请求 1 次')
				// console.log(res.data)
			})
		}
		getMdText(des)
		console.log(mdText)
	},[])
	
	return (
		<>
			<div className={isfullPage ? "article-card-fullPage" : "article-card"}
				id={id}
				onClick={ () => {setFullPage(!isfullPage)}}
				>
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
		</>
	)
}
