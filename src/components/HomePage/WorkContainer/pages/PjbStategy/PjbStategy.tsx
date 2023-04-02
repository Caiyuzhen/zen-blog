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
							😄 Personal
						</div>
						<div className="pjb-UXStategy-leftObjectives-items">
							<p>Incorporate a unique interactive experience</p>
							<p>Build a unique identity expression</p>
						</div>
					</div>
					<div className="pjb-UXStategy-rightStategy">
						<div className="pjb-UXStategy-rightStategy-title">
							🤲 Teams
						</div>
						<div className="pjb-UXStategy-rightStategy-items">
							<p>Enhance personalization and emotional expression</p>
							<p>Strengthen the atmosphere of the group</p>
						</div>
					</div>
				</div>

				<img src={dbBottomArrowIcon} alt="" className="dbBottomArrowIcon"/>
			</div>
		</>
	)
}
