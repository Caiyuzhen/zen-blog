/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
// 通过注释来动态的引入 babel 的翻译器，用 emotion 的翻译器！
import React, { useEffect, useRef, useState } from 'react'
import './UserTypeInfo.less'
import gradualArrow from '../../../../../assets/svg/icon-gradualArrow.svg'
import purple from '../../../../../assets/svg/link-purple.svg'
import blue from '../../../../../assets/svg/link-blue.svg'
import orange from '../../../../../assets/svg/link-orange.svg'
import green from '../../../../../assets/svg/link-green.svg'
import {IOptions} from '../../../../../types/global'



export const UserTypeInfo = () => {

	//🔥🔥一、获得要添加交叉观察器的元素
	const [Type_isVisible, setType_isVisible] = useState<boolean>(false) //返回 true 就添加动画，false 就移除动画
	const [Who_isVisible, setWho_isVisible] = useState<boolean>(false) //返回 true 就添加动画，false 就移除动画
	const [What_isVisible, setWhat_isVisible] = useState<boolean>(false) //返回 true 就添加动画，false 就移除动画
	const [Why_isVisible, setWhy_isVisible] = useState<boolean>(false) //返回 true 就添加动画，false 就移除动画
	const [Link_isVisible, setLink_isVisible] = useState<boolean>(false) //返回 true 就添加动画，false 就移除动画
	const Type_Ref = useRef<HTMLDivElement>(null)
	const Who_Ref = useRef<HTMLDivElement>(null)
	const What_Ref = useRef<HTMLDivElement>(null)
	const Why_Ref = useRef<HTMLDivElement>(null)
	const Link_Ref = useRef<HTMLDivElement>(null)


	//🔥🔥二、封装一个交叉观察器的 utils，需要传入【想监听的元素】、【hook 的状态】、【hook 状态改变的 useState函数】
	function useEleOnScreen (
		obj: React.RefObject<HTMLDivElement>, 
		isVisibleState: boolean, 
		setisVisibleStateFn: (state: boolean) => void): [boolean] { //目标元素


		const options = {
			rootMargin:'5px 2% 0px 0px', //这个一定要带单位! 可以改变相交区域的位置(相当于给它加上、右、下、左的 margin），一定要带单位, 如果相交目标是浏览器窗口的为参照的话，一定要带百分比(🌟-50%就是窗口的一半!)。（ + 正值向外延伸， - 负值向内缩小）
			threshold: [0, 0.5, 1] //相交的比例（0～1）的范围，还可以传数组，设置多个比例，比如[0.2, 0.4, 0.6],每达到某个比例的话都会触发
		}

		const callBackFn = (entries: IntersectionObserverEntry[]) => {
			entries.forEach(item => {
				if(item.intersectionRatio >= 0.5) {  //（出现）判断相交比例是否 >= 0.5 (比如向上滚动达到 0.5 的相交比例，则显示)
					const [entry] = entries
					setisVisibleStateFn(entry.isIntersecting) // true, 表示相交了, 就把值设置给 hook
				} 
				// else if (item.intersectionRatio <= 0.5) {  //（复原）判断相交比例是 <= 0.5  (比如向下滚动达到 0.5 的相交比例，则显示)
				// 	const [entry] = entries
				// 	setisVisibleStateFn(false) //= false, 表示没相交, 就把值设置给 hook
				// }
			})
		}

		useEffect(() => {
			const obs = new IntersectionObserver(callBackFn, options) //创建一个观察器实例
			if (obj.current) {
				obs.observe(obj.current as HTMLDivElement)
			}
			return () => {
				if(obj.current) {
					obs.unobserve(obj.current as HTMLDivElement) 
				}
			}
		},[obj, options]) //有元素, 有参数才开始观察
		// console.log(isVisibleState);
		return [isVisibleState]//最终把参数的值返回出去
	}


	//🔥🔥三、传参后再调用函数, 【解构】再【赋值】出【函数闭包】内的值, 下面再通过这些变量的值来判断样式！
	const [ TypeIsVisible ] = useEleOnScreen(Type_Ref, Type_isVisible, setType_isVisible) 
	const [ WhoIsVisible ] = useEleOnScreen(Type_Ref, Who_isVisible, setWho_isVisible)
	const [ WhatIsVisible ] = useEleOnScreen(Type_Ref, What_isVisible, setWhat_isVisible)
	const [ WhyIsVisible ] = useEleOnScreen(Type_Ref, Why_isVisible, setWhy_isVisible)
	const [ LinkIsVisible ] = useEleOnScreen(Link_Ref, Link_isVisible, setLink_isVisible)

	



	return (
		<>
			<div className="main-container">
				<div className="type-container" 
					 ref={Type_Ref} 
					 css={TypeIsVisible && css`
							opacity: 1 !important; //交叉观察器 isVisible 后，就显示
							transform: translateY(0px) !important;// 交叉观察器 isVisible 后，就位移
							transition: all .3s ease-in-out !important;
							transition-delay: 0s !important; //延迟一小会儿出现
					 `}
					 >
					<p className="title-text">Type</p>
					<div className="type-content">
						<p>Opinion leader</p>
						<p>Pioneer <br/> Efficiency Master</p>
						<p>Ordinary <br/> Note user</p>
						<p>Onlooker user</p>
					</div>
				</div>
				<div className="link-group"
					 ref={Link_Ref}
					 css={Link_isVisible && css`
					 	opacity: 1 !important;
						 transform: translateY(0px) !important;// 交叉观察器 isVisible 后，就位移
						transition: all .35s ease-in-out !important; //因为这个远一点，所以位移时间要加长一些
						transition-delay: 0.35s !important; //延迟一小会儿出现, 因为 link 的 height 短，所以很容易就交叉超过一半，所以更延迟一些
					 `}
					 >
					<img src={purple} alt="" className='link-purple'/>
					<img src={blue} alt="" className='link-blue'/>
					<img src={orange} alt="" className='link-orange'/>
					<img src={green} alt="" className='link-green'/>
				</div>
				<div className="threeW">
					<div className="who-container" 
						 ref={Who_Ref} 
						 css={WhoIsVisible && css`
							opacity: 1 !important; //交叉观察器 isVisible 后，就显示
							transform: translateY(0px) !important;// 交叉观察器 isVisible 后，就位移
							transition: all .4s ease-in-out !important; //因为这个远一点，所以位移时间要加长一些
							transition-delay: 0.2s !important; //延迟一小会儿出现
				  		 `}
						 >
						<p className="title-text">Who</p>
						<div className="who-content">
							<p>Developer</p>
							<p>Media writer</p>
							<p>Project manager</p>
							<p>Students & Teachers & Personal</p>
							<p>Designer</p>
							<p style={{color: '#22233D'}}>General content consumers</p>
							<p style={{color: '#22233D'}}>Freelancers</p>
						</div>
					</div>

					{/* 箭头 */}
					<img src={gradualArrow} alt="" 
						 className="gradualArrow"
						 css={Who_isVisible && css`
							opacity: 1 !important;
							transition: all .45s ease-in-out !important; 
							transition-delay: 0.4s !important; //延迟一小会儿出现
						`}
					/>

					<div className="what-container"
						 ref={What_Ref}
						 css={WhatIsVisible && css`
							opacity: 1 !important; //交叉观察器 isVisible 后，就显示
							transform: translateY(0px) !important;// 交叉观察器 isVisible 后，就位移
							transition: all .45s ease-in-out !important; //因为这个远一点，所以位移时间要加长一些
							transition-delay: 0.3s !important; //延迟一小会儿出现
						`}
						>
						<p className="title-text">What</p>
						<div className="what-content">
							<p>Share technical knowledge</p>
							<p>Run fan base</p>
							<p>Archiving knowledge, scheduling</p>
							<p>Making lectures, taking study notes</p>
							<p>Organize design inspiration</p>
							<p style={{color: '#22233D'}}>Consume fresh content</p>
							<p style={{color: '#22233D'}}>Training courses, personal web etc</p>
						</div>
					</div>

					{/* 箭头 */}
					<img src={gradualArrow} alt="" 
						 className="gradualArrow"
						 css={Who_isVisible && css`
						 		opacity: 1 !important;
								transition: all .45s ease-in-out !important; 
								transition-delay: 0.55s !important; //延迟一小会儿出现
						 `}
					/>
					
					<div className="why-container"
						 ref={Why_Ref}
						 css={WhyIsVisible && css`
							opacity: 1 !important; //交叉观察器 isVisible 后，就显示
							transform: translateY(0px) !important;// 交叉观察器 isVisible 后，就位移
							transition: all .5s ease-in-out !important; //因为这个远一点，所以位移时间要加长一些
							transition-delay: 0.4s !important; //延迟一小会儿出现
						 `}
						 >
						<p className="title-text">Why</p>
						<div className="why-content">
							<p>Poor scalability</p>
							<p>Trouble management by folder</p>
							<p>Moving information around</p>
							<p>Easy to forget notes</p>
							<p>General presentation of info</p>
							<p style={{color: '#22233D'}}>Content is very fragmented</p>
							<p style={{color: '#22233D'}}>hard to build website by personal</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default UserTypeInfo
