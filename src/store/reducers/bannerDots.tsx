//【1】. 建立一条 reducer

//【2】.定义【状态】的数据类型
export interface IBannerDotsState {
	bannerDotValue: number
}


//【3-1】实例化一个初始数据(方法一:写死, 不保存到本地, 可以只写这步, 然后把这个初始值传入下面的函数)
const initIBannerDotState : IBannerDotsState = {
	bannerDotValue: 0 //默认值  //注意，最后要乘以这个位移的距离！所以得是数字！
}


//【4】.定义【action】的枚举
export enum IBannerDotStateActionType {
	INIT,
	CHANGE,
}


//【5】定义不同 【action】下的 Case 会发生什么操作的函数
const bannerDots = (
	state: IBannerDotsState = initIBannerDotState,
	action: {type: IBannerDotStateActionType, payload: any}
) => {
	switch(action.type) {
		case (IBannerDotStateActionType.INIT):
			return state //初始值不变
		case (IBannerDotStateActionType.CHANGE):
			return {...state, ...action.payload} //展开最新的数据， 展开最新的 payload
		default:
			return state
	}
}


export default bannerDots
