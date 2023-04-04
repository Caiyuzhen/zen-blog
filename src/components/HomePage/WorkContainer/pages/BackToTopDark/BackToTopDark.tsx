import React from 'react'
import backToTopDark from '../../../../../assets/svg/icon-backToTopDark.svg'
import './BackToTopDark.less'



interface IBackToTopProps {
	content: string;
	imgURL?: string; //因为 URL 需要可以传递对象, 所以需要是解构赋值的形式
}


export const BackToTopDark = ({content, imgURL} : IBackToTopProps) => {

	//滚动回页面顶部的方法
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<>
			<div className="backToTop-container-dark"
				 onClick={ scrollToTop }
			>
				<p>{content}</p>
				<img src={backToTopDark} alt="" className="backToTopDark"/>

				<img src={imgURL} alt="" className="allUI"/>
			</div>
		</>
	)
}


export default BackToTopDark