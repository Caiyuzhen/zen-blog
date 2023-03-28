import React from 'react'
import UserJourneyImg from '../../../../../../assets/img/migu-UserJourney.png'
import './userJourney.less'

export const UserJourney = () => {
	return (
		<div className="userJourney-container">
			<p>User journey</p>
			<img src={UserJourneyImg} alt=""/>
		</div>
	)	
}
