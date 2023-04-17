// 🌟🌟节流的工具函数

function Trottle(fn: (...arg:any[]) => any, delay: number = 300) {
	
	let timer: string | null | NodeJS.Timeout = null//用 timer 变量来节流，在指定时间内只执行一次

	return function (this:unknown, ...args:any[]) { //this 跟 args 是为了把函数的 this 指向跟 参数 绑定回函数身上
		if (timer) { 
			return //如果 null 则暂停
		}
		timer = setTimeout(() => {
			fn.bind(this)(...args) //🔥🔥把 this 指向跟参数返回给函数 fn!
			timer = null;
		}, delay)  //节流,每隔 delay 毫秒 null 停一下
	}
}

export default Trottle
