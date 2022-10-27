import React, { FC } from 'react'
import './InspiraCard.less'


interface Iprops {
	content: string,
	avatar: string,
	author: string,
	time: string,
	hashTag: string,
}


export const InspiraCard: FC<Iprops> = ({
	content, 
	avatar, 
	author,
	time, 
	hashTag})  => {

	return (
		<>
			<div className="card-container">
				<p> {content} </p>
				<div className="metaInfo">
					<div className="inline-author">
						<img src={avatar} alt=""/>
						<div className="author">{author}</div>
					</div>
					<span className="time"> {time} </span>
					<span className="hashTag"> {hashTag} </span>
				</div>
			</div>
		</>
	)
}
