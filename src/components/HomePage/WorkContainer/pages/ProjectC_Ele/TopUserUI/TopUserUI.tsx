import React from 'react'
import './TopUserUI'
import topUserUI from '../../../../../../assets/img/Migu-Top20.png'
import topHobbit from '../../../../../../assets/img/topHobbit.png'
import topStar from '../../../../../../assets/img/topStar.png'
import './TopUserUI.less'

export const TopUserUI = () => {
	return (
		<div className="topUserUI-container">
			<div className="topUserUI-wrapper">
				<div className="topUser-left-container">
					<img src={topHobbit} alt="" className="topUser-leftTop-ui"/>
					<div className="topUser-leftText-container">
						<p>Top Challenges</p>
						<p>Popular challenge themes, users can select the challenge themes they are interested in to participate in the activities.</p>
					</div>
				</div>

				{/* 中心 UI */}
				<img src={topUserUI} alt="" />

				<div className="topUser-right-container">
					<img src={topStar} alt="" className="topUser-rightBottom-ui"/>
					<div className="topUser-rightText-container">
						<p>Challenge Master List</p>
						<p>The top three users with the highest hotness in the popular challenge theme will win the crown, inspiring users to participate in the challenge with enthusiasm.</p>
					</div>
				</div>
			</div>
		</div>
	)
}
