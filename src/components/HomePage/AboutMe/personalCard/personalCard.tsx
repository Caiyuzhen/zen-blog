import React from 'react'
import { MouseContext } from '../../../Mouse/useMouseContext'
import changeIcon from '../../../../../src/assets/svg/icon-tran.svg'
import ZenoAvatar from '../../../../../src/assets/img/avatar/ZenoAvatar-normal.png' //默认头像


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
			allAvatarData: [] //state 保存 avatar 数据
		}
	}

	// 组件挂载完成后, 发送请求, 获取头像数据, 并更新 state
	componentDidMount() {
		// 发送异步请求
		fetch('../../../../../src/assets/data/avatarData.json')
			.then(res => res.json()) //转为 json 数据
			.then(data => {this.setState({allAvatarData: data})}) //{} 转为数组  -> 到 data 并转为一个数组
	}


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

	
	render(){
		// console.log(this.state.allAvatarData[1]); // 测试 fetch 到的数据
		if(this.state.allAvatarData.length === 0) return null //如果没有数据, 就不渲染, 因为是异步函数！
		const {url, describe} = this.state.allAvatarData[this.state.num]
		// console.log(url, describe)

		const { cursorType, cursorChangeHandler } = this.props
	
        return(
            <div className="card-personal"
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				> 
					<div className="avatar-container">
						<img className="avatar" src={url} alt="" />
						{/* changeIcon */}
						<img 
							className="changeAvatar" src={changeIcon} alt="" 
							// 点击
							onClick={this.handleChangeAvatar.bind(this)}
						/> 
					</div>
					<div className="personal-description">
						<p>{describe}</p>
					</div>
				</div>
        )
    }
}