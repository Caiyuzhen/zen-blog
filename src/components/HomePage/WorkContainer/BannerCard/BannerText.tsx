import React, { FC } from 'react'
import './BannerCard.less'

interface IProps {
	id: string,
	title: string,
	subTitle: string
}

export const BannerText:FC<IProps> = (props: IProps) => {

	const {id, title, subTitle} = props //解构出数据

	return (
		<div className="banner-text-container" id={id}>
			<p className="content-title"  style={{lineHeight: 1.3}}>{title}</p>
			<p className="content-subtitle" style={{marginTop: 12, fontSize: 17}}>{subTitle}</p>
		</div>

	)
}
