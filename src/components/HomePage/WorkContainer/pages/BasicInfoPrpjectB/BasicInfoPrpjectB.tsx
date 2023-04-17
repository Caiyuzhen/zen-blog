import React from 'react'
import gradualArrow from '../../../../../assets/svg/icon-gradualArrowBlue.svg'
import './BasicInfoPrpjectB.less'
import UserObstructionIcon  from '../../../../../assets/svg/icon-userObstructionIcon.svg'
import lookForInnovationIcon from '../../../../../assets/svg/icon-lookForInnovation.svg'
import linearBg from '../../../../../assets/svg/bg-linearBg.svg'
import colorFulLinear from '../../../../../assets/svg/bg-colorFulLinear.svg'

export const BasicInfoPrpjectB = () => {
	return (
		<>
			<div className="basic-projectB-info">
				<p className="main-projectB-bigTitle">Design Innovation</p>

				<div className="basic-projectB-container">
					<div className="basic-projectB-left">
						<p>Based on the obstruction points that affect users' perceptions, we integrate innovative ideas on this basis to systematically solve the cardinal points</p>
					</div>

					<img src={gradualArrow} alt="" className='gradualArrow-left'/>

					{/* 中间的描述信息 */}
					<div className="basic-projectB-center">

						{/* 向左虚线 */}
						<div className="trianArrowRight-left">
							<p>Provide higher dimensional experience input</p>
							<div className="innovation-baseLine-top">
								<span className="dotted-line-left"></span>
								<span className="trianArrow-left-01"></span>
							</div>
						</div>

						{/* 向右虚线 */}
						<div className="trianArrowRight-right">
							<p>Solving real business problems</p>
							<div className="innovation-baseLine-bottom">
								<span className="dotted-line-right"></span>
								<span className="trianArrow-left-02"></span>
							</div>
						</div>

						<div className="basic-lookForInnovation">
							<img src={UserObstructionIcon} alt="" className="lookForInnovationIcon"/>
							<p>Solving user obstruction points</p>
							<div className="basic-lookForInnovation-bg"></div>
						</div>

						<div className="basic-Incubate">
							<img src={lookForInnovationIcon} alt="" className="IncubateIcon"/>
							<p>Explore differentiated capabilities</p>
							<div className="basic-Incubate-bg"></div>
						</div>
					</div>

					<img src={gradualArrow} alt="" className="gradualArrow-right"/>

					<div className="basic-projectB-right">
						<p>Explore cutting-edge innovation capabilities to lay out differentiated experience competitiveness for Lark's future direction, so that Lark can always be ahead of the competition</p>
					</div>
				</div>

				{/* 渐变背景 */}
				<img src={linearBg} alt="" className="linearBg"/>
				<img src={colorFulLinear} alt="" className="colorFulLinear"/>
			</div>
		</>
	)
}

export default BasicInfoPrpjectB

