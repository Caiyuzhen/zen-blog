// 抽离出来的路由配置组件, 核心用于配置路由关系
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../../src/App'
import HomePage from '../components/HomePage/HomePage'
import Articles from '../../src/components/HomePage/Articles/Articles' 
import MainContainer from '../../src/components/HomePage/WorkContainer/MainContainer'
import AboutMe from '../components/HomePage/AboutMe/AboutMe'
import NotFound from '../../src/components/NotFound/NotFound'
import ProjectA from '../components/HomePage/WorkContainer/pages/ProjectA'
import { ProjectB } from '../components/HomePage/WorkContainer/pages/ProjectB'
import ProjectC from '../components/HomePage/WorkContainer/pages/ProjectC'


// 生成路由实例(管路径，管组件渲染 【Link to 更改路径】、【Outlet 路由渲染】)
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/homepage',
		element: <HomePage/>,
		children: [
			{
				path: '/homepage/about',
				element: <AboutMe/>
			},
			{
				path: '/homepage/works',
				element: <MainContainer/>
			},
			{
				path: '/homepage/articles',
				element: <Articles/>
			}
		]
	},
	{
		path: '/homepage/works/projectA',
		element: <ProjectA/>
	},
	{
		path: '/homepage/works/projectB',
		element: <ProjectB/>
	},
	{
		path: '/homepage/works/projectC',
		element: <ProjectC/>
	},
	{
		path: '*',
		element: <NotFound/>
	}
])

export default router

			