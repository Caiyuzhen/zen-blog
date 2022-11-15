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
						Title information
					</div>
					<div className="knowledgeGraphic-topInfo-des">
						We provide users with an automated way to interact with bulk slack account associations and bulk Jira Issue imports, greatly simplifying the interaction steps.
						We provide users with an automated way to interact with bulk slack account associations and bulk Jira Issue imports, greatly simplifying the interaction steps.
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
