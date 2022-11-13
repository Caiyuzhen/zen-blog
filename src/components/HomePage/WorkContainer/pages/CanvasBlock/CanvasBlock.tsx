import React from 'react'
import './CanvasBlock.less'


export const CanvasBlock = () => {
	return (
		<>
			<div className="canvasBlock-main-container">
				{/* 协同头像 */}
				<img src="" alt="" />
				<img src="" alt="" />
				<img src="" alt="" />
				
				{/* 左边的文字 */}
				<div className="canvasBlock-inside-container">
					{/* 基本信息 */}
					<div className="canvasBlock-baseInfo">
						<div className="canvasBlock-baseInfo-title">XXX Canvas</div>
						<p className="canvasBlock-baseInfo-des">description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock</p>
					</div>

					{/* 流程图 */}
					<div className="canvasBlock-graphic-container">
						{/* 左圆 */}
						<span className="circleLeft">XXXXXX</span>

						{/* 箭头+文字 */}
						<div className="tranArrAndText-all-container-01">
								<div className="tranArrAndText-container-01">
									<p>XXXXXXXXXXXX</p>
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
									<p>XXXXXXXXXXXX</p>
								</div>
							</div>

						{/* 右圆 */}
						<span className="circleRight">XXXXXX</span>
					</div>
					{/* 右边的 page */}
					<img src="" alt="" className="canvas-page"/>
				</div>
			</div>
		</>
	)
}


export default CanvasBlock