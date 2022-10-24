//1. 引入库
import { GraphQLClient, gql } from 'graphql-request'
import { FC, useEffect, useState } from 'react'

//2. 调用在 hygraph 的 project settings 的 API Access 中找到 Content API
const client = new GraphQLClient("https://api-ap-northeast-1.hygraph.com/v2/cl9dtkyc30l9q01umdgw4h1ms/master")

//3. 创建查询语句, 从 API Playground 中复制 query 语句，把第一个 query 去掉，保留双括号及其内容
const QUERY_PROJECT = gql`
	{
		projects {
			id,
			projectTitle,
			cover {
				id
			},
			description,
			category,
			content {
				html
			},
			datePublished,
		}
	}
`


//4. 封装成获取数据的 API 函数 
export async function getProjectData(): Promise<ProjectData> {

	//发送 query 请求获取数据
	const {projects} = await client.request(QUERY_PROJECT) 

	//返回 project 数据（是一个 promise 对象)
	return projects
}



//5. 定义返回数据的接口
interface ICover {
	id: string
}

export interface Iitem {
	id: string,
	projectTitle: string,
	cover: ICover,
	description: string,
	category: string,
	content: HTMLElement,
	datePublished: string,
}

export type ProjectData = Iitem[]



//6. 渲染数据的组件
const Test2:FC = () => {

	// 7. 定义接受数据的 hook
	const [data, setData] = useState<ProjectData>()

	//8. 调用 api 函数获取数据
	useEffect(()=>{
		getProjectData().then((data) => {
			setData(data)
			// console.log(data)
		}).catch((err)=>{
			alert(err)//请求失败，超时等的处理, 不用 setTimeout 了, 因为会进入这一步
		})
	},[])
		
	return (
		<>	
			{/* 9. 遍历数据并进行渲染 */}
			<div>{
				data && data.map((item: Iitem) => {
					return (
						<div key={item.id}>
							<h1>{item.projectTitle}</h1>
							<p>{item.description}</p>
							<p>{item.datePublished}</p>
						</div>
					)
				})}
			</div>
		</>
	)
}



export {
	Test2
}



