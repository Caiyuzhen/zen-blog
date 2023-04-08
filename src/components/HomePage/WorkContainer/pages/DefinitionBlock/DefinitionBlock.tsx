import React from 'react'
import './DefinitionBlock.less'
import Circle from '../../../../../assets/svg/icon-circle.svg'
import Format from '../../../../../assets/img/card-format.png'
import SandBox from '../../../../../assets/img/card-sandbox.png'
import Collcboration from '../../../../../assets/img/card-collcboration.png'
import Layout from '../../../../../assets/img/card-layout.png'
import Data from '../../../../../assets/img/card-data.png'
import Whiteboard from '../../../../../assets/img/card-whiteboard.png'
import Media from '../../../../../assets/img/card-media.png'



export const DefinitionBlock = () => {
	return (
		<>
			<div className="definitionBlock-main-container">
				<img src={Circle} alt="" className="definitionBlock-circle"/>
				<div className="definitionBlock-inside-container">
					{/* 顶部标题 */}
					<div className="definitionBlock-topContainer">
						<div className="DefinitionBlock-title">Definition of Modularity Block</div>
						<p>The Block is the smallest unit of creation, and all content is built and assembled from the Block.</p>
					</div>
					{/* 底部内容 */}
					<div className="definitionBlock-bottomContent">
						<div className="format-container">
							<img src={Format} alt="" className="Format"/>
						</div>
						<div className="sandBoxAndMedia-container">
							<img src={SandBox} alt="" className="SandBox"/>
							<img src={Media} alt="" className="Media"/>
						</div>
						<div className="collAndLayout-container">
							<img src={Collcboration} alt="" className="Collcboration"/>
							<img src={Layout} alt="" className="Layout"/>
						</div>
						<div className="wbAndData-container">
							<img src={Whiteboard} alt="" className="Whiteboard"/>
							<img src={Data} alt="" className="Data"/>
						</div>µ
					</div>
				</div>
			</div>
		</>
	)	
}


export default DefinitionBlock