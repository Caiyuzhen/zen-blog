import React from 'react'
import './ExpandPlayground.less'
import playgroundTemplate from '../../../../../assets/img/page-playgroundTemplate.jpg'
import playgroundEffect from '../../../../../assets/img/page-playgroundEffect.jpg'
import playgroundEditor from '../../../../../assets/img/page-playgroundEditor.jpg'

export const ExpandPlayground = () => {
	return (
		<>
			<div className="expandPlayground-main-container">
				<div className="expandPlayground-main-leftContainer">
					<img src={playgroundTemplate} alt="" />
					<img src={playgroundEffect} alt="" />
					<img src={playgroundEditor} alt="" />
				</div>
				<div className="expandPlayground-main-rightContainer">
					<div className="expandPlayground-right-baseinfo">
						<div className="expandPlayground-right-baseinfo-title">Expand XXX XXX </div>
						<p className="expandPlayground-right-baseinfo-des">description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock</p>
					</div>
					<div className="expandPlayground-right-Graphic">
						<span>Developers Make Block</span>
						<div></div>
						<span>XXXXXX</span>
						<div></div>
						<span>User Use Block</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default ExpandPlayground