//【1】. 建立一条 reducer


//【2】.定义【状态】的数据类型
export interface ITabState{
	tabName: string
}

//【3】.实例化一个初始数据
const initTabState : ITabState = {
	tabName: 'tab1'//默认值
	
}

//【4】.定义【action】的枚举
export enum ITabsActionType {
	INIT,
	CHANGE,
}

//【5】定义不同 【action】下的 Case 会发生什么操作的函数
const tabs = (state: ITabState = initTabState,  action: {type: ITabsActionType, payload: any}) => {
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