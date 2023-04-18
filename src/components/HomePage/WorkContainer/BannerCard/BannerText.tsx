import React, { FC } from 'react'
import './BannerCard.less'

interface IProps {
	id: number,
	title: string,
	subTitle: string
}

export const BannerText:FC<IProps> = (props: IProps) => {

	const {id, title, subTitle} = props //解构出数据

	return (
		<div className="banner-text-container" id={id.toString()}>
			<p className="content-title">{title}</p>
			<p className="content-subtitle">{subTitle}</p>
		</div>

	)
}
