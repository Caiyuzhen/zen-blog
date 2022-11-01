import React, {FC, useContext} from 'react'
import './AboutMe.less'
import githubIcon from '../../../assets/svg/icon-github.svg'
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
import ZenoAvatar from '../../../assets/img/ZenoAvatar-normal.png'
import changeIcon from '../../../assets/svg/icon-tran.svg'
import contactInfo from '../../../assets/svg/icon-contact.svg'
import book from '../../../assets/svg/icon-book.svg'
import download from '../../../assets/svg/icon-download.svg'
import profilePDF from '../../../assets/pdf/test.pdf'
import { MouseContext } from '../../Mouse/useMouseContext'


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
					<p>A short personal history as it relates to design and development, and how I've found value in the cross-section between both disciplines.</p>
				</div>
			</div>

			<div className="bottom-container">
				<div className="card-personal"
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				> 
					<div className="avatar-container">
						<img className="avatar" src={ZenoAvatar} alt="" />
						<img className="changeAvatar" src={changeIcon} alt="" />
					</div>
					<div className="personal-descrip">
						<p>I'm a UX designer  and Front-end development enthusiasts from HongKong, Now I live in Shenzhen. My previous experience has focused on efficiency tools and communication tools. I'm also interested in some development libraries, so please feel free to share with me! 👏 </p>
					</div>
				</div>
				<div className="card-github"
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={githubIcon} alt=""/>
				</div>
				<div className="card-twitter"
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={twitterIcon} alt=""/>
				</div>
				<div className="card-okJike"
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={okJikeIcon} alt=""/>
				</div>
				<div className="card-instagram"
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
						<div className="info">Tel: <p className="info-text">13622382958</p></div>
						<div className="info">Mail: <p className="info-text">caiyuzhen00@gmail.com</p></div>
						<div className="info">Mail: <p className="info-text">c-y-zhen</p></div>
						<div className="info">QQ: <p className="info-text">418590624</p></div>
					</div>
				</div>
				<div className="card-facebook"
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={facebookIcon} alt=""/>
				</div>
				<div className="card-whatApp"
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
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={tikTok} alt=""/>
				</div>
				<div className="card-zhiHu"
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={zhiHu} alt=""/>
				</div>
				<div className="card-dribble"
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={dribble} alt=""/>
				</div>
				<div className="card-discord"
					onMouseEnter={ ()=>cursorChangeHandler('hovered') }
					onMouseLeave={ ()=>cursorChangeHandler('') }
				>
					<img src={discord} alt=""/>
				</div>
				<div className="card-jueJin"
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
