import React from 'react'
// import backToTopDark from '../../../../../assets/svg/icon-backToTopDark.svg'
import './BackToTopDark.less'



interface IBackToTopProps {
	content: string;
	fontColor?: string;
	borderColor: string;
	backToTopArrow: string;
	imgURL?: string; //因为 URL 需要可以传递对象, 所以需要是解构赋值的形式（底部图片）
}


export const BackToTopDark = ({content, fontColor = 'black', borderColor, backToTopArrow, imgURL} : IBackToTopProps) => {

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
				 style={{height: 'auto'}}
				>
				<p style={{
						color: `${fontColor}`,
					}}
				>{content}</p>
				
				{/* 内置写好的圆形样式 */}
				<div className="backToTop-circle-container"
					onClick={ scrollToTop }
					 style={{
						cursor: 'pointer',
						width: 48,
						height: 48,
						borderRadius: '50%',
						// border 颜色可以 ${} 自定义
						border: `2px solid ${borderColor}`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'absolute',
						zIndex: 5,
					 }}
				>
					
					<img src={backToTopArrow} 
						 alt="" className="backToTopArrow"
						 style={{
							width: 26,
							transition: 'all 0.3s ease-in-out',
							position: 'absolute',
							cursor: 'pointer',
						 }}
					/>
				</div>
				<img src={imgURL} alt="" className="allUI"/>
			</div>
		</>
	)
}


export default BackToTopDark