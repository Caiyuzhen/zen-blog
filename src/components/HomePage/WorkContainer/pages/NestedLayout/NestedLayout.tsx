import React from 'react'
import './NestedLayout.less'
import nestedLayoutTop from '../../../../../assets/img/card-nestedLayout-top.png'
import nestedLayoutBottom from '../../../../../assets/img/card-nestedLayout-bottom.png'   
import nestedResultTop from '../../../../../assets/img/card-nestedResult-top.png'
import nestedResultBottomLeft from '../../../../../assets/img/card-nestedResult-bottomLeft.png'
import nestedResultBottomRight from '../../../../../assets/img/card-nestedResult-bottomRight.png'



export const NestedLayout = () => {
	return (
		<>
			<div className="nestedLayout-main-container">
				<div className="nestedLayout-mainLeft-container">
					<div className="nestedLayout-mainLeft-title">Nested Layout ability</div>
					<p className="nestedLayout-mainLeft-des">
						One of the main features of web-based content is the ability to change responsively according to the width of the web page, we make it possible to support self-nesting on the basis of the column layout capabilities, and integrate the configuration of the Flex layout for the column, the goal is to be able to maximize the ability to approach the layout of the web page, so that users can achieve almost web-like expression through the nesting capabilities of the container itself.
					</p>
				</div>
				<div className="nestedLayout-mainRight-container">
					<div className="nestedLayout-nestedLogic">
						<img src={nestedLayoutTop} alt="" className="nestedLogicTop"/>
						<img src={nestedLayoutBottom} alt="" className="nestedLogicBottom"/>
					</div>
					<div className="nestedLayout-actualResult">
						<img src={nestedResultTop} alt="" className="actualResultTop"/>
						<img src={nestedResultBottomLeft} alt="" className="actualResultBottomLeft"/>
						<img src={nestedResultBottomRight} alt="" className="actualResultBottomRight"/>
					</div>
				</div>
			</div>
		</>
	)
}


export default NestedLayout