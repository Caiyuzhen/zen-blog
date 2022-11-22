import React from 'react'
import tiBg from '../../../../../assets/svg/bg-tiltBg.svg'
import './BlockReference.less'
import ReferpageOne from '../../../../../assets/img/page-refer-01.jpg'
import ReferpageTwo from '../../../../../assets/img/page-refer-02.jpg'
import ReferpageThree from '../../../../../assets/img/page-refer-03.png'


export const BlockReference = () => {
	return (
		<>
			<div className="blockReference-mainContainer">
				{/* 第一组 pages */}
				<div className="blockReference-topContainer">
					<div className="blockReference-topContainer-leftInfoContainer">
						<div className="blockReference-topLeftInfo-title">XXXX XXXXXXXX</div>
						<p className="blockReference-topLeftInfo-des">XXX XX XXX XX XXX XXX XXX XXXXX XXX XXXXX XXXXX XX XXXXXX XX XXXXXX XXXXX XXXXXX</p>
					</div>
					<div className="blockReference-topContainer-rightPageContainer">
						<img src={ReferpageOne} alt="" className="ReferpageOne"/>
						<img src={ReferpageTwo} alt="" className="ReferpageTwo"/>
					</div>
				</div>

				{/* 第二组 pages */}
				<div className="blockReference-bottomContainer">
					<div className="blockReference-bottomContainer-leftPageContainer">
						<img src={ReferpageThree} alt="" className="ReferpageThree"/>
					</div>
					<div className="blockReference-topContainer-bottomRightInfo">
						<div className="blockReference-bottomRightInfo-title">XXXX XXXXX</div>
						<p className="blockReference-bottomRightInfo-des">XXX XX XXX XX XXX XXX XXX XXXXX XXX XXXXX XXXXX XX XXXXXX XX XXXXXX XXXXX XXXXXX</p>
						<div className="blockReference-bottomRightInfo-graphic">
							<div className="blockReference-bottomRightInfo-topGroup">
								<span className="blockReference-bottomRightInfo-circle">Recommended links</span>
								<span className="blockReference-spanA"></span>
								<span className="blockReference-spanB"></span>
								<span className="blockReference-spanC"></span>
								👀 Who wrote sth similar to me
							</div>
							<div className="blockReference-bottomRightInfo-bottomGroup">
								<span className="blockReference-bottomRightInfo-circle">Link by other content</span>
								<span className="blockReference-spanA"></span>
								<span className="blockReference-spanB"></span>
								<span className="blockReference-spanC"></span>
								😉 Who quoted me
							</div>
						</div>
					</div>

				</div>

				{/* 背景 */}
				<img src={tiBg} alt="" className="tiBg"/>
			</div>
		</>
	)
}

export default BlockReference
