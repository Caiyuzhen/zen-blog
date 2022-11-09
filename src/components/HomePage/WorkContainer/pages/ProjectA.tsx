import React, { RefObject, useEffect, useRef, useState } from 'react'
import topImg from '../../../../assets/img/ProjectA-topImg.jpg'
import gradualArrow from '../../../../assets/svg/icon-gradualArrow.svg'
import colorBorder from '../../../../assets/svg/icon-colorBorder.svg'
import backIcon from '../../../../assets/svg/icon-back.svg'
import './ProjectA.less'
import { useNavigate } from 'react-router-dom'
import Trottle from '../../../../utils/Trottle'


type IOptions = {
    rootMargin: string;
    threshold: number[];
}


export const ProjectA = () => {

	// 封装一个监听页面滚动距离的方法
	function getScrollY(): number {
		const [scrollY, setScrollY] = useState<number>(0)

		useEffect(() => {
			const pageMoveHandler = () => {
				const scrollY_Value = parseInt(window.scrollY.toFixed(2))
				setScrollY(scrollY_Value) //把值设置进 hook 内
			}

			const pageMove = Trottle(pageMoveHandler, 50) //引入节流方法

			window.addEventListener('scroll', pageMove!) //执行监听包裹节流方法的函数
			return () => window.removeEventListener("scroll", pageMove!)
		}, [])

		console.log(scrollY) 

		return scrollY	//返回页面滚动的距离
	}
	// getScrollY()




	// 封装一个交叉观察器（看元素是否进入视口内）
	function useEleOnScreen(options: IOptions): [React.MutableRefObject<HTMLDivElement | null>, boolean] { //目标元素 执行的动画

		const containRef = useRef<HTMLDivElement | null>(null)
		const [isVisible, setIsVisible] = useState<boolean>(false) //返回 true 就添加动画，false 就移除动画

		const callBackFn = (entries: IntersectionObserverEntry[]) => {
			
			
			entries.forEach(item => {
				if(item.intersectionRatio >= 0.5) {  //（出现）判断相交比例是否 >= 0.5 (比如向上滚动达到 0.5 的相交比例，则显示)
					const [entry] = entries
					setIsVisible(entry.isIntersecting) //= true, 表示相交了, 就把值设置给 hook
					// console.log(item.intersectionRatio.toFixed(2))
				} else if (item.intersectionRatio <= 0.5) {  //（复原）判断相交比例是 <= 0.5  (比如向下滚动达到 0.5 的相交比例，则显示)
					const [entry] = entries
					setIsVisible(false) //= false, 表示没相交, 就把值设置给 hook
					// console.log(item.intersectionRatio.toFixed(2))
				}
			})
		}

		useEffect(() => {
			const obs = new IntersectionObserver(callBackFn, options) //创建一个观察器实例
			if (containRef.current) {
				obs.observe(containRef.current)
			}
			return () => {
				if(containRef.current) {
					obs.unobserve(containRef.current) //组件卸载时就不监听了
				}
			}
		},[containRef, options]) //有元素, 有参数才开始观察

		return [containRef, isVisible]
	}

	//传参后再解构赋值出闭包的值
	const [ containerRef, isVisible ] = useEleOnScreen({ 
		rootMargin:'5px 2% 0px 0px', //这个一定要带单位! 可以改变相交区域的位置(相当于给它加上、右、下、左的 margin），一定要带单位, 如果相交目标是浏览器窗口的为参照的话，一定要带百分比(🌟-50%就是窗口的一半!)。（ + 正值向外延伸， - 负值向内缩小）
		threshold: [0, 0.5, 1] //相交的比例（0～1）的范围，还可以传数组，设置多个比例，比如[0.2, 0.4, 0.6],每达到某个比例的话都会触发
		// threshold: 1 // 1 就是相交比例为 100% 相交时会触发一次
	})


	
	
	
	
	

	// 返回上一页的函数
	const navigate = useNavigate()
	function goBack(): void {
		navigate('/homepage/works')
	}



	return (
		<>
			<div className='projectA-container'>
				
				{/* 头图 */}
				<div className="top-img">

					{/* 导航 */}
					<div className="top-nav">
						<img src={backIcon} alt="" onClick={ ()=>goBack() }/>
						<p>Project A Name</p>
					</div>

					<img src={topImg} alt="" />
				</div>
				

				{/* 首屏 */}
				<div className="basic-info">
					<p className="main-bigTitle">ABC</p>

					<div className="basic-container">

						<div className="basic-info-topContainer">
							<div className="basic-info-topLeft">
								<div className="main-title">Hybrid Working background</div>
								<div className="main-content">The black swan event of the epidemic has quickly transformed the organization's collaboration mode from the traditional offline mode to a remote office mode, followed by a change in the entire organization's collaboration mode, which has also triggered companies to re-engineer their own workflow. Review, use tools to improve business efficiency, increase business effects, and improve business benefits.</div>
							</div>
							<div className="basic-info-topRight">
								<div className="circle"><p>Single product <br/> Create tool</p></div>
								<img src={gradualArrow} alt="" />
								<div className="circle"><p>Compound <br/> Create tool</p></div>
							</div>
						</div>

						{/* 测试一下动态样式，可以能要用 css style 库 ？*/}
						<div className={isVisible ? "basic-info-bottomContainer-disable" : "basic-info-bottomContainer" } 
							 ref={containerRef}>
							<div className="basic-info-bottomLeft">
								<div className="main-title">The rise of the creator economy</div>
								<div className="main-content">In the era of Web 2.0, big platforms monopolized the ownership of content, but in the era of Web 3.0, the ownership of content will return to creators, and the environment has also spawned more freelancers. We also found that more and more The NCLC platform has sprung up like mushrooms after a rain, and the entire industry has ushered in a bonus period.</div>
							</div>
							<div className="basic-info-bottomRight">
								<div className="circle"><p>Centralized <br/> Edit mode</p></div>
								<img src={gradualArrow} alt="" />
								<div className="circle"><p>Decentralization <br/> Creative mode</p></div>
							</div>
						</div>
					</div>
				</div>

				{/* 分割线 */}
				<img src={colorBorder} alt="" className="main-border"/>
			</div>
		</>
	)
}


export default ProjectA
