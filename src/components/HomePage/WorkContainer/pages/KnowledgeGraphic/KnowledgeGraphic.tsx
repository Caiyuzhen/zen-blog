import React from 'react'
import './KnowledgeGraphic.less'
import KnowMainPage from '../../../../../assets/img/page-knowledgeMain.jpg'
import KnowLarge from '../../../../../assets/img/page-knowledge-Large.png'
import KnowMedium from '../../../../../assets/img/page-knowledge-Medium.png'
import KnowSmall from '../../../../../assets/img/page-knowledge-Small.png'

export const KnowledgeGraphic = () => {
	return (
		<>
			<div className="knowledgeGraphic-main-container">
				{/* 顶部信息 */}
				<div className="knowledgeGraphic-main-container-topInfo">
					<div className="knowledgeGraphic-topInfo-title">
					Knowledge graph View
					</div>
					<div className="knowledgeGraphic-topInfo-des">
						The core concept of Innos' knowledge management is connection. After users "grow" their knowledge based on real-time references, tags, two-way links, etc., the final precipitation is a personal or team knowledge map. Therefore, we provide a mapping browsing mode, so that users can freely explore knowledge connections, or discover some important knowledge nodes and review some important contents.
					</div>
				</div>

				{/* 底部图形 容器*/}
				<div className="knowledgeGraphic-main-container-bottomInfo">
					<img src={KnowLarge} alt="" className="KnowLarge"/>
					<img src={KnowMedium} alt="" className="KnowMedium"/>
					<img src={KnowSmall} alt="" className="KnowSmall"/>
					<img src={KnowMainPage} alt="" className="KnowMainPage"/>
				</div>
			</div>
		</>
	)
}

export default KnowledgeGraphic
