import React, {useEffect} from 'react'

//🔥🔥封装一个交叉观察器的 utils，需要传入【想监听的元素】、【hook 的状态】、【hook 状态改变的 useState函数】
export function useEleOnScreen (
	obj: React.RefObject<HTMLDivElement>, 
	isVisibleState: boolean, 
	setisVisibleStateFn: (state: boolean) => void): [boolean] { //目标元素


	const options = {
		rootMargin:'5px 2% 0px 0px', //这个一定要带单位! 可以改变相交区域的位置(相当于给它加上、右、下、左的 margin），一定要带单位, 如果相交目标是浏览器窗口的为参照的话，一定要带百分比(🌟-50%就是窗口的一半!)。（ + 正值向外延伸， - 负值向内缩小）
		threshold: [0, 0.5, 1] //相交的比例（0～1）的范围，还可以传数组，设置多个比例，比如[0.2, 0.4, 0.6],每达到某个比例的话都会触发
	}

	const callBackFn = (entries: IntersectionObserverEntry[]) => {
		entries.forEach(item => {
			if(item.intersectionRatio >= 0.5) {  //（出现）判断相交比例是否 >= 0.5 (比如向上滚动达到 0.5 的相交比例，则显示)
				const [entry] = entries
				setisVisibleStateFn(entry.isIntersecting) // true, 表示相交了, 就把值设置给 hook
			} 
			// else if (item.intersectionRatio <= 0.5) {  //（复原）判断相交比例是 <= 0.5  (比如向下滚动达到 0.5 的相交比例，则显示)
			// 	const [entry] = entries
			// 	setisVisibleStateFn(false) //= false, 表示没相交, 就把值设置给 hook
			// }
		})
	}

	useEffect(() => {
		const obs = new IntersectionObserver(callBackFn, options) //创建一个观察器实例
		if (obj.current) {
			obs.observe(obj.current as HTMLDivElement)
		}
		return () => {
			if(obj) {
				obs.unobserve(obj.current as HTMLDivElement) //组件卸载时就不监听了
			}
		}
	},[obj, options]) //有元素, 有参数才开始观察
	console.log(isVisibleState);
	return [isVisibleState]//最终把参数的值返回出去
}

