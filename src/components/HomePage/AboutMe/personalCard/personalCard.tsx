import React from 'react'
import { MouseContext } from '../../../Mouse/useMouseContext'
import changeIcon from '../../../../../src/assets/svg/icon-tran.svg'
// import ZenoAvatar from '../../../../../src/assets/img/avatar/ZenoAvatar-normal.png' //默认头像
import './personalCard.less'
// import avatarData from '../../../../../src/assets/data/avatarData.json'

const avatarData = [
	{
	  id: 0,
	  name: "avatar-01",
	  url: "/src/assets/img/avatar/avatar-01.png",
	  describe:"I'm a UX designer and Front-end development enthusiasts from ShenZhen. My previous experience has focused on efficiency tools and communication tools. I'm also interested in some development libraries, so please feel free to share with me! 👏",
	},
	{
	  id: 1,
	  name: "avatar-02",
	  url: "/src/assets/img/avatar/avatar-02.png",
	  describe:"My best work day is in the morning and evening, and my best work week is on Wednesday, if you want to discuss very important events with me you can refer to these times, of course there is no sleepiness or tiredness that a cup of coffee can not solve ☕️",
	},
	{
	  id: 2,
	  name: "avatar-03",
	  url: "/src/assets/img/avatar/avatar-03.png",
	  describe:"In life, there are two cats accompany me, One is a silver gradient cat and one is a cream cat, they add more color to my life. If you are also a cat lover, welcome to communicate with me about the fun of cats 😄",
	},
	{
	  id: 3,
	  name: "avatar-04",
	  url: "/src/assets/img/avatar/avatar-04.png",
	  describe:"I usually record my thoughts in Article and also share them on different social media to make more friends, of course most of them are unstructured personal reflections, the intention is to give people more information input. Welcome for follow my social media if you are interested 🌚",
	},
	{
	  id: 4,
	  name: "avatar-05",
	  url: "/src/assets/img/avatar/avatar-05.png",
	  describe:"My preference is for interactive experiences and programming techniques that are a good bridge to the world. I believe that programming technology is the underlying code that makes the world run, and design is an effective means of pushing the boundaries of perception 🌍",
	},
	{
	  id: 5,
	  name: "avatar-06",
	  url: "/src/assets/img/avatar/avatar-06.png",
	  describe:"I am rather nerdy, not good at sports, the only sport is playing badminton, if you also have this hobby welcome to find a weekend with me to play badminton, of course, I am not particularly good at badminton 😂",
	},
  ];

interface ICursor {
	cursorType: string;
	cursorChangeHandler: (mouseEve: string) => void;
}


type IPersonalCardState = {
	num: number,
	allAvatarData: {
		id: number,
		name: string,
		url: string,
		describe: string
	}[],
}

// 类里边有 【头像】跟 【文本】的数据, 还有一个切换【头像】的方法
export class PersonalCard extends React.Component<ICursor, IPersonalCardState> {
	constructor(props: ICursor) { //⚡️类型是 [] 数组！
		super(props)
		this.state = {
			num: 0,
			// allAvatarData: [] //state 保存所有 avatar 数据
			allAvatarData: avatarData
		}
	}

	// 打印 allAvatarData
	componentDidUpdate() {
		console.log(this.state.allAvatarData)
	}

	// 组件挂载完成后, 发送请求, 获取头像数据, 并更新 state
	// componentDidMount() {
		// // 发送异步请求
		// fetch('../../../../../src/assets/data/avatarData.json')
			// .then(res => res.json()) //转为 json 数据
			// .then(data => {this.setState({allAvatarData: data})}) //{} 转为数组  -> 到 data 并转为一个数组
			// 存入 avatarData 数据
			// const avatarJson = JSON.stringify(avatarData)
  			// this.setState({allAvatarData: JSON.parse(avatarJson)})
			// this.setState({allAvatarData: avatarData})
			// console.log(this.state.allAvatarData)
	// }


	handleChangeAvatar() {
		const avatarCount = this.state.allAvatarData.length //计算总数
		// 随机返回一个数, 并且随机数不能跟上一次的重复
		let newRandomNum = Math.floor(Math.random() * avatarCount) //随机数
		if(newRandomNum === this.state.num) { //如果随机数和上一次的一样, 就重新生成一个
			newRandomNum = Math.floor(Math.random() * avatarCount) //重新生成一个随机数
		}
		// 修改 state 内的随机数
		this.setState({num: newRandomNum})
		// const {url} = this.state.allAvatarData[randomNum] //随机数对应的 url , 解构赋值
		// const {describe} = this.state.allAvatarData[randomNum] //随机数对应的 describe , 解构赋值
		// console.log(url, describe);
	}

	handleRotateIn() {
		const btn = document.querySelector('.changeAvatar') as HTMLImageElement
		btn.style.transform = 'rotate(360deg)'
	}

	handleRotateOut() {
		const btn = document.querySelector('.changeAvatar') as HTMLImageElement
		btn.style.transform = 'rotate(-360deg)'
	}

	handleAvatarMouseDown() {
		// 如果有数据才执行
		if(this.state.allAvatarData.length > 0) {
			// 获得 avatar 元素
			const avatar = document.querySelector('#avatar') as HTMLImageElement
			const btn = document.querySelector('.changeAvatar') as HTMLImageElement
			avatar.style.transform = 'scale(0.9) rotate(-12deg)'
			btn.style.transform = 'scale(0.9) rotate(720deg)'
		}
	}

	handleAvatarMouseUp() {
		// 如果有数据才执行
		if(this.state.allAvatarData.length > 0) {
			// 获得 avatar 元素
			const avatar = document.querySelector('#avatar') as HTMLImageElement
			const btn = document.querySelector('.changeAvatar') as HTMLImageElement
			avatar.style.transform = 'scale(1) rotate(0deg)'
			btn.style.transform = 'scale(1) rotate(360deg)'
		}
	}

	
	render(){
		// console.log(this.state.allAvatarData[1]); // 测试 fetch 到的数据
		// if(this.state.allAvatarData.length === 0) return null //如果没有数据, 就不渲染, 因为是异步函数！
		if(this.state.allAvatarData.length === 0) {
			return (
				<div className="card-personal skeleton">
					<div className="avatar-container">
						<div className="avatar-skeleton" />
						<div className="change-avatar-skeleton" />
					</div>
					<div className="text-container">
						<div className="name-skeleton" />
						<div className="description-skeleton" />
					</div>
				</div>
			)
		}



		const {url, describe} = this.state.allAvatarData[this.state.num] //从 state 的索引中 {解构赋值} 取得头像, 通过随机数修改这个索引就可以切换头像, 
		// console.log(url, describe)

		const { cursorType, cursorChangeHandler } = this.props //从函数组件中传入的 props 数据
	
        return(
            <div className="card-personal"
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				> 
					<div className="avatar-container">
						<img className="avatar" id="avatar" src={url} alt="" />
						<img 
							className="changeAvatar" src={changeIcon} alt="" 
							onClick={ () => { //箭头函就不需要 bind(this) 了
								this.handleChangeAvatar()}
							}
							onMouseEnter={ ()=>this.handleRotateIn()}
							onMouseLeave={ ()=>this.handleRotateOut()}
							onMouseDown={ ()=>this.handleAvatarMouseDown()
							}
							onMouseUp={ ()=>this.handleAvatarMouseUp()
							}
						/> 
					</div>
					<div className="personal-description">
						<p>{describe}</p>
					</div>
				</div>
        )
    }
}