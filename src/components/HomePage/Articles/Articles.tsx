import React from 'react'
import './Articles.less'
import { ArticleCard } from './ArticleCard/ArticleCard'

const Articles = () => {
  return (
	<div className="article-main-container">

		<div className="article-top-trim">
			<img src="" alt="" />
			<span></span>
		</div>

		<div className="article-top-container">
			<div className="article-top-leftText">Blogs</div>
			<div className="article-top-rightContainer">
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
			</div>
		</div>

		<div className="article-bottom-trim">
			<img src="" alt=""/>
			<span></span>
		</div>
		
		<div article-bottom-container>
			<div className="article-top-rightText">Inspiration</div>
			<div className="article-top-leftContainer"></div>
		</div>
	</div>
  )
}

export default Articles
