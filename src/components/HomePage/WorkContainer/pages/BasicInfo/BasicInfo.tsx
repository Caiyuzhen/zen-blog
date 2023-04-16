/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
// 通过注释来动态的引入 babel 的翻译器，用 emotion 的翻译器！
import React, { RefObject, useEffect, useRef, useState } from 'react'
import gradualArrow from '../../../../../assets/svg/icon-gradualArrow.svg'
import './BasicInfo.less'
import { useEleOnScreen } from '../../../../../utils/useEleOnScreen'

type IOptions = {
    rootMargin: string;
    threshold: number[];
}


export const BasicInfo = () => {

	// // 交叉观察器
	// function useEleOnScreen(options: IOptions): [React.MutableRefObject<HTMLDivElement | null>, boolean] { //目标元素 执行的动画

	// 	const containRef = useRef<HTMLDivElement | null>(null)
	// 	const [isVisible, setIsVisible] = useState<boolean>(false) //返回 true 就添加动画，false 就移除动画

	// 	const callBackFn = (entries: IntersectionObserverEntry[]) => {
			
	// 		entries.forEach(item => {
	// 			if(item.intersectionRatio >= 0.5) {  //（出现）判断相交比例是否 >= 0.5 (比如向上滚动达到 0.5 的相交比例，则显示)
	// 				const [entry] = entries
	// 				setIsVisible(entry.isIntersecting) // true, 表示相交了, 就把值设置给 hook
	// 				// console.log(item.intersectionRatio.toFixed(2))
	// 			} else if (item.intersectionRatio <= 0.5) {  //（复原）判断相交比例是 <= 0.5  (比如向下滚动达到 0.5 的相交比例，则显示)
	// 				const [entry] = entries
	// 				setIsVisible(false) //= false, 表示没相交, 就把值设置给 hook
	// 				// console.log(item.intersectionRatio.toFixed(2))
	// 			}
	// 		})
	// 	}

	// 	useEffect(() => {
	// 		const obs = new IntersectionObserver(callBackFn, options) //创建一个观察器实例
	// 		if (containRef.current) {
	// 			obs.observe(containRef.current)
	// 		}
	// 		return () => {
	// 			if(containRef.current) {
	// 				obs.unobserve(containRef.current) //组件卸载时就不监听了
	// 			}
	// 		}
	// 	},[containRef, options]) //有元素, 有参数才开始观察

	// 	return [containRef, isVisible]
	// }

	// //传参后再解构赋值出闭包的值
	// const [ containerRef, isVisible ] = useEleOnScreen({ 
	// 	rootMargin:'5px 2% 0px 0px', //这个一定要带单位! 可以改变相交区域的位置(相当于给它加上、右、下、左的 margin），一定要带单位, 如果相交目标是浏览器窗口的为参照的话，一定要带百分比(🌟-50%就是窗口的一半!)。（ + 正值向外延伸， - 负值向内缩小）
	// 	threshold: [0, 0.5, 1] //相交的比例（0～1）的范围，还可以传数组，设置多个比例，比如[0.2, 0.4, 0.6],每达到某个比例的话都会触发
	// 	// threshold: 1 // 1 就是相交比例为 100% 相交时会触发一次
	// })

	const top_containerRef = useRef<HTMLDivElement>(null)
	const [Top_isVisible, setTop_isVisible] = useState<boolean>(false)
	const [topIsVisible] = useEleOnScreen(top_containerRef, Top_isVisible, setTop_isVisible)//解构赋值

	const bottom_containerRef = useRef<HTMLDivElement>(null)
	const [Bottom_isVisible, setBottom_isVisible] = useState<boolean>(false)
	const [bottomIsVisible] = useEleOnScreen(bottom_containerRef, Bottom_isVisible, setBottom_isVisible)//解构赋值, 传入对象跟 hook 返回是否可见的值

	return (
		<>
			<div className="basic-info">
				<p className="main-bigTitle">Innos Note</p>

				<div className="basic-container">
					<div className="basic-info-topContainer"
						 ref={top_containerRef}
						 css={topIsVisible && css`// 👇引入 emotion 后，会增加个 css 的模板语法，可以用来添加 hover 等选择器的样式
							opacity: 1 !important; //交叉观察器 isVisible 后，就显示
							transform: translateY(0px) !important;// 交叉观察器 isVisible 后，就位移
							transition: all .3s ease-in-out !important;
					   `}
					>
						<div className="basic-info-topLeft">
							<div className="main-title">Hybrid working Background</div>
							<div className="main-content">The black swan event of the epidemic has quickly transformed the organization's collaboration mode from the traditional offline mode to a remote office mode, followed by a change in the entire organization's collaboration mode, which has also triggered companies to re-engineer their own workflow. Review, use tools to improve business efficiency, increase business effects, and improve business benefits.</div>
						</div>
						<div className="basic-info-topRight">
							<div className="circle"><p> Attachment to <br/> Organization </p></div>
							<img src={gradualArrow} alt="" />
							<div className="circle"><p> Free Individual <br/> Productivity </p></div>
						</div>
					</div>

					{/* 💡使用 emotion 的 css 来增加额外的样式，更直观一些*/}
					<div className="basic-info-bottomContainer" 
						  ref={bottom_containerRef}
						  css={bottomIsVisible && css`// 👇引入 emotion 后，会增加个 css 的模板语法，可以用来添加 hover 等选择器的样式
								opacity: 1 !important; //交叉观察器 isVisible 后，就显示
								transform: translateY(0px) !important;// 交叉观察器 isVisible 后，就位移
								transition: all .3s ease-in-out !important;
								transition-delay: .3s !important; //延迟一小会儿出现, 因为 link 的 height 短，所以很容易就交叉超过一半，所以更延迟一些
						  `}
						  >
						<div className="basic-info-bottomLeft">
							<div className="main-title">The rise of the creator economy</div>
							<div className="main-content">In the era of Web 2.0, big platforms monopolized the ownership of content, but in the era of Web 3.0, the ownership of content will return to creators, and the environment has also spawned more freelancers. We also found that more and more The NCLC platform has sprung up like mushrooms after a rain, and the entire industry has ushered in a bonus period.</div>
						</div>
						<div className="basic-info-bottomRight">
							<div className="circle"><p> Single product of <br/> Creation Tools </p></div>
							<img src={gradualArrow} alt="" />
							<div className="circle"><p> Composite <br/> Creation Tools </p></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}



export default BasicInfo