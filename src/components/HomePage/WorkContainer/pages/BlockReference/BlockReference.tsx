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
						<div className="blockReference-topLeftInfo-title">Block Referenced</div>
						<p className="blockReference-topLeftInfo-des">Analogous to designing components, the repeated creation of wheels can be reduced by the invocation of components. The same is true for real-time references, where past content can be referenced at any time during the creation process, and updates on both sides are synchronized.</p>
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
						<div className="blockReference-bottomRightInfo-title">Bidirectional link</div>
						<p className="blockReference-bottomRightInfo-des">The content displayed by the two-way links is also part of the current page content, which helps the user to review what pages are linked to the current page and consolidate the creator's knowledge structure, and also helps the creator to discover more content through Unlinked references to pages that are not linked to.</p>
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
