import React, {FC, useContext} from 'react'
import './AboutMe.less'
// import githubIcon from '../../../assets/svg/icon-github.svg'
import githubIcon from '../../../assets/svg/icon-maimai.svg'
import twitterIcon from '../../../assets/svg/icon-titter.svg'
import okJikeIcon from '../../../assets/svg/icon-okjike.svg'
import instagramIcon from '../../../assets/svg/icon-instagram.svg'
import facebookIcon from '../../../assets/svg/icon-facebook.svg'
import whatAppIcon from '../../../assets/svg/icon-whatApp.svg'
import tikTok from '../../../assets/svg/icon-tiktok.svg'
import zhiHu from '../../../assets/svg/icon-zhihu.svg'
import dribble from '../../../assets/svg/icon-dribble.svg'
import discord from '../../../assets/svg/icon-discord.svg'
import jueJin from '../../../assets/svg/icon-jueJin.svg'
import ZenoAvatar from '../../../assets/img/avatar/ZenoAvatar-normal.png'
import changeIcon from '../../../assets/svg/icon-tran.svg'
import contactInfo from '../../../assets/svg/icon-contact.svg'
import book from '../../../assets/svg/icon-book.svg'
import download from '../../../assets/svg/icon-download.svg'
import profilePDF from '../../../assets/pdf/Zeno_Senior UX Designer.pdf'
import { MouseContext } from '../../Mouse/useMouseContext'
import {PersonalCard} from './personalCard/personalCard'

const AboutMe:FC = () => {

	const { cursorType, cursorChangeHandler } = useContext(MouseContext)//引入添加样式

	const pdfURL = profilePDF //获得 pdf 的链接

	function downloadPDF (url: string):void  {

		// 创建一个 a 标签来实现自动下载功能
		const elementA = document.createElement('a')
		elementA.setAttribute('href', url)
		elementA.setAttribute('download', '')
		elementA.click()
		console.log('点了')
	}


	return (
		<div className="aboutMe-container">
			<div className="top-container">
				<div className="title">Hi, I'm Zeno</div>
				<div className="description">
					<p>I hope that these social media bento cards will help you get to know me better and will help us collaborate better!</p>
				</div>
			</div>

			<div className="bottom-container">
				{/* Basic info toggle effect */}
				{/* PersonalCard 的实例 */}
				<PersonalCard cursorType={cursorType} cursorChangeHandler={cursorChangeHandler}/>
				<div className="card-github"
					onClick={ ()=>window.open('https://maimai.cn/contact/share/card?u=hfzufwz9m7gu&_share_channel=copy_link') }
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={githubIcon} alt=""/>
				</div>
				<div className="card-twitter"
					onClick={ ()=>window.open('https://twitter.com/Caizen5') }
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={twitterIcon} alt=""/>
				</div>
				<div className="card-okJike"
					onClick={ ()=>window.open('https://m.okjike.com/users/f559715a-4b9e-4f09-bc9d-6db48752feac?ref=PROFILE_CARD&utm_source=user_card') }
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={okJikeIcon} alt=""/>
				</div>
				<div className="card-instagram"
					onClick={ ()=>window.open('https://www.instagram.com/yuzennn/') }
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={instagramIcon} alt=""/>
				</div>
				<div className="card-contactInfo"
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<div className="title-contact">
						<img src={contactInfo} alt="" />
						<div>Contact</div>
					</div>
					<div className="detail-info">
						<div className="info">Tel: <p className="info-text">&nbsp;&nbsp;13622382958</p></div>
						<div className="info">Mail: <p className="info-text">&nbsp;&nbsp;caiyuzhen00@gmail.com</p></div>
						<div className="info">Wechat: <p className="info-text">&nbsp;&nbsp;c-y-zhen</p></div>
						<div className="info">QQ: <p className="info-text">&nbsp;&nbsp;418590624</p></div>
					</div>
				</div>
				<div className="card-facebook"
					onClick={ ()=>window.open('https://www.facebook.com/zen.cai.50') }
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={facebookIcon} alt=""/>
				</div>
				<div className="card-whatApp"
					onClick={ ()=>window.open('https://wa.me/85295108666') }
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={whatAppIcon} alt=""/>
				</div>
				<div className="card-profilePDF"
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<div className="title-pdfDL" >
						<img src={book} alt=""/>
						<div>Profile</div>
					</div>
					<img src={download} alt="" onClick={ ()=> downloadPDF(pdfURL) }/>
				</div>
				<div className="card-tikTok"
					onClick={ ()=>window.open('https://v.douyin.com/DdspMYC/') }
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={tikTok} alt=""/>
				</div>
				<div className="card-zhiHu"
					onClick={ ()=>window.open('https://www.zhihu.com/people/zhen-xian-sheng-83-11') }
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={zhiHu} alt=""/>
				</div>
				<div className="card-dribble"
					onClick={ ()=>window.open('https://dribbble.com/Co2Zen') }
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={dribble} alt=""/>
				</div>
				<div className="card-discord"
					onClick={ ()=>window.open('https://discord.gg/AD4xqavM') }
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={discord} alt=""/>
				</div>
				<div className="card-jueJin"
					onClick={ ()=>window.open('https://juejin.cn/user/1042804738899437') }
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={jueJin} alt=""/>
				</div>
			</div>
		</div>
	)	
}

export default AboutMe
