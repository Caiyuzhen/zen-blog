import React, { FC, useRef, useEffect, useState, useContext } from 'react'
import './BannerCard.less'
import mainWork0 from '../../../../assets/img/work-1.jpg'
import mainWork1 from '../../../../assets/img/work-2.jpg'
import mainWork2 from '../../../../assets/img/work-3.jpg'
import detailIcon from '../../../../assets/svg/icon-detail.svg'
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../../store'
import { IBannerDotsState, IBannerDotStateActionType } from '../../../../store/reducers/bannerDots'
import store from '../../../../store'
import { MouseContext } from '../../../Mouse/useMouseContext'
import axios from 'axios'
import { IBannerCard, ApiResponse } from '../../../../types/global'
import { BannerText } from './BannerText'



export const BannerCard:FC = () => {

	const [dotIndex, setDotIndex] = useState(0) //最开始是第 0 张 | 用来定位圆点的样式
	const dots = document.querySelectorAll('.dot') //获取所有的圆点
	const dotsArr = [...dots] //把原点数量转换成数组
	const work0 = document.querySelector('.work-0') as HTMLImageElement
	const work1 = document.querySelector('.work-1') as HTMLImageElement
	const work2 = document.querySelector('.work-2') as HTMLImageElement

	const { cursorChangeHandler } = useContext(MouseContext)//【 🏹️（（6）】用来改变 cursorType ，在下面的 render 中监听鼠标进入了哪个元素

	

	//【第一步】改变 bannerDots 的 store
	const dispatch = useDispatch() //引入方法

	function changeDotState(dotStateValue: number): void {
		// 🔥执行改变 store 中的 tabName 的方法
		dispatch({
			type: IBannerDotStateActionType.CHANGE,//记得在上方导入 enum 枚举接口
			payload: { //传入最新的 dotState 值（记得在下面的 div 内传参）
				bannerDotValue: dotStateValue
			}
		})
	}

	// console.log(dotsArr)

	
	//【第二步】【🔥实时的】监听 Store 内 State 的变化, 根据改变后的【状态】来进行轮播方法
	setInterval(()=>{
		// console.log('监听中')
		store.subscribe(() => {
			const bannerDotState = store.getState().bannerDots.bannerDotValue //实时绑定 store 中的数据
	
			if(bannerDotState === 0){ //点了第一张, 因为是实时监听的数据，所以会直接变
				if(work0 !== null) {
					work0.style.transform = `translate(0px)`
					work1.style.transform = `translate(-${work1.offsetWidth * (bannerDotState+1)}px)`
					work2.style.transform = `translate(-${work2.offsetWidth * (bannerDotState+1)}px)`
					setDotIndex(0)
					return
				}
			} 
			else if (bannerDotState === 1) { //点了第二张, 因为是实时监听的数据，所以会直接变
				if(work1 !== null) {
					work1.style.transform = `translate(0px)`
					work0.style.transform = `translate(-${work0.offsetWidth * bannerDotState}px)`
					work2.style.transform = `translate(-${work2.offsetWidth * bannerDotState}px)`
					setDotIndex(1)
					return
				}
			}
			else if (bannerDotState === 2) { //点了第三张, 因为是实时监听的数据，所以会直接变
				if(work2 !== null) {
					work2.style.transform = `translate(0px)`
					work0.style.transform = `translate(-${work0.offsetWidth * (bannerDotState-1)}px)`
					work1.style.transform = `translate(-${work1.offsetWidth * (bannerDotState-1)}px)` //只向左移一格就好了，所以 -1
					setDotIndex(2)
					return
				}
			}
		})
	},500)
	


	//切换显示大 dot 的方法
	useEffect(() => {
		dotsArr.forEach((item, index) => {
			if(index === dotIndex) {
				// console.log('index', index, dotIndex)
				item.classList.add('dot-Selector')
			} else {
				item.classList.remove('dot-Selector')
			}
		})
	},[dotIndex])


	// 加载 bannerCard 静态数据的方法
	const [bannerData, setBannerData] = useState<IBannerCard[]>([])  //实际存储数据的 hook

	async function getBannerCardData() {
		// 🌟 范型 ApiResponse 内的 data 是 IBannerCard 类型的数组[], 参考 https://juejin.cn/post/7084490905616384008
		const res = await axios.get<ApiResponse<IBannerCard[]>>('../../../../../content/works/bannerContent.json')
		if(res !== undefined) {
			// console.log(res.data.data);
			const resBannerCardData = res.data.data
			// console.log(resBannerCardData)
			setBannerData(resBannerCardData)
		}
	}

	useEffect(() => {
		getBannerCardData()
		// console.log('bannerDara',bannerData)
	},[])



	return (
		<>
			<div className="mainWork-banner-container"
				//【 🏹️（7）】鼠标把鼠标进入的状态传递给 context, 改变 cursorType 为 hovered
				onMouseEnter={ ()=>cursorChangeHandler('hovered') }
				onMouseLeave={ ()=>cursorChangeHandler('') }
			>

				{/*  用 mask 来规定显示的尺寸大小 */}
				<div className="imgMask-box">
					{/* 所有图片 */}
					<img src={mainWork0} alt="" className="mainWork work-0" />
					<img src={mainWork1} alt="" className="mainWork work-1" />
					<img src={mainWork2} alt="" className="mainWork work-2" />
					{/* 放第一张用来循环 */}
					{/* <img src={mainWork0} alt="" className="mainWork work-0" /> */}
				</div>
				
				
				<div className="content-conatiner">
					{/* 右侧文字内容 */}
					{/* 遍历上面 api 请求回来的本地数据 */}
					{
						bannerData && bannerData.map((item:IBannerCard, index:number) => {
							// 🔥🔥根据 dotIndex 来判断显示哪个 text 内容
							if(index === dotIndex){
								return (
									<BannerText key={index} id={item.id} title={item.title} subTitle={item.des}/>
								)
							}
						})
					}

					{/* 导航的小点点 */}
					<div className="navDot-container">
						<div className="navDotGroup">
							<div className="dot dot-Selector" 
								  onClick={ (e) => {changeDotState(0)}}
							></div>
							<div className="dot" 
								  onClick={ (e) => {changeDotState(1)}}
							></div>
							<div className="dot " 
								  onClick={ (e) => {changeDotState(2)}}
							></div>
						</div>
						<img src={detailIcon} alt="" />
					</div>
				</div>
			</div>
		</>
	)
}
