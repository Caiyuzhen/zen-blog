/// <reference types="vite/client" />

declare module '*.module.less' {
	const classes: { readonly [key: string]: string };
	export default classes;
  }

  //引入第三方库需要声明一下！
declare module '*.less'
declare module 'react-tilty' 
