import React, { FC, useEffect, useState, createContext, useContext } from 'react'
import './SideNav.less'
import designIcon from '../../../../assets/svg/icon-designIcon.svg'
import iconBusiness from '../../../../assets/svg/icon-business.svg'
import iconFun from '../../../../assets/svg/icon-fun.svg'
import iconProduct from '../../../../assets/svg/icon-product.svg'
import axios from 'axios'
import { ApiResponse, IinspireNav } from '../../../../types/global'
import { IinspireNavStateActionType } from '../../../../store/reducers/inspireNavs'
import { useDispatch, useSelector } from 'react-redux'
import { rootState } from '../../../../store'
import store from '../../../../store'
import { InspireNavContext } from '../../../../utils/Tabcontext'
import { MouseContext } from '../../../Mouse/useMouseContext'
import allInspireNavData from '../../../../assets/content/articles/inspireList/InspireNavSidebar.json'



export const SideNav:FC = () => {


	// 鼠标圆圈放大效果
	const { cursorChangeHandler } = useContext(MouseContext)
	

	//🚗二：获得 InspireNavContext 内打包好的工具函数,去改变 InspireNavContext 内的数据
	const { changeNav } = useContext(InspireNavContext)

	const navRedux = useSelector((state: rootState) => state.inspireNavState)
	const [navState, setNavState] = useState(0) //初始值, 也就是第几个 nav, 用来判断高亮哪个 tab



	// 改变 redux 中的 nav 状态: 获取元素 id, 通过 id (id 绑定了对应的 index)找到对应的元素, 然后把这个元素的状态改变
	const dispatch = useDispatch()

	function changeNavState (id:string) {
		// console.log(id)
		// 改变 store 中 inspireNavState 的状态
		dispatch({
			type: IinspireNavStateActionType.CHANGE,
			payload: {
				inspireNavState: id //传入值
			}
		})
	
		const changeNavNum = parseInt(id) // parseInt 转换为数字, 因为 id 是 string 格式
		setNavState(changeNavNum) //设置 hook 内的值, 用来判断高亮哪个 tab
		changeNav(changeNavNum) //设置 context 工具函数内的值, 用来判断显示哪组数据(在 Nav 内执行，去改变 Inspired 内的数据)
		console.log(changeNavNum);
	}

	useEffect(()=>{
		console.log('navRedux:',navRedux);
		// console.log('点了这个导航' + ':' + navState)
	},[navState])

	// store.subscribe(()=>{
	// 	const navRedux = store.getState().inspireNavState
	// 	console.log(navRedux)
	// })


	

	// 获取 nav 的渲染数据
	const [inspireNavItem, setInspireNavItem] = useState<IinspireNav[]>([])
	async function getNavItem() {
		const res = allInspireNavData.data
		setInspireNavItem(res)
		// const res = await axios.get<ApiResponse<IinspireNav[]>>("/src/assets/content/articles/inspireList/InspireNavSidebar.json")
		// const navItem = res.data.data
		// console.log('得到 navItem', navItem)
		// setInspireNavItem(navItem)
	}

	useEffect(() => {
		getNavItem()
	},[])




	return (
		<>
			<div className="nav-items"
				 onMouseEnter={ ()=>{cursorChangeHandler('hovered')} }
				 onMouseLeave={ ()=>{cursorChangeHandler('')} }
				>
				{
					inspireNavItem && inspireNavItem.map((item, index)=>{
						return (
							<div 
								// navState 用来判断高亮哪个 tab，结合 redux 来判断
								className={navState===index ? `item nav-item-${index} item-selected` : `item nav-item-${index}`} 
								key={index} 
								id={item.id}
								onClick={ (e)=>changeNavState(item.id) }//🔥点击元素时，获取对应元素的 id， 传入 item.id 即可, 去改变你 store 中的状态
								>
								<div className="inline">
									<img src={item.icon} alt="" />
									<p>{item.item}</p>
								</div>
							</div>
						)
					})
				}
			</div>
		</>
	)
}
