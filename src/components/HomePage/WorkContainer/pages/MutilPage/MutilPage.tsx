import React from 'react'
import './MutilPage.less'
import frameWorkPage from '../../../../../assets/img/page-framework.png'
import slidesOne from '../../../../../assets/img/page-slidesOne.png'
import slidesTwo from '../../../../../assets/img/page-slidesTwo.png'
import slidesThree from '../../../../../assets/img/page-slidesThree.png'
import slidesFour from '../../../../../assets/img/page-slidesFour.png'
import slidesFive from '../../../../../assets/img/page-slidesFive.png'
import slidesSix from '../../../../../assets/img/page-slidesSix.png'




export const MutilPage = () => {
	return (
		<>
			<div className="mutilPage-main-container">
				<div className="mutilPage-main-topInfo">
					<div className="mutilPage-main-topInfo-title">XXX XXX mode</div>
					<p className="mutilPage-main-topInfo-des">XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX something that XXXXX</p>
				</div>
				<div className="mutilPage-main-bottomPage">
					<img src={slidesOne} alt="" className="slidesOne"/>
					<img src={slidesTwo} alt="" className="slidesTwo"/>
					<img src={slidesThree} alt="" className="slidesThree"/>
					<img src={slidesFour} alt="" className="slidesFour"/>
					<img src={slidesFive} alt="" className="slidesFive"/>
					<img src={slidesSix} alt="" className="slidesSix"/>
					<img src={frameWorkPage} alt="" className="frameWorkPage"/>
				</div>
			</div>
		</>
	)
}

export default MutilPage
