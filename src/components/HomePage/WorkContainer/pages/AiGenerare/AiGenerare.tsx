import React from 'react'
import AiGeneratePage from '../../../../../assets/img/page-AiGenerate-franework.jpg' 
import ColorPickerCard from '../../../../../assets/img/card-dialogColorPicker.jpg' 
import AiGenerateCard from '../../../../../assets/img/card-dialogAiGenerate.jpg' 
import './AiGenerare.less'

export const AiGenerare = () => {
	return (
		<>
			<div className="AiGenerate-main-container">
				<div className="AiGenerate-left-contentContainer">
					<div className="AiGenerate-left-infoContainer">
						<div className="AiGenerate-left-title">XXXXXXXX of XXXXX</div>
						<p className="AiGenerate-left-des">
							xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxx xx xxxxxxxxx NPS xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxx xx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxx xxxxxxxxxxxx xxxxxxxxxxxx
						</p>
						<div className="AiGenerate-left-picContainer">
							<img src={ColorPickerCard} alt="" className="ColorPickerCard"/>
							<img src={AiGenerateCard} alt="" className="AiGenerateCard"/>
						</div>
					</div>
				</div>

				<img src={AiGeneratePage} alt="" className="AiGenerate-right-framework"/>
			</div>
		</>
	)
}

export default AiGenerare