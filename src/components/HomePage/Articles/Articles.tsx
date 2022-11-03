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


	// 获取灵感卡片数据
	const [inspireContextData, setInspireContextData] = useState<IinspireCardContent[]>([]) 
	async function getInspiraCardList() {
		const res = await axios.get<ApiResponse<IinspireCardContent[]>>("../../../../content/articles/inspireList/inspireCardContent.json")
		const inspireCard = res.data.data
		setInspireContextData(inspireCard)
	}
	useEffect(() => {
		getInspiraCardList()
	},[])
	


	// 前端分页的方法
	//【当前页】、一页展示的【数量】、【总的数据量】
	const [currentPage, setCurrentPage] = useState(function() { //初始值为函数的返回值
		return {
			current: 2, //当前页
			pagination: 4, //总页数
		}
	})

	// 使用 useCallback 函数包裹【缓存分页处理函数返回的数据】, 执行后把参数传入来改变为最新的值
	const changePage = useCallback((current: number, pagination: number) => {
		setCurrentPage(
			{
				current: current, //传参改变 hook 的值
				pagination: pagination, //传参改变 hook 的值
			}
		)
	},[])

	useEffect(() => {
		changePage(2, 8) //🔥执行实际控制要展示多少页的函数
		console.log(currentPage.current)
	},[])





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
						inspireContextData && inspireContextData.map((inspireCardData: IinspireCardContent, index: number) => {
							if(index <= currentPage.current) { //🔥只渲染前 X 个
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
