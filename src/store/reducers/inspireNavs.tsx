//【1】. 建立一条 reducer

//【2】.定义【状态】的数据类型
export interface IinspireNavState {
	inspireNavState: number
}

//【3-1】实例化一个初始数据(方法一:写死, 不保存到本地, 可以只写这步, 然后把这个初始值传入下面的函数)
const initInspireNavState: IinspireNavState = {
	inspireNavState: 1 //默认值, 根据这个值来判断要显示哪项内容 
}

//【4】.定义【action】的枚举
export enum IinspireNavStateActionType {
	INIT,
	CHANGE,
}

//【5】定义不同 【action】下的 Case 会发生什么操作的函数
const inspireNavState = (
	state: IinspireNavState = initInspireNavState,
	action: {type: IinspireNavStateActionType, payload:any}
) => {
	switch(action.type) {
		case (IinspireNavStateActionType.INIT):
			return state //初始值不变
		case (IinspireNavStateActionType.CHANGE):
			return {...state, ...action.payload} //展开最新的数据， 展开最新的 payload
		default:
			return state
	}
}

export default inspireNavState