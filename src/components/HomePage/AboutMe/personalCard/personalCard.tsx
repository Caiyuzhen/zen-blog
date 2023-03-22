import axios from 'axios'
import React, { useContext } from 'react'
import { MouseContext } from '../../../Mouse/useMouseContext'


// 类里边有 【头像】跟 【文本】的数据, 还有一个切换【头像】的方法
export class PersonalCard extends React.Component {
	// avatar 数据
	state = {
		avatarData: {
			name: 'avatar-01',
			url: 'src/assets/img/avatar/avatar-01.png',
			describe: 'this is some description.'
		}
	}

	// axios 异步函数发送请求, 获取头像数据
	async getAvatarData() {
		const res = await axios.get('src/assets/data/avatarData.json')
		console.log(res)
	}
	
	render(){
        return(
            <div className="card-personal"
					// onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					// onMouseLeave={ ()=>cursorChangeHandler('') }
				> 
					<div className="avatar-container">
						<img className="avatar" src={} alt="" />
						<img className="changeAvatar" src={} alt="" />
					</div>
					<div className="personal-descrip">
						<p>I'm a UX designer  and Front-end development enthusiasts from HongKong, Now I live in Shenzhen. My previous experience has focused on efficiency tools and communication tools. I'm also interested in some development libraries, so please feel free to share with me! 👏 </p>
					</div>
				</div>
        )
    }
}