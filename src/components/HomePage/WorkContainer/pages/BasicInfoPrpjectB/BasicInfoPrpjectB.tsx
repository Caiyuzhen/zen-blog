import React from 'react'
import gradualArrow from '../../../../../assets/svg/icon-gradualArrowBlue.svg'
import './BasicInfoPrpjectB.less'
import IncubateIcon from '../../../../../assets/svg/icon-Incubate.svg'
import lookForInnovationIcon from '../../../../../assets/svg/icon-lookForInnovation.svg'
import AuroraGradientBG from '../../../../../assets/svg/bg-AuroraGradient.svg'

export const BasicInfoPrpjectB = () => {

	return (
		<>
			<div className="basic-projectB-info">
				<p className="main-projectB-bigTitle">Project B</p>

				<div className="basic-projectB-container">
					<div className="basic-projectB-left">
						<p>basic info describe basic info</p>
						<p>basic info describe basic info describe</p>
					</div>

					<img src={gradualArrow} alt="" className='gradualArrow-left'/>

					{/* 中间的描述信息 */}
					<div className="basic-projectB-center">

						{/* 左虚线 */}
						<div className="trianArrowRight-left">
							<p>xxx xxxxxx xx xxx xxxxxxx</p>
							<span className="dotted-line-left"></span>
							<span className="trianArrow-left-01"></span>
						</div>

						{/* 右虚线 */}
						<div className="trianArrowRight-right">
							<p>xxx xxxxxx xx xxx xxxxxxx</p>
							<span className="dotted-line-right"></span>
							<span className="trianArrow-left-02"></span>
						</div>

						<div className="basic-lookForInnovation">
							<img src={lookForInnovationIcon} alt="" className="lookForInnovationIcon"/>
							<p>Explore forward-looking innovative design</p>
							<div className="basic-lookForInnovation-bg"></div>
						</div>

						<div className="basic-Incubate">
							<img src={IncubateIcon} alt="" className="IncubateIcon"/>
							<p>Incubate innovative product capabilities</p>
							<div className="basic-Incubate-bg"></div>
						</div>
					</div>

					<img src={gradualArrow} alt="" className='gradualArrow-right'/>

					<div className="basic-projectB-right">
						<p>basic info describe basic info</p>
						<p>basic info describe basic info describe</p>
					</div>
				</div>

				{/* 极光背景 */}
				<img src={AuroraGradientBG} alt="" className="AuroraGradientBG"/>
			</div>
		</>
	)
}

export default BasicInfoPrpjectB

