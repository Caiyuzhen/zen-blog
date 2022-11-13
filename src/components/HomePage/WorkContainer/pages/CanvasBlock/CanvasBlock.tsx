import React from 'react'
import './CanvasBlock.less'
import CanvasPage from '../../../../../assets/img/page-canvasIpad.png'
import CursorRed from '../../../../../assets/img/cursor-01.png'
import CursorYellow from '../../../../../assets/img/cursor-02.png'
import CursorBlue from '../../../../../assets/img/cursor-03.png'



export const CanvasBlock = () => {
	return (
		<>
			<div className="canvasBlock-main-container">
				{/* 协同头像 */}
				<img src={CursorRed} alt="" className="cursor-red"/>
				<img src={CursorYellow} alt="" className="cursor-yellow"/>
				<img src={CursorBlue} alt="" className="cursor-blue"/>
				

				<div className="canvasBlock-inside-container">

					{/* 左边的基本信息 */}
					<div className="canvasBlock-baseInfo-container">
						{/* 文字 */}
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
					</div>

					{/* 右边的 page */}
					<img src={CanvasPage} alt="" className="canvas-page"/>
	
				</div>
			</div>
		</>
	)
}


export default CanvasBlock