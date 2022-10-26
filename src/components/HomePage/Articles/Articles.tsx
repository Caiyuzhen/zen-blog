import React from 'react'
import './Articles.less'
import { ArticleCard } from './ArticleCard/ArticleCard'
import rightGridImg from '../../../assets/img/rightGrid.png'
import doubleCircle from '../../../assets/svg/Icon-doubleCircle.svg'
import quota from '../../../assets/svg/Icon-quota.svg'


const Articles = () => {
  return (
	<div className="article-main-container">

		{/* 分割线 */}
		<div className="article-top-trim">
			<img src={doubleCircle} alt="" className="doubleCircle"/>
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

		{/* 分割线 */}
		<div className="article-bottom-trim">
			<span></span>
			<img src={quota} alt="" className="quota"/>
		</div>
		
		<div className="article-bottom-container">
			<div className="article-bottom-rightText">Inspiration</div>
			<div className="article-bottom-leftContainer">
				<div className="nav">
					<div className="nav-item-design">Design</div>
					<div className="nav-item-product">Product</div>
					<div className="nav-item-business">Business</div>
					<div className="nav-item-sthFun">Sth Fun</div>
				</div>
				<div className="content-container">
					<div className="item-con">Sometimes, advice on how not to do turns out to be the most practical, because simple guides and recommendations always leave room for wrong decisions. </div>
					<div className="item-con">We are all aware of the fact that the internet has changed our lives in a number of ways. </div>
					<div className="item-con">Meet the 10 most upvoted apps this month — via ProductHunt. Sometimes all we need is a helping hand to raise us to greatness.</div>
					<div className="item-con">Previously, I was a fan of apps like Notion, OverNote, Coda. They really made life easier for me and my team. </div>
					<div className="item-con">Previously, I was a fan of apps like Notion, OverNote, Coda. They really made life easier for me and my team. </div>
				</div>
			</div>
		</div>
		<img src={rightGridImg} alt="" className="rightGridImg"/>
	</div>
  )
}

export default Articles
