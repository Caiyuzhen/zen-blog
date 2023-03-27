import { useNavigate } from "react-router-dom"
import { BackToTopDark } from "./BackToTopDark/BackToTopDark"
import createHeaderFn from "./utils/createHeader"

export const ProjectC = () => {

	const navigate = useNavigate() 
	function goBack() {
		navigate('/homepage/works')
	}

	// 实例化详情页的 header
	const projectC_Header = createHeaderFn({
		routerFn: goBack,
		imgClassName: "backIcon",
		projectContainerName: "top-img-pjC",
		navClassName: "top-nav-pjC",
		topImgIcon: topImgC,
	  });

	return (
		<>
			{/* 创建 header 的公共 createHeaderFn 方法 */}
			{projectC_Header }

			{/* 返回顶部 */}
			<BackToTopDark />
		</>
	)
}

export default ProjectC