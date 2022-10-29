// 🌟🌟节流的工具函数

function Trottle(fn: (...arg:any[]) => any, delay: number = 300) {
	
	let timer: string | null | NodeJS.Timeout = null//节流，在指定时间内只执行一次

	return function (this:unknown, ...args:any[]) {
		if (timer) { //节流,每隔 100ms 停一下
			return
		}
		timer = setTimeout(() => {
			fn.bind(this)(...args) //🔥🔥把 this 指向跟参数返回给函数 fn!
			timer = null;
		}, delay);
	}
}

export default Trottle
