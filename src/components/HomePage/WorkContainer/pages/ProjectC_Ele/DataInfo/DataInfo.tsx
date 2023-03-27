import React from 'react'
import './dataInfo.less'
import userData from '../../../../../../assets/img/miguUser-chart.png'

export const DataInfo = () => {
	return (
		<div className="dataInfo-container">
			{/* 左侧数据 */}
			<div className="datainfo-container-left">
				<p className="datainfo-container-left-list">
					<span>First-tier City</span> <span>33%</span>
				</p>
				<p className="datainfo-container-left-list">
					<span>New first-tier City</span> <span>28%</span>
				</p>
				<p className="datainfo-container-left-list">
					<span>Second-tier city</span> <span>21%</span>
				</p>
				<p className="datainfo-container-left-list">
					<span>Third-tier City</span> <span>18%</span>
				</p>
			</div>

			{/* 右侧数据 */}
			<div className="datainfo-container-right">
				<div className="datainfo-container-right-listContainer">
					<p className="datainfo-container-right-list">
						<span className="square-one"></span> <span>Under 20 years old</span>
					</p>
					<p className="datainfo-container-right-list">
						<span className="square-two"></span> <span>21~30 years old</span>
					</p>
					<p className="datainfo-container-right-list">
						<span className="square-three"></span> <span>31 to 35 years old</span>
					</p>
					<p className="datainfo-container-right-list">
						<span className="square-four"></span> <span>36~40 years old</span>
					</p>
					<p className="datainfo-container-right-list">
						<span className="square-five"></span> <span>41 years old</span>
					</p>
				</div>

				<img src={userData} alt="" className="datainfo-container-right-dataChart"/>
			</div>
		</div>
	)	
}

