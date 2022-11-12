import React from 'react'
import './DefinitionBlock.less'
import Circle from '../../../../../assets/svg/icon-circle.svg'



export const DefinitionBlock = () => {
	return (
		<>
			<div className="definitionBlock-main-container">
				<img src={Circle} alt="" className="definitionBlock-circle"/>
				<div className="DefinitionBlock-inside-container">
					{/* 顶部标题 */}
					<div className="DefinitionBlock-topContainer">
						<div className="DefinitionBlock-title">Titles Titles</div>
						<p>description of DefinitionBlock description of DefinitionBlock description of DefinitionBlock</p>
					</div>
					{/* 底部内容 */}
					<div className="DefinitionBlock-content">
						
					</div>
				</div>
			</div>
		</>
	)	
}


export default DefinitionBlock