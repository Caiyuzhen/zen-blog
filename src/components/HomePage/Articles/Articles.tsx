import React from 'react'
import ProjectThree from '../../../assets/img/work-3.jpg'
import Zeno from '../../../assets/img/Zen.png'
import './Articles.less'


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
				<img src={ProjectThree} alt="" />
				<div className="right-container">
					<div className="title">Product Archaeology in UX:What is memory?</div>
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
