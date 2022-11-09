import React from 'react'
import colorBorder from '../../assets/svg/icon-colorBorder.svg'
import './Border.less'


export const Border = () => {
  return (
	<>
		<img src={colorBorder} alt="" 
			 className="main-border"/>
	</>
  )
}

export default Border