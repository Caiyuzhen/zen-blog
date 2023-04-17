import { useNavigate } from "react-router-dom"
import { BackToTopDark } from "./BackToTopDark/BackToTopDark"
import createHeaderFn from "./utils/createHeader"
import topImgC from '../../../../assets/img/ProjectC-topImg.jpg'
import backIconLight from '../../../../assets/svg/icon-arrowOnly-Light.svg'
import backToTopLight from '../../../../assets/svg/icon-arrowOnlyTop-Light.svg'
// import backIcon from '../../../../assets/svg/icon-back.svg'
import './ProjectC.less'
import BaseInfoProjectC from "./ProjectC_Ele/BaseInfoProjectC/BaseInfoProjectC"
import { DataInfo } from "./ProjectC_Ele/DataInfo/DataInfo"
import { UserGender } from "./ProjectC_Ele/UserGender/UserGender"
import { UserJourney } from "./ProjectC_Ele/UserJourney/userJourney"
import { MainFeedUi } from "./ProjectC_Ele/MainFeedUi/MainFeedUi"
import { TopUserUI } from "./ProjectC_Ele/TopUserUI/TopUserUI"
import { PublishUI } from "./ProjectC_Ele/PublishUI/PublishUI"
import { useCardYPosContext } from "../ProjectCard/ProjectCard"
import allMigulUI from '../../../../assets/img/migu-allUI.png'


export const ProjectC = () => {

	const navigate = useNavigate() 
	function goBack() {
		navigate('/homepage/works')
	}

	// 实例化详情页的 header
	const projectC_Header = createHeaderFn({
		routerFn: goBack,
		projectName: "MIGU Music",
		imgClassName: backIconLight,
		projectContainerName: "top-img-pjC",
		navClassName: "top-nav-pjC",
		topImgUrl: topImgC,
	  });

	return (
		<div className="projectC-container">
			{/* 创建 header 的公共 createHeaderFn 方法, 写样式的话【类名】用【上面定义的】！ */}
			{projectC_Header }
			<BaseInfoProjectC />
			<DataInfo />
			<UserGender />
			<UserJourney />
			<MainFeedUi />
			<TopUserUI />
			<PublishUI />
			<BackToTopDark 
				content="Back to Top"
				fontColor='#d5d4dd'
				borderColor='#d5d4dd'
				backToTopArrow={backToTopLight}
				imgURL={allMigulUI}
			/>
		</div>
	)
}

export default ProjectC