import React from 'react'
import './UserTypeInfo.less'
import gradualArrow from '../../../../../assets/svg/icon-gradualArrow.svg'
import purple from '../../../../../assets/svg/link-purple.svg'
import blue from '../../../../../assets/svg/link-blue.svg'
import orange from '../../../../../assets/svg/link-orange.svg'
import green from '../../../../../assets/svg/link-green.svg'


export const UserTypeInfo = () => {
	return (
		<>
			<div className="main-container">
				<div className="type-container">
					<p className="title-text">Type</p>
					<div className="type-content">
						<p>Opinion leader</p>
						<p>Pioneer <br/> Efficiency Master</p>
						<p>Ordinary <br/> Note user</p>
						<p>Onlooker user</p>
						
					</div>
				</div>
				<div className="link-group">
					<img src={purple} alt="" className='link-purple'/>
					<img src={blue} alt="" className='link-blue'/>
					<img src={orange} alt="" className='link-orange'/>
					<img src={green} alt="" className='link-green'/>
				</div>
				<div className="threeW">
					<div className="who-container">
						<p className="title-text">Who</p>
						<div className="who-content">
							<p>Developer</p>
							<p>Media writer</p>
							<p>Project manager</p>
							<p>Students & Teachers & Personal</p>
							<p>Designer</p>
							<p style={{color: '#22233D'}}>General content consumers</p>
							<p style={{color: '#22233D'}}>Freelancers</p>
						</div>
					</div>

					<img src={gradualArrow} alt="" />

					<div className="what-container">
						<p className="title-text">What</p>
						<div className="what-content">
							<p>Share technical knowledge</p>
							<p>Run fan base</p>
							<p>Archiving knowledge, scheduling</p>
							<p>Making lectures, taking study notes</p>
							<p>Organize design inspiration</p>
							<p style={{color: '#22233D'}}>Consume fresh content</p>
							<p style={{color: '#22233D'}}>Training courses, personal web etc</p>
						</div>
					</div>

					<img src={gradualArrow} alt="" />
					
					<div className="why-container">
						<p className="title-text">Why</p>
						<div className="why-content">
							<p>Poor scalability</p>
							<p>Trouble management by folder</p>
							<p>Moving information around</p>
							<p>Easy to forget notes</p>
							<p>General presentation of info</p>
							<p style={{color: '#22233D'}}>Content is very fragmented</p>
							<p style={{color: '#22233D'}}>hard to build website by personal</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default UserTypeInfo
