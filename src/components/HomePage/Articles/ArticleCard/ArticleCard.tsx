import React, { FC, useContext } from 'react'
import ProjectThree from '../../../../assets/img/work-3.jpg'
import Zeno from '../../../../assets/img/Zen.png'
import { IArticleList } from '../../../../types/global'
import './ArticleCard.less'   


// IArticleList 为全局类型, 包含 id, title, des, date, hashTag

export const ArticleCard:FC<IArticleList> = (props: IArticleList) => {

	
	return (
	<>
		<div className="article-card">
			<img src={ProjectThree} alt="" />
			<div className="right-container">
				<p className="title">Product Archaeology in UX:What is memory?</p>
				<p>Desinging and defining digital is inherently complex and iterative design exerience,and tweaks constantly change and alter the user experience.</p>
				
				<div className="metaInfo">
					<div className="inline-author">
						<img src={Zeno} alt=""/>
						<div className="author">Zeno</div>
					</div>

					<div className="time">29 Jun 2022</div>
					
					<div className="hashTag">Design thinking</div>
				</div>
			</div>
		</div>
	</>
	)
}
