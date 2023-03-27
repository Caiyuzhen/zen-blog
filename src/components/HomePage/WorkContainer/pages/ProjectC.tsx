import { useNavigate } from "react-router-dom"
import { BackToTopDark } from "./BackToTopDark/BackToTopDark"
import createHeaderFn from "./utils/createHeader"
import topImgC from '../../../../assets/img/ProjectC-topImg.jpg'
import UserJourney from '../../../../assets/img/migu-UserJourney.png'
import backIcon from '../../../../assets/svg/icon-back.svg'
import './ProjectC.less'
import BaseInfoProjectC from "./ProjectC_Ele/BaseInfoProjectC/BaseInfoProjectC"
import { DataInfo } from "./ProjectC_Ele/DataInfo/DataInfo"
import { UserGender } from "./ProjectC_Ele/UserGender/UserGender"


export const ProjectC = () => {

	const navigate = useNavigate() 
	function goBack() {
		navigate('/homepage/works')
	}

	// 实例化详情页的 header
	const projectC_Header = createHeaderFn({
		routerFn: goBack,
		projectName: "MIGU Music",
		imgClassName: backIcon,
		projectContainerName: "top-img-pjC",
		navClassName: "top-nav-pjC",
		topImgIcon: topImgC,
	  });

	return (
		<div className="projectC-container">
			{/* 创建 header 的公共 createHeaderFn 方法 */}
			{projectC_Header }
			<BaseInfoProjectC />
			<DataInfo />
			<UserGender />
			<img src={UserJourney} alt="" style={{width: '80%'}}/>
			<BackToTopDark />
		</div>
	)
}

export default ProjectC