import React, {FC,ReactElement} from 'react'
import { useState, useEffect, useRef } from 'react'
import HALO from "vanta/dist/vanta.halo.min";//⚡️更改这个名称来改变背景效果
import * as THREE from "three";
import TitleBar from '../TitleBar/TitleBar';
import MainContainer from '../MainContainer/MainContainer';
import './HomePage.less'
import AboutMe from '../AboutMe/AboutMe';


interface IProps  {
	// children? : ReactElement | ReactElement[] 
	children? : React.ReactNode | React.ReactNode[],//⚡️如果要在上层嵌套平行组件，则需对 children 进行声明
}



const HomePage:FC<IProps> = (props: IProps):ReactElement => {

	const [vantaEffect, setVantaEffect] = useState(0);

	const vantaRef = useRef(null)

	const children = props.children

	const [showPage, setShowPage] = useState('all')


	useEffect(() => {
		if(!vantaEffect){
			setVantaEffect(
				HALO({
					el: vantaRef.current,
					THREE,
					// 👇额外的效果(不同背景的额外参数放这里，可以在官网调试看效果)
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 400.00,
					minWidth: 400.00,
					size: 2.50
				})
			)
		}
		return () => { 
		// vantaRef.current = null //如果依赖 Ref 变化才有可能要销毁
		}

	},[])

	return (
		<div className='home-page'>
			<div className="vanta-bg" ref={vantaRef}>
				{/* 👇子组件 */}
				{/* {children} */}
				<TitleBar/>
				{showPage==='all' && <MainContainer/>}
				{showPage==='aboutMe' && <AboutMe/>}
			</div>

		</div> //🔥 children 相当于子组件！
	)
}


export default HomePage
