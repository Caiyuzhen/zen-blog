import React, { FC, useContext, useState } from 'react'
import ProjectThree from '../../../../assets/img/work-3.jpg'
import Zeno from '../../../../assets/img/Zen.png'
import { IArticleList } from '../../../../types/global'
import './ArticleCard.less'   

// IArticleList 为全局类型, 包含 id, title, des, date, hashTag
export const ArticleCard:FC<IArticleList> = (props: IArticleList) => {

	const {id,title,des,date,hashTag,img} = props//解构赋值
	const [isfullPage, setFullPage] = useState(false) // 根据卡片点击后获得的 id 来判断要赋予对应卡片的 article-card-fullPage 类名, 否则就用默认的 article-card  的类名

	
	return (
	<>
		<div className=
			{isfullPage ? "article-card-fullPage" : "article-card"}
			id={id}
			onClick={ () => {setFullPage(!isfullPage)}}
			>
			<img src={img} alt="" />
			<div className="right-container">
				<p className="title">{title}</p>
				<p>
					{des}
				</p>
				
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
