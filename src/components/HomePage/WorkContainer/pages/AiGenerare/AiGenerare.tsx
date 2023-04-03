import React from 'react'
import AiGeneratePage from '../../../../../assets/img/page-AiGenerate-framework.jpg' 
import ColorPickerCard from '../../../../../assets/img/card-dialogColorPicker.jpg' 
import AiGenerateCard from '../../../../../assets/img/card-dialogAiGenerate.jpg' 
import './AiGenerare.less'

export const AiGenerare = () => {
	return (
		<>
			<div className="AiGenerate-main-container">
				<div className="AiGenerate-left-contentContainer">
					<div className="AiGenerate-left-infoContainer">
						<div className="AiGenerate-left-title">Indentifiable of Avatar</div>
						<p className="AiGenerate-left-des">
						Group Icon, like the brand logo, is a totem that unites the culture of the team, so we wanted to lower the threshold of creating this cultural totem and improve its recognition and diversity. Therefore, we made a mechanism to automatically arrange the size of the logo, and tried to introduce EALL-E to help users create it more easily.
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