import React from 'react'
import backToTopDark from '../../../../../assets/svg/icon-backToTopDark.svg'
import './BackToTopDark.less'
import allUI from '../../../../../assets/img/migu-allUI.png'


export const BackToTopDark = () => {

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
				<p>Back to top</p>
				<img src={backToTopDark} alt="" className="backToTopDark"/>

				<img src={allUI} alt="" className="allUI"/>
			</div>
		</>
	)
}


export default BackToTopDark