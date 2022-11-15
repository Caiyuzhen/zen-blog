import React from 'react'
import tiBg from '../../../../../assets/svg/bg-tiltBg.svg'
import './BlockReference.less'
import ReferpageOne from '../../../../../assets/img/page-refer-01.png'
import ReferpageTwo from '../../../../../assets/img/page-refer-02.png'

export const BlockReference = () => {
	return (
		<>
			<div className="blockReference-mainContainer">
				{/* page */}
				<div className="blockReference-topCintainer">
					<div className="blockReference-topCintainer-leftInfoContainer">
						<div className="blockReference-topLeftInfo-title">XXXX XXXXXXXX</div>
						<p className="blockReference-topLeftInfo-des">XXXXXXXX XXXXXXXX XXXXXXXX XXXXXXXX XXXXXXXXXXXXX XXXXXXXX XXXXXXXXXXX</p>
					</div>
					<div className="blockReference-topCintainer-rightPageContainner">
						<img src={ReferpageOne} alt="" className="ReferpageOne"/>
						<img src={ReferpageTwo} alt="" className="ReferpageTwo"/>
					</div>
				</div>
				<div className="blockReference-bottomCintainer">

				</div>

				{/* 背景 */}
				<img src={tiBg} alt="" className="tiBg"/>
			</div>
		</>
	)
}

export default BlockReference
