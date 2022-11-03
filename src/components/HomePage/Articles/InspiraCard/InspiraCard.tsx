import React, { FC, useEffect, useState } from 'react'
import './InspiraCard.less'
import Zeno from '../../../../assets/img/Zen.png'
import { IinspireCardContent } from '../../../../types/global'


// 接口继承
interface IProps extends IinspireCardContent {
	
}


export const InspiraCard: FC<IProps> = ({
	id,
	content, 
	time, 
	author,
	hashTag})  => {

	return (
		<>
			<div className="card-container" id={id}>
				<p> {content} </p>
				<div className="metaInfo">
					<div className="inline-author">
						<img src={Zeno} alt=""/>
						<div className="author">{author}</div>
					</div>
					<span className="time"> {time} </span>
					<span className="hashTag"> {hashTag} </span>
				</div>
			</div>
		</>
	)
}
