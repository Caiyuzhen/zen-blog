import React from 'react'
import './PjbStategy.less'
import dbBottomArrowIcon from '../../../../../assets/svg/icon-dbBottomArrow.svg'


export const PjbStategy = () => {
	return (
		<>
			<div className="pjb-UXStategy-main-container">
				<div className="pjb-UXStategy-insideContainer">
					<div className="pjb-UXStategy-leftObjectives">
						<div className="pjb-UXStategy-leftObjectives-title">
							🎯 Design Objectives
						</div>
						<div className="pjb-UXStategy-leftObjectives-items">
							<p>Xxxx xxxxxx xxx xx xxxxxxx xxxxxx xxxxx xx xxxx xxxx xxx</p>
							<p>Xxxxx x xx xxxx xxxx xx xxxxxxxxxx xx xxxxxx xxxxx xxxxxx xx xxxxx</p>
							<p>Xxxx xxxxxx xx xxxxxxxxxx xx xx xxxxxxx xxxxxx xx xxxxxxxx xxx</p>
						</div>
					</div>
					<div className="pjb-UXStategy-rightStategy">
						<div className="pjb-UXStategy-rightStategy-title">
							✏️ Experience Strategy
						</div>
						<div className="pjb-UXStategy-rightStategy-items">
							<p>Xxxx xxxxxx xxx xx xxxxxxx xxxxxx xxxxx xx xxxx xxxx xxxxxx xx xxxxx</p>
							<p>Xxxx xxxxxx xx xxxxxxxxxx xx xx xxxxxxx xxxxxx xx xxxxxxxx xxx</p>
							<p>Xxxxx x xx xxxx xxxx xx xxxxxxxxxx xx xxxxxx xxxxx xxxxxx xx xxxxx</p>
						</div>
					</div>
				</div>

				<img src={dbBottomArrowIcon} alt="" className="dbBottomArrowIcon"/>
			</div>
		</>
	)
}
