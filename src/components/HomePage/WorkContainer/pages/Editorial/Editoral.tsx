import React from 'react'
import './Editoral.less'
import gradualArrow from '../../../../../assets/svg/icon-gradualArrow.svg'
import pageBg from '../../../../../assets/svg/bg-pageBg.svg'
import HomePage from '../../../../../assets/img/page-home.jpg'
import HomePageleftCard from '../../../../../assets/img/bg-homePage-leftCard.jpg'
import HomePageRightCard from '../../../../../assets/img/bg-homePage-rightCard.jpg'
import Pointer from '../../../../../assets/img/3D-Pointer.png'


export const Editoral = () => {
	return (
		<>
			<div className="editoral-main-container">
				{/* 左边内容 */}
				<div className="editoral-left-container">
					<div className="editoral-text-container">
						<div className="editoral-title">Modular of create content</div>
						<p>We define "blocks" as basic creative units. Modules are like Lego building blocks. Users are like playing Lego building blocks. After a simple drag and drop, an exquisite document will be created naturally. Just like playing Lego building blocks, users can freely assemble their own content.</p>
					</div>

					<div className="editoral-graphic-container">
						<div className="editoral-graphic">Basic Block</div>
						{/* 箭头 */}
						<img src={gradualArrow} alt="" style={{transform: 'rotateY(180deg)'}}/>
						<div className="editoral-graphic">Block Modular</div>
						{/* 箭头 */}
						<img src={gradualArrow} alt="" />
						<div className="editoral-graphic">Extension Block</div>
					</div>
				</div>

				{/* 右边内容 */}
				<div className="editoral-right-container">
					<img src={Pointer} alt="" className="Pointer"/>
					<img src={HomePageRightCard} alt="" className="bg-homePage-rightCard"/>
					<img src={HomePageleftCard} alt="" className="bg-homePage-leftCard"/>
					<img src={HomePage} alt="" className="page-homePage"/>
					<img src={pageBg} alt="" className="pageBg-center"/>
					<img src={pageBg} alt="" className="pageBg-bottom"/>
				</div>
			</div>
		</>
  	)
}


export default Editoral