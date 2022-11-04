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
// import img1 from '../../../../src/assets/img/article-img-01.jpg'




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




	// 获取灵感卡片的数据
	const [allinspireContextData, setallinspireContextData] = useState<IinspireCardContent[]>([]) //存放所有数据
	
	async function getInspiraCardList() {
		const res = await axios.get<ApiResponse<IinspireCardContent[]>>("../../../../content/articles/inspireList/inspireCardContent.json")
		const inspireCard = res.data.data
		setallinspireContextData(inspireCard)
	}

	useEffect(() => {
		getInspiraCardList()
	},[])


	/*
	💎前端分页思路: 
		通过 SideNav 的数字 context 来获得当前是第几个 tab
		然后根据不同的 tab 传入不同的值  
		splice 为浅拷贝
		reference: https://juejin.cn/post/6993273415163445278
	*/


	//【当前页】、【总的页数】
	const [currentPage, setCurrentPage] = useState(function() { //初始值为函数的返回值
		return {
			current: 1, //当前页, 取值需要通过 currentPage.current
		}
	})
	// 包裹【缓存分页处理函数返回的数据】, 传入为最新的值
	const changePage = useCallback((current: number) => {
		setCurrentPage({
				current: current, //传参改变 hook 的值
			})
	},[])
	// changePage(1) 



	// inspireArr 用来存放独立的一组组 {} {} 数据
	const [inspireArr, setInspireArr] = useState<Array<IinspireCardContent[]>>([]) 
	
	// 分割数据的方法 Array + 什么对象组成的数组
	function createNewArr(allArrObj: Array<IinspireCardContent>, num:number) { //分割的【对象 allArrObj】及【分多少组 num】
		const allLength = allinspireContextData.length//总数 12

		const newArray:[IinspireCardContent[]] = [[]] //不能强行 push ，因为这样就新增加了一个内存地址，不会触发更新
		for(let i = 0; i < allLength;) { 	//i 一开始是 0, 每次循环后 + num, 直到 i > allLength 停止
			newArray.push(allArrObj.slice(i, i += num))  //i=i+num, 依次截取出 splice(0, 3) , splice(3, 6) , splice(6, 9) , splice(9, 12)	
			// 	console.log(i) //i = 0,3,6,9,
		}
		newArray.shift() //删除掉第一个空数据 []
		// console.log(newArray)
		setInspireArr([...newArray]) //把切分的数据存入 hook 内
	}



	useEffect(() => {
		createNewArr(allinspireContextData, 3)//执行切割方法
		// console.log('最终的数据:',inspireArr);
		// console.log(inspireArr[2])//最终每个 tab 的数据
		// console.log(inspireArr[4])//最终每个 tab 的数据
	}, [allinspireContextData])//获得 api 数据后再切割


	// const designTab = allinspireContextData.slice(0,3) //切分为四组内容
	// const businessTab = allinspireContextData.slice(3,6) //切分为四组内容



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
										des={articleData.des}
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
				
				<div className="article-inspired-container">
					
					<SideNav />

					<div className="content-container">
						{/* 渲染 [灵感卡片] 数据*/}
						{
							allinspireContextData && allinspireContextData.map((inspireCardData: IinspireCardContent, index: number) => {
								if(index <= currentPage.current) { //🔥只渲染前 X 个, 也就是 currentPage.current 的值
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
								} else return (null)
							})
						}
					</div>
					
				</div>
			</div>
			<img src={rightGridImg} alt="" className="rightGridImg"/>
		</div>
	)
}

export default Articles
