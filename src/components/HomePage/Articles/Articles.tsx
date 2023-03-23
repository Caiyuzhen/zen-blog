import React, { useContext, useEffect, useState, useCallback } from 'react'
import './Articles.less'
import { ArticleCard } from './ArticleCard/ArticleCard'
import rightGridImg from '../../../assets/img/rightGrid.png'
import doubleCircle from '../../../assets/svg/Icon-doubleCircle.svg'
import quota from '../../../assets/svg/Icon-quota.svg'
import { SideNav } from './SideNav/SideNav'
import { InspiraCard } from './InspiraCard/InspiraCard'
import Zeno from '../../../assets/img/Zen.png'
import { MouseContext } from '../../Mouse/useMouseContext'
import axios from 'axios' //导入 axios 库
import { ApiResponse, IArticleList, IinspireCardContent} from '../../../types/global' //导入全局类型
import {InspireNavContext} from '../../../utils/Tabcontext'
// import img1 from '../../../../src/assets/img/article-img-01.jpg'=


const Articles = () => {

	// 鼠标圆圈放大效果
	const { cursorChangeHandler } = useContext(MouseContext)


	// 获取文章数据
	const [articleList, setArticleList] = useState<IArticleList[]>([])
	async function getArticleListData(): Promise<void> {
		const res = await axios.get<ApiResponse<IArticleList[]>>('../../../../content/articles/articleList/articleList.json')
		const listData = res.data.data ? res.data.data : []
		setArticleList(listData)
		// console.log('得到 articleList', articleList)//获得数据
	}
	useEffect(() => {
		getArticleListData()
	}, [])



	/*
	💎前端分页思路:  reference: https://juejin.cn/post/6993273415163445278
		1. 通过 axios 获取【所有数据】，用 hook 存放 allinspireContextData
		2. 定义一个工具，来更换【当前页】 currentPage.current, 并通过 useContext 包裹起来分发给 Nav 组件来使用(⚡️可以使用全局封装好的 utils)
		3. 封装一个切分数组的方法，得到【总页数】、【要分为多少页】，通过 for 循环， slice 切割数组，得到 4 个数组, 并且存入 hook 中
		4. map 3 中的 hook 来渲染数组, 本质上是通过 -> hook 数组【0】 等取到哪组数据！！
		5. 在 SideNav 组件中去改变 3 中的 hook 来实现切换内容
	*/



	// 【💎第一步 - 获得全量数据】获取灵感卡片的数据
	const [allinspireContextData, setallinspireContextData] = useState<IinspireCardContent[]>([]) //存放所有数据


	useEffect(() => {
		async function getInspiraCardList() {
			const res = await axios.get<ApiResponse<IinspireCardContent[]>>("../../../../content/articles/inspireList/inspireCardContent.json")
			const inspireCard = res.data.data
			setallinspireContextData(inspireCard)
		}
		getInspiraCardList()
	},[])




	//【💎第二步 - 定义改变页数的 hook】定义改变当前页的工具函数, 然后【🔥🔥需要把这个工具函数暴露给 Nav 组件, 以便 Nav 组件可以改变当前页】
	const [currentPage, setCurrentPage] = useState(function() { //初始值为函数的返回值
		return {
			current: 0, //当前默认渲染哪一页, 🔥取值需要通过【currentPage.current】！, 默认为第一页 0, 然后需要传递给下面的 div 渲染来判断渲染哪一页！
		}
	})
	// 包裹【缓存分页处理函数返回的数据】, 传入为最新的值
	const changePage = useCallback((current: number) => {
		setCurrentPage({
				current: current, //传参改变 hook 的值
			})
	},[])


	//🚗一：定义要传递 useContext 的值！包裹数据传给 Nav 组件
	const value = {
		// showNav: currentPage.current,
		changeNav: changePage  //包裹👆的用 changePage 来改变 currentPage.current 的值, 🤔想想好像也不需要把 showNav 的值传递给子组件
	}

	useEffect(()=>{
		console.log('currentPage', currentPage.current)
	},[currentPage])



	
	//【💎第三步 - 分割数组为 X 份数据】, 并且用 hook 来存放独立的一组组 {} {} 数据
	const [inspireArr, setInspireArr] = useState<Array<IinspireCardContent[]>>([]) 
	
	// 封装一个分割数据的方法
	function createNewArr(allArrObj: Array<IinspireCardContent>, num:number) { //分割的【对象 allArrObj】及【分多少组 num】
		const allLength = allinspireContextData.length//总数 12

		const newArray:[IinspireCardContent[]] = [[]] //不能强行 push ，因为这样就新增加了一个内存地址，不会触发更新
		for(let i = 0; i < allLength;) { 	//i 一开始是 0, 每次循环后 + num, 直到 i > allLength 停止
			newArray.push(allArrObj.slice(i, i += num))  //i=i+num, 依次截取出 splice(0, 3) , splice(3, 6) , splice(6, 9) , splice(9, 12)	
			// 	console.log(i) //i = 0,3,6,9,
		}
		newArray.shift() //删除掉第一个空数据 []
		setInspireArr([...newArray]) //把切分好的数据存入 hook 内
	}

	useEffect(() => {
		createNewArr(allinspireContextData, 3)//执行切割方法, 分为 3 份
		// console.log('最终的数据:',inspireArr[0]);
		// console.log(inspireArr[2])//最终每个 tab 的数据
	}, [allinspireContextData])//获得 api 数据后再切割
	// const designTab = allinspireContextData.slice(0,3) //切分为四组内容




	
	const [mdText, setMdText] = useState("")

// 🔥🔥这部错了，不能一直发送请求
	function getMdText() {
		const mdPathArr = articleData.des //md 路径
							
			axios.get(mdPathArr).then(res => {	// 发送 axios 获得 md 内的字符串, 并把所有数据保存到一个变量中
				setMdText(res.data)
				// console.log(res.data)
		})
	}
	


	return (
		<div className="article-main-container">

			{/* 分割线 */}
			<div className="article-top-trim">
				<img src={doubleCircle} alt="" className="doubleCircle"/>
				<span></span>
			</div>

			<div className="article-top-container">
				<div className="article-top-leftText">Blogs</div>
				<div className="article-top-rightContainer"
					onMouseEnter={ ()=>{cursorChangeHandler('hovered')} }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					{/* 渲染 [文章列表] 数据 */}
					{
						articleList && articleList.map((articleData, index:number) => {

				


							return (
								<div key={index}>
									<ArticleCard 
										id={articleData.id}
										title={articleData.title}
										des={mdText}
										date={articleData.date}
										hashTag={articleData.hashTag}
										img={articleData.img}
									/>
								</div>
							)
						})
					}
				</div>
			</div>




			{/* 分割线 */}
			<div className="article-bottom-trim">
				<span></span>
				<img src={quota} alt="" className="quota"/>
			</div>
			



			<div className="article-bottom-container">
				<div className="article-bottom-rightText">Inspiration</div>
				
				<div className="article-inspired-container"
					 onMouseEnter={ ()=>{cursorChangeHandler('hovered')} }
					 onMouseLeave={ ()=>{cursorChangeHandler('')} }
				>

					{/* 🚗二：打包要传递 useContext 的值！🔥🔥记得把 <SideNav/> 组件包裹进去！不然它不能获得数据！！ */}
					<InspireNavContext.Provider value={value} >
						<SideNav />
						<div className="content-container">
							{/* 【💎第四步 - 根据 ‘当前页’ 的 hook 来显示哪一页（本质是显示哪一组数组）】, 最终实现渲染（灵感卡片） 数据的渲染*/}
							{
								inspireArr[currentPage.current] && inspireArr[currentPage.current].map((inspireCardData: IinspireCardContent, index: number) => {
									// if(index <= currentPage.current) { //🔥只渲染前 X 个(分页), 也就是 currentPage.current 的值
										return (
											<div key={index}>
												<InspiraCard 
													id={inspireCardData.id}
													content={inspireCardData.content}
													time={inspireCardData.time}
													author={inspireCardData.author}
													hashTag={inspireCardData.hashTag}
												/>
											</div>
										)
									// } else return (null)
								})
							}
						</div>
					</InspireNavContext.Provider>
					
				</div>
			</div>
			<img src={rightGridImg} alt="" className="rightGridImg"/>
		</div>
	)
}

export default Articles
