// 存放全局的接口类型
interface ICover {
	id: string
}

export interface Iitem {
	id: string,
	title: string,
	cover? : ICover,
	description? : string,
	category? : string,
	content? : string,
	datePublished? : string,
	// content: HTMLElement,
}

export type ProjectData = Iitem[]


// BannerCard 组件的数据类型， IBannerCard[]
export type IBannerCard = {
	id: string,
	title: string,
	des : string,
}


// 范型接口, 返回的数据类型是 T , 可以在 Axios 请求时候指定返回的数据类型
export interface ApiResponse<T> {
	data: T //T 传入什么类型, 返回的就是什么类型, 比如 T 传入的是 <IBannerCard> 的类型
}


// ArticleList 组件的数据类型 IArticleList[]
export type IArticleList = {
	id: number,
	title: string,
	des: string,
	date: string,
	hashTag: string,
}
