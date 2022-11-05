// 测试 api 用的, 不会真正的打包进去, 只是本地跑一下看看数据

//express.jx 基本配置
import { Client } from "@notionhq/client"

import express from "express"

const server = express()
server.use(express.json())//把获取的数据转换成 json 格式
const port = 3005


// 获取 Notion 数据
const NOTION_KEY = 'secret_5S1GPozbBlmooNRw4JQb2X6zOMacXSz3jqpEpC0p63q'
const NOTION_DB_ID = '4acd3ad8897c4605aebad3e66f1ab26a'

//初始化 notion 客户端
const notion = new Client({ auth: NOTION_KEY })

//获取 title 数据的函数, 转化为较为简单的结构
async function getAllTitles() {
	// notion 获取数据库的 api
	const result = await notion.databases.query({ database_id: NOTION_DB_ID })
	const titles = new Map()

	//遍历 db 中的 page, 把数据转化为简单的结构
	result.results.forEach((page) => {
		titles.set(page.id, {
			id: page.id,
			title: page.properties.Title.title[0].plain_text,
			createTime: page.created_time,
			content: page.properties.detail.rich_text[0].text.content,
			cover: page.properties.Cover.files[0].file.url
		})
	})

	//组装数据, reduce 能够把元素累加起来
	let titleDa = [...titles.values()].reduce((acc, curr) => {
		acc.push(curr)
		return acc
	}, [])
	return titleDa

}

// 定义获取 db 数据的 api
server.get("/getTitles", async (req, res) => {
	try {
		let titlesData = await getAllTitles() //接受上面获取 title 数据的结果
		res.json(titlesData) //发送给客户端
	} catch (err) {
		console.log(err)
		res.sendStatus(500)
	}
})


// server.get('/', (req, res) => {
// 	res.send('Hello World!')
// })



server.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})


