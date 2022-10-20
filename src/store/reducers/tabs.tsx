//【1】. 建立一条 reducer


//【2】.定义【状态】的数据类型
export interface ITabState{
	tabName: string
}


//【3-1】实例化一个初始数据(方法一:写死, 不保存到本地, 可以只写这步, 然后把这个初始值传入下面的函数)
const initTabState : ITabState = {
	tabName: 'tab1'//默认值
	
}

//【3-2】🛢️获取保存到本地的数据的方法: 初始化时候, 拿到本地 localStorage 的数据 (方法二:本地存储)
const loadState = () => {
	const localTabState = localStorage.getItem('tabState')
	if (localTabState === null) {
		return {tabName: 'tab1'}
	} else {
		return {tabName: localTabState}
	}
}



//【4】.定义【action】的枚举
export enum ITabsActionType {
	INIT,
	CHANGE,
}


//【5】定义不同 【action】下的 Case 会发生什么操作的函数
// const tabs = (state: ITabState = initTabState,  action: {type: ITabsActionType, payload: any}) => {  //不把状态保存到本地
const tabs = (state: ITabState = loadState(),  action: {type: ITabsActionType, payload: any}) => {  //🛢️把状态保存到本1
	switch(action.type){
		case (ITabsActionType.INIT): 
			return state //初始值不变
		case (ITabsActionType.CHANGE): 
			return {...state, ...action.payload}//展开最新的数据， 展开最新的 payload
		default:
			return state
	}
}




export default tabs