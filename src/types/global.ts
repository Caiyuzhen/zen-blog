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