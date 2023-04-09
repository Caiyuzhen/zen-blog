import React from 'react'
import './ExpandPlayground.less'
import playgroundTemplate from '../../../../../assets/img/page-playgroundTemplate.jpg'
import playgroundEffect from '../../../../../assets/img/page-playgroundEffect.jpg'
import playgroundEditor from '../../../../../assets/img/page-playgroundEditor.jpg'
import DbSquare from '../../../../../assets/svg/graphic-doubleSquare.svg'


export const ExpandPlayground = () => {
	return (
		<>
			<div className="expandPlayground-main-container">
				<img src={DbSquare} alt="" className="DbSquare"/>
				<div className="expandPlayground-inside-container">
					{/* 左边的 page */}
					<div className="expandPlayground-main-leftContainer">
						<img src={playgroundTemplate} alt="" />
						<img src={playgroundEffect} alt="" />
						<img src={playgroundEditor} alt="" />
					</div>

					{/* 右边的图形+文字 */}
					<div className="expandPlayground-main-rightContainer">
						<div className="expandPlayground-right-baseinfo">
							<div className="expandPlayground-right-baseinfo-title"> Expand block by Playground </div>
							<p className="expandPlayground-right-baseinfo-des"> We define "block" as the basic authoring unit. A module is like a Lego block, where the user plays with it like a Lego block, and then simply drags and drops it to create an elaborate document, just like playing with Lego blocks. </p>
						</div>
						<div className="expandPlayground-right-Graphic">
							<span className="expandPlayground-right-Graphic-leftText">Developers Make Block</span>
							
							{/* 箭头+文字 */}
							<div className="tranArrAndText-all-container-01">
								<div className="tranArrAndText-container-01">
									<p> Developers Make Block </p>
									<div className="trianArrowRight-01">
										<span className="dotted-line"></span>
										<span className="trianArrow-01"></span>
									</div>
								</div>
								<div className="tranArrAndText-container-02">
									<div className="trianArrowRight-02">
										<span className="trianArrow-02"></span>
										<span className="dotted-line"></span>
									</div>
									<p> User Use Block </p>
								</div>
							</div>

							<span className="expandPlayground-right-Graphic-centerText"> Playground <br/> Center </span>
							
								{/* 箭头+文字 */}
								<div className="tranArrAndText-all-container-01">
								<div className="tranArrAndText-container-01">
									<p>Platform value</p>
									<div className="trianArrowRight-01">
										<span className="dotted-line"></span>
										<span className="trianArrow-01"></span>
									</div>
								</div>
								<div className="tranArrAndText-container-02">
									<div className="trianArrowRight-02">
										<span className="trianArrow-02"></span>
										<span className="dotted-line"></span>
									</div>
									<p>Validate value</p>
								</div>
							</div>

							<span className="expandPlayground-right-Graphic-rightText">User Use Block</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ExpandPlayground