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
					<div className="nestedLayout-mainLeft-title">XXX Title</div>
					<p className="nestedLayout-mainLeft-des">XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX</p>
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