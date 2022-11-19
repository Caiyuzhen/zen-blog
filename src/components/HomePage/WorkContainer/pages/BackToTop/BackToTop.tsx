import React from 'react'
import backToTop from '../../../../../assets/svg/icon-backToTop.svg'
import './BackToTop.less'


export const BackToTop = () => {

	//滚动回页面顶部的方法
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<>
			<div className="backToTop-container"
				 onClick={ scrollToTop }
			>
				<p>Back to top</p>
				<img src={backToTop} alt="" className="backToTop"/>
			</div>
		</>
	)
}


export default BackToTop