import React, { FC, useEffect, useState } from 'react'
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


export const SideNav:FC = () => {

	// 💎💎【先打住，等 InspiraCard 渲染好后再用 useContext 传递这个状态值】获取 redux 中的数据,把并且把数据存入 hook 中
	const navRedux = useSelector((state: rootState) => state.inspireNavState)
	const [navState, setNavState] = useState(navRedux)
	
	// 💎💎改变 redux 状态的方法
	function changeNavState (e: HTMLElement) {
		// 获取点击的元素的 id
		const id = e.getAttribute('data-id')
		console.log(id);//还没获得 id
	}



	// 获取 nav 的渲染数据
	const [inspireNavItem, setInspireNavItem] = useState<IinspireNav[]>([])
	async function getNavItem() {
		const res = await axios.get<ApiResponse<IinspireNav[]>>("../../../../../content/articles/inspireList/InspireNavSidebar.json")
		const navItem = res.data.data
		// console.log('得到 navItem', navItem)
		setInspireNavItem(navItem)
	}

	useEffect(() => {
		getNavItem()
	},[])

	// item-selected

	return (
		<>
			<div className="nav-items">
				{
					inspireNavItem && inspireNavItem.map((item, index)=>{
						return (
							<div 
								className={`item nav-item-${index}`} 
								key={index} 
								id={item.id}
								onClick={ (e)=>changeNavState(e.target as HTMLElement) }
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
