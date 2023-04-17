import React from 'react'
import './PjbData.less'
import arrUp from '../../../../../assets/svg/icon-arrUp.svg'
import arrGreenDown from '../../../../../assets/svg/icon-arrGreenDown.svg'
import geometricBg from '../../../../../assets/svg/bg-geometricBg.svg'


export const PjbData = () => {
	return (
		<>
			<div className="PjbData-main-container">
				{/* 顶部数据 */}
				<div className="PjbData-top-dataContainer">
					{/* 满意度 */}
					<div className="PjbData-user-statisfaction-container">
						<img src={arrUp} alt="" className="arrUp"/>
						<div className="PjbData-user-statisfaction-rightContainer">
							<p>xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx x</p>
							<p>9.9</p>
						</div>
					</div>
					{/* 信噪问题 */}
					<div className="PjbData-noiserRatio-container">
						<img src={arrGreenDown} alt="" className="arrGreenDown"/>
						<div className="PjbData-noiserRatio-rightContainer">
							<p>xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx x</p>
							<p>99%</p>
						</div>
					</div>
				</div>
				{/* 底部数据 */}
				<div className="PjbData-bottom-dataContainer">
					{/* NPS */}
					<div className="PjbData-nps-container">
						<img src={arrUp} alt="" className="arrUp"/>
						<div className="PjbData-nps-rightContainer">
							<p>xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx x</p>
							<p>99%</p>
						</div>
					</div>
					{/* 可用性测试 */}
					<div className="PjbData-usability-container">
						<img src={arrUp} alt="" className="arrUp"/>
						<div className="PjbData-usability-rightContainer">
							<p>xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx x</p>
							<p>9.9</p>
						</div>
					</div>
				</div>
				{/* 底部图形 */}
				<img src={geometricBg} alt="" className="geometricBg"/>
			</div>
		</>
)	
}

export default PjbData