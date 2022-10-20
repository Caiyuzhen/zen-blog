import React, { FC,createContext, useEffect, MouseEvent, useContext, useRef } from 'react'
import './Filter.less'
import TabContext from '../../../../utils/Tabcontext' //createContext + use Context
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../../store'
import { ITabState, ITabsActionType } from '../../../../store/reducers/tabs'


interface IProps {
	isActive: string,//判断 tab 是否选中了, 用来改变【底色的位置】跟【字体粗细】等样式
	onChangeTab: (isActive: string) => void, //⚡️回调函数，由父组件传的方法给子组件
	// showPage: string;//判断显示哪个页面(不易用一层层传了，👇直接用 useContext 来接收)
	// changePage: (showPage: string) => void;//⚡️由父组件传的方法给子组件(不易用一层层传了，👇直接用 useContext 来接收)
}


// 孙组件
const FilterTabs:FC<IProps> = ( {isActive, onChangeTab} ) => {//传入父组件的 hook 


	//⚡️接收从爷组件传过来的数据, 利用 useContext 来获取, TanContext 已经封装成了 utils, 里边包含一个 hook， 有 showPage 跟 changePage
	const {showPage, changePage} = useContext(TabContext) 



	//Tab 底色 ————————————————————————————

	//👋获取 tab 节点跟 tab 底部色块 (两种获取方式, ref 或 document.querySelector)
	const bottomTabBar = useRef<HTMLDivElement>(null)
	// const tab1 = document.querySelector('#tab1')


	// 色块的基础位置
	const Position = {
		baseX: -8,//🔥tab 底部色块的初始距离, 与 tab 的 padding 还有 margin 相关，需要细调！
		baseY: -4,
	}

	
	//⚡️封装个改变 tab 位置的函数(方法一), 利用 e.target 来获取当前点击的 tab 的位置，然后把 ref={bottomTabBar} 的初始位置加上点击的这个位置就是要移动过去的位置
	function changeBottomColor(target: HTMLElement): void {
		if(bottomTabBar.current !== null) {
			if(isActive){
				bottomTabBar.current.style.transform = `translate(${Position.baseX + (target).offsetLeft}px, ${Position.baseY}px)`//等于当前选中的 tab 的 offset 加上基础位置
			}
		}
		// console.log((target as HTMLElement).offsetLeft)
		// event.preventDefault();
	}

	useEffect(()=>{
		const dom = document.querySelector(`#${isActive}`);
		changeBottomColor(dom as HTMLElement);
	}, [])

	//⚡️改变 tab 的位置（方法二，比较挫，一个个改）
	// useEffect(()=>{
		// if(bottomTabBar.current !== null) {
		// 	if(isActive === 'tab1'){
		// 		bottomTabBar.current.style.transform = `translate(${Position.baseX}px, ${Position.baseY}px)`//等于当前选中的 tab 的 offset 加上基础位置
		// 	}
		// 	if(isActive === 'tab2'){
		// 		bottomTabBar.current.style.transform = `translate(${Position.baseX + 60}px, ${Position.baseY}px)`//等于当前选中的 tab 的 offset 加上基础位置
		// 	}
		// 	if(isActive === 'tab3'){
		// 		bottomTabBar.current.style.transform = `translate(${Position.baseX + 132}px, ${Position.baseY}px)`//等于当前选中的 tab 的 offset 加上基础位置
		// 	}
		// }
	// 	changeBottomColor()
	// },[isActive])



	//Redux ————————————————————————————

	//🔥【11】用 redux 的 {useSelector()} 来获取 store 中的 reducer 数据
	const tabs = useSelector((state: rootState) => state.tabs)
	// useEffect(() => {console.log(tabs.tabName)},[])
	

	//🔥【12】引入 useDispatch() 方法
	const dispatch = useDispatch()


	//🔥【13】定义函数来执行 dispatch 跟 hook 函数, 本质上这个孙组件的 onChangeTab 执行的是父组件 TitleBar 的 const[isActive, setIsActive] = useState('tab1') 这个 hook！
	function changeTabReduxAndTabActive(tab: string) {
			// 🔥执行改变 tab 的 hook 方法(来自父组件)
			onChangeTab(tab)

			// 🔥执行改变 store 中的 tabName 的方法
			dispatch({
				type: ITabsActionType.CHANGE,//记得在上方导入 enum 枚举接口！
				payload: { //传入最新的 tabName （在下面的 div 内传参）
					tabName: tab
				 }
			})
	}

	// console.log(isActive);
	return (
		<div>
			<div className="filter-container">
				<div 
					id='tab1'
					className={`tab-styles ${isActive==='tab1' ? 'filter-option-active' : 'filter-option'}`} //模板字符串添加多个类名的写法
					onClick={ (e)=> { changeTabReduxAndTabActive('tab1'); changePage('tab1'); changeBottomColor(e.target as HTMLElement) } }//🔥本质上是执行了父组件的函数, 封装一个函数的写法, ⚡️更直观的同时修改 payload 和 hook
					// onClick={ (e)=>{onChangeTab('tab1'); changePage('tab1'); changeBottomColor(e)} }//🔥本质上是执行了父组件的函数, 直接 (e)=>{onChangeTab('tab1')} 来执行 hook 的写法
					>All</div>
				<div 
					id='tab2'
					className={`tab-styles ${isActive==='tab2' ? 'filter-option-active' : 'filter-option'}`} //模板字符串添加多个类名的写法
					onClick={ (e)=> { changeTabReduxAndTabActive('tab2'); changePage('tab2'); changeBottomColor(e.target as HTMLElement) } }//🔥本质上是执行了父组件的函数, 封装一个函数的写法, ⚡️更直观的同时修改 payload 和 hook
					// onClick={ (e)=>{ onChangeTab('tab2'); changePage('tab2'); changeBottomColor(e) } }//🔥本质上是执行了父组件的函数, 直接 (e)=>{onChangeTab('tab1')} 来执行 hook 的写法
					>About</div>
				<div 
					id='tab3'
					className={`tab-styles ${isActive==='tab3' ? 'filter-option-active' : 'filter-option'}`} //模板字符串添加多个类名的写法
					onClick={ (e)=> { changeTabReduxAndTabActive('tab3'); changePage('tab3'); changeBottomColor(e.target as HTMLElement) } }//🔥本质上是执行了父组件的函数, 封装一个函数的写法, ⚡️更直观的同时修改 payload 和 hook
					// onClick={ (e)=>{ onChangeTab('tab3'); changePage('tab3'); changeBottomColor(e) } }//🔥本质上是执行了父组件的函数, 直接 (e)=>{onChangeTab('tab1')} 来执行 hook 的写法
					>Project</div>
				<div className="filter-bg" ref={bottomTabBar}></div>
			</div>
		</div>
	)
}

export default FilterTabs
