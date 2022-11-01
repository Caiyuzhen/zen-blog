import React, { FC, useContext } from 'react'
import ProjectThree from '../../../../assets/img/work-3.jpg'
import Zeno from '../../../../assets/img/Zen.png'
import { IArticleList } from '../../../../types/global'
import './ArticleCard.less'   


// IArticleList 为全局类型, 包含 id, title, des, date, hashTag

export const ArticleCard:FC<IArticleList> = (props: IArticleList) => {

	const {id,title,des,date,hashTag,img} = props//解构赋值
	
	return (
	<>
		<div className="article-card" id={id}>
			<img src={img} alt="" />
			<div className="right-container">
				<p className="title">{title}</p>
				<p>{des}</p>
				
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
