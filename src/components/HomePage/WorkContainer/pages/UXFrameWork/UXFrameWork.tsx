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
						<p className="UXFramework-left-container-topInfoContainer-title">Personalized of product experience</p>
						{/* 4 项优劣 */}
						<div className="UXFramework-left-container-topDesContainer">
							<div className="UXFramework-Conversion">
								<p>Conversion cost:</p>
								&nbsp;
								<p>Low</p>
							</div>
							
							<div className="UXFramework-SignalToNoise">
								<p>Signal-to-noise ratio:</p>
								&nbsp;
								<p>Medium</p>
							</div>
							
							<div className="UXFramework-MigrationCosts">
								<p>Migration Costs:</p>
								&nbsp;
								<p>Low</p>
							</div>
							
							<div className="UXFramework-UXsatisfaction">
								<p>Experience satisfaction:</p>
								&nbsp;
								<p>7</p>
							</div>
						</div>
					</div>
					<img src={UXFrameworkLeft_1} alt="" className="UXFrameworkLeft_1"/>
				</div>

				{/* 右方案 */}
				<div className="UXFramework-right-container">
					<div className="UXFramework-right-container-topInfoContainer">
						<p className="UXFramework-right-container-topInfoContainer-title">Minimalist  of product experience</p>
						{/* 4 项优劣 */}
						<div className="UXFramework-right-container-topDesContainer">
							<div className="UXFramework-Conversion">
								<p>Conversion cost</p>
								&nbsp;
								<p>High</p>
							</div>
							
							<div className="UXFramework-SignalToNoise">
								<p>Signal-to-noise ratio</p>
								&nbsp;
								<p>Higher</p>
							</div>
							
							<div className="UXFramework-MigrationCosts">
								<p>Migration Costs</p>
								&nbsp;
								<p>Medium</p>
							</div>
							
							<div className="UXFramework-UXsatisfaction">
								<p>Experience satisfaction</p>
								&nbsp;
								<p>7</p>
							</div>
						</div>
					</div>
					<img src={UXFrameworkLeft_2} alt="" className="UXFrameworkLeft_2"/>
				</div>
			</div>
		</>
	)
}

export default UXFrameWork
