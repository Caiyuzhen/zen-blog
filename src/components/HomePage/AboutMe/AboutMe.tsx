import React from 'react'
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




const AboutMe = () => {
  return (
	<div className="main-container">
		<div className="top-container">
			<div className="title">Hi, I'm Zeno'</div>
			<div className="description">
				<p>A short personal history as it relates to design and development, and how I've found value in the cross-section between both disciplines.</p>
			</div>
		</div>
		<div className="bottom-containner">
			<div className="card-personal"> I’m a UX designer  and Front-end development enthusiasts from HongKong, Now I live in Shenzhen. My previous experience has focused on efficiency tools and communication tools. I'm also interested in some development libraries, so please feel free to share with me! 👏 </div>
			<div className="card-github">
				<img src={githubIcon} alt=""/>
			</div>
			<div className="card-twitter">
				<img src={twitterIcon} alt=""/>
			</div>
			<div className="card-okJike">
				<img src={okJikeIcon} alt=""/>
			</div>
			<div className="card-instagram">
				<img src={instagramIcon} alt=""/>
			</div>
			<div className="card-contactInfo">

			</div>
			<div className="card-facebook">
				<img src={facebookIcon} alt=""/>
			</div>
			<div className="card-whatApp">
				<img src={whatAppIcon} alt=""/>
			</div>
			<div className="card-profilePDF"></div>
			<div className="card-tikTok">
				<img src={tikTok} alt=""/>
			</div>
			<div className="card-zhiHu">
				<img src={zhiHu} alt=""/>
			</div>
			<div className="card-dribble">
				<img src={dribble} alt=""/>
			</div>
			<div className="card-discord">
				<img src={discord} alt=""/>
			</div>
			<div className="card-jueJin">
				<img src={jueJin} alt=""/>
			</div>
		</div>
	</div>
  )
}

export default AboutMe
