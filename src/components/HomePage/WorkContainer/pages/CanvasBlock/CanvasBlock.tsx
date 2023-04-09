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

				<div className="canvasBlock-inside-container">

					{/* 左边的基本信息 */}
					<div className="canvasBlock-baseInfo-container">
						{/* 文字 */}
						<div className="canvasBlock-baseInfo">
							<div className="canvasBlock-baseInfo-title">Docs Interchange to Canvas</div>
							<p className="canvasBlock-baseInfo-des">The document is a top-down y-axis editing stream, while the whiteboard is a dual-position x- and y-axis editing stream that maximizes the user's creativity.</p>
						</div>

					</div>

					{/* 右边的 page + 协同头像*/}
					<div className="canvas-page-group">
						{/* 协同头像 */}
						<img src={CursorRed} alt="" className="cursor-red"/>
						<img src={CursorYellow} alt="" className="cursor-yellow"/>
						<img src={CursorBlue} alt="" className="cursor-blue"/>
						{/* 页面 */}
						<img src={CanvasPage} alt="" className="canvas-page"/>
					</div>
					
	
				</div>
			</div>
		</>
	)
}


export default CanvasBlock