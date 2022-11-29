import React from 'react'
import './UXFrameWork.less'
import UXFrameworkLeft_1 from '../../../../../assets/img/page-UXFramework-01.jpg' 
import UXFrameworkLeft_2 from '../../../../../assets/img/page-UXFramework-02.jpg'

export const UXFrameWork = () => {
	return (
		<>
			<div className="UXFramework-main-container">
				{/* 左方案 */}
				<div className="UXFramework-left-container">
					<div className="UXFramework-left-container-topInfoContainer">

					</div>
					<img src={UXFrameworkLeft_1} alt="" className="UXFrameworkLeft_1"/>
				</div>

				{/* 右方案 */}
				<div className="UXFramework-right-container">
					<div className="UXFramework-right-container-topInfoContainer">

					</div>
					<img src={UXFrameworkLeft_2} alt="" className="UXFrameworkLeft_2"/>
				</div>
			</div>
		</>
	)
}

export default UXFrameWork
