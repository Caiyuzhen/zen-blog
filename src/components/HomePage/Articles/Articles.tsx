import React from 'react'
import './Articles.less'
import { ArticleCard } from './ArticleCard/ArticleCard'
import rightGridImg from '../../../assets/img/rightGrid.png'
import doubleCircle from '../../../assets/svg/Icon-doubleCircle.svg'
import quota from '../../../assets/svg/Icon-quota.svg'
import { SideNav } from './SideNav/SideNav'
import { InspiraCard } from './InspiraCard/InspiraCard'
import Zeno from '../../../assets/img/Zen.png'



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
			
			<div className="article-inspired-container">
				
				<SideNav />

				<div className="content-container">
					<InspiraCard 
						content='Sometimes, advice on how not to do turns out to be the most practical, because simple guides and recommendations always leave room for wrong decisions.'
						avatar={Zeno}
						author='Zeno'
						time={'2 days ago'}//先写死
						hashTag={'#inspiration'}//先写死
					/>
					<InspiraCard 
						content='We are all aware of the fact that the internet has changed our lives in a number of ways.'
						avatar={Zeno}
						author='Zeno'
						time={'2 days ago'}//先写死
						hashTag={'#inspiration'}//先写死
					/>
					<InspiraCard 
						content='Meet the 10 most upvoted apps this month — via ProductHunt. Sometimes all we need is a helping hand to raise us to greatness.'
						avatar={Zeno}
						author='Zeno'
						time={'2 days ago'}//先写死
						hashTag={'#inspiration'}//先写死
					/>
				</div>
				
			</div>
		</div>
		<img src={rightGridImg} alt="" className="rightGridImg"/>
	</div>
  )
}

export default Articles
