import blink from '../../../../../src/assets/content/articles/articleList/img/articleA/blink.jpg'
import poem from '../../../../../src/assets/content/articles/articleList/img/articleA/poem.jpeg'
import nelson from '../../../../../src/assets/content/articles/articleList/img/articleA/nelson.jpg'
import hyperText from '../../../../../src/assets/content/articles/articleList/img/articleA/hyperText.png'
import projectXANADU from '../../../../../src/assets/content/articles/articleList/img/articleA/projectXANADU.png'
import interNet from '../../../../../src/assets/content/articles/articleList/img/articleA/interNet.png'
import fb from '../../../../../src/assets/content/articles/articleList/img/articleA/fb.png'
import sonOfnet from '../../../../../src/assets/content/articles/articleList/img/articleA/sonOfnet.png'
import roam from '../../../../../src/assets/content/articles/articleList/img/articleA/roam.png'
import trillium from '../../../../../src/assets/content/articles/articleList/img/articleA/trillium.png'
import ubiquitousLink from '../../../../../src/assets/content/articles/articleList/img/articleA/ubiquitousLink.png'
import styled from '@emotion/styled'
import { css } from '@emotion/react'


export default function articleOneTempDetail () {
	return (
		<div>
			<p>
				We think about what is information, what is a carrier of information, what is connection, what is knowledge, and how we see it on the level of individuals, organizations, companies and even the whole society and culture. As the Notion team says, we are only using new technologies to continue the thinking of our predecessors, not to create something unique from 0-1.
				I. Information and Media
				<br/>
				<br />
				From an academic point of view, Shannon, the founder of information theory, believes that information is a third kind of matter, distinct from matter and energy, and that information is essentially data that reflects the properties of matter. Relatively there are carriers used to carry information, such as mud slabs, bamboo slips, paper, bits, etc. We all know that the human brain has 100 billion neurons, which is equivalent to about 7.8 billion terabytes of storage capacity, the human brain can also be seen as a carrier of information.
			</p>
			<div style={{textAlign: "center"}}>
				<img src={blink} 
					css={css`
						width: 400px;
						border-radius: 12px;
						margin: 20px 0 40px 0;
			  
					@media (max-width: 520px) {
						width: 100%;
					}`}
				/>
			</div>

			<p
				css={css`
					font-size: 28px !important;
					font-family: "GTEestiProText-medium" !important;
		  
				@media (max-width: 520px) {
					font-size: 24px !important;
				}`}

			>Information and Media</p>
			<p>
				The traditional information medium is isolated, for example, Jimmy is a carpenter, in his life's work will be recorded in a small book, the information is private, one day Jimmy lost it is equivalent to this piece of information will disappear, Jimmy's disciples have to learn from scratch again, so in that time of information scarcity, the ancient people to continue the information is very difficult.
				<br/>
				<br />

				So the ancients would not have a continuation of the message? The answer is definitely no. Let's look at a poem:
				<br/>
				<br />
				《短歌行》·曹操
				<br/>
				对酒当歌，人生几何？譬如朝露，去日苦多。
				<br/>
				慨当以慷，幽思难忘。何以解忧？唯有杜康。
				<br/>
				青青子衿，悠悠我心。但为君故，沉吟至今。
				<br/>
				呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。 
				<br/>
				​明明如月，何时可掇？忧从中来，不可断绝。 
				<br/>
				越陌度阡，枉用相存。契阔谈宴，心念旧恩。
				<br/>
				月明星稀，乌鹊南飞，绕树三匝，何枝可依？
				<br/>
				山不厌高，海不厌深。周公吐哺，天下归心。 
				<br/>
				<br/>

				Let's look at another verse:
				<br/>
				《诗经·郑风·子衿》
				<br/>
				青青子衿，悠悠我心。
				<br/>
				纵我不往, 子宁不嗣音?
				<br/>
				<br/>

				One more paragraph:
				<br/>
				《诗经·小雅·鹿鸣》
				<br/>
				呦呦鹿鸣，食野之苹。
				<br/>
				我有嘉宾，鼓瑟吹笙。
				<br/>
				<br/>

				From a literary point of view, the ancients often used the techniques of "borrowing" and "applying" in the process of creation, which, from our modern perspective, is not a two-way link, but it is difficult for us who have not read the book to discover this connection at one time.
			</p>

			<div style={{textAlign: "center"}}>
				<img src={poem} 
					css={css`
					width: 400px;
					border-radius: 12px;
					margin: 20px 0 40px 0;
		  
					@media (max-width: 520px) {
						width: 100%;
					}`}
				/>
			</div>

			<p
				css={css`
					font-size: 28px !important;
					font-family: "GTEestiProText-medium" !important;
		  
				@media (max-width: 520px) {
					font-size: 24px !important;
				}`}

			> Hypertext Pioneers</p>

			<p>
				It wasn't until the 1960s that a pioneer emerged -- Ted Nelson, a sociologist who was working as a librarian, discovered that using computers to store knowledge could replace or even surpass libraries because you could see various versions back, information wasn't lost, and new people could continue to add more and more new And it is an open network, whereas a library is just a closed folder where information is isolated and dead.
				In the process, he found that the process of creating a paper would often produce many footnotes, and these footnotes would be extended to relate to more paper material.
			</p>

			<div css={css`
					display: flex;
					flex-direction: row;
					gap: 24px;
					justify-content: center;
					align-items: center;
					box-sizing: border-box;

					@media (max-width: 920px) {
						flex-direction: column;
						width: 100%;
				}`}
				>
				<img src={nelson} 
					css={css`
						width: 400px;
						height: 320px;
						border-radius: 12px;
						/* 图片裁切 */
						object-fit: cover;
						/* 调整图片位置 */
						object-position: 10% 10%;
						margin: 20px 0 40px 0;
			
						@media (max-width: 520px) {
							width: 100%;
						}`}
				/>

				<img src={hyperText} 
					css={css`
					width: 400px;
					height: 320px;
					border-radius: 12px;
					/* 图片裁切 */
					object-fit: cover;
					margin: 20px 0 40px 0;
		  
					@media (max-width: 520px) {
						width: 100%;
					}`}
				/>
			</div>
	
			<p>
				Nelson also tried to develop a system where everyone could create their own ideas and quote other people's ideas as "footnotes", and it was borderless, like an anarchic land, without centralized media mouthpieces, with equal rights of information.
			</p>

			<div style={{textAlign: "center"}}>
				<img src={projectXANADU} 
				css={css`
					width: 400px;
					border-radius: 12px;
					margin: 20px 0 40px 0;
		
					@media (max-width: 520px) {
						width: 100%;
					}`}
				/>
			</div>


			<p>
				{/* <ul></ul> */}
				The core ideas of the Upper Capital Plan are these:
				- Opposition to the directory structure, which is hierarchical and authoritarian
				- Any information can generate free two-way links
				- traceability of information to its original author
				- Deep version control, where every change is recorded and visualized
				- Creators are free to publish content
				- The creator has ownership of the content and can be paid for it

				There is no doubt that hyperlinks have become the utility of life in modern times, while 60 years ago they were very much ahead of their time and could not be implemented due to the technical conditions of the time. But the old man was so resilient that in 2014 he finally released a preview version and started his own column on Youtube to convey his ideas: 👉 https://xanadu.com/

				It was not until 1990 when Tim-Berns Lee invented the Internet by integrating URI, HTTP and HTML technologies that Nelson's vision began to be partially implemented in a real sense.
			</p>
	

			<div style={{textAlign: "center"}}>
				<img src={interNet} 
					css={css`
					width: 400px;
					border-radius: 12px;
					margin: 20px 0 40px 0;
		  
					@media (max-width: 520px) {
						width: 100%;
					}`}
				/>
			</div>	

			<p
				css={css`
					font-size: 28px !important;
					font-family: "GTEestiProText-medium" !important;
		  
				@media (max-width: 520px) {
					font-size: 24px !important;
				}`}

			> The organization that built the wall </p>

			<p>
				However, after the birth of the Internet, instead of the egalitarianization of information and easier delivery of information as envisioned by Ted Nelson, the Internet has been monopolized by various organizations. In the commercial field, Facebook and Wechat monopolize the information created by individuals, and the information you create on these platforms cannot be shared on another platform; in the academic field, platforms such as Knowledge Network and JSTOR (academic service websites) monopolize the information created by scholars, and you have to pay to consume it; in the news media field, major media public relations monopolize the distribution of information, and in essence, the information you create on the major platforms is distributed to the public. In essence, the information you create on the major platforms does not belong to you but to the platform. The Internet has become more closed than before, just like the rich people monopolize material wealth, and there is a monopoly on information.
			</p>

			<div style={{textAlign: "center"}}>
				<img src={fb} 
					css={css`
					width: 400px;
					border-radius: 12px;
					margin: 20px 0 40px 0;
		  
					@media (max-width: 520px) {
						width: 100%;
					}`}
				/>
			</div>	


			<p
				css={css`
					font-size: 28px !important;
					font-family: "GTEestiProText-medium" !important;
		  
				@media (max-width: 520px) {
					font-size: 24px !important;
				}`}

			> The Breaker </p>

			<p>
				<h3 style={{margin:0}}>One man:</h3>
				In this case, a breakthrough man emerged -- Aaron Swartz (founder of Reddit), who downloaded millions of academic journal papers through MIT's intranet and shared them for free across the Internet without any trial, eventually being accused by the federal government of online piracy and e-fraud, leading him to hang himself. He is also known as the son of the Internet. You can watch a documentary called "Son of the Internet", which is a biography of Swartz's life.
			</p>

			<div style={{textAlign: "center"}}>
				<img src={sonOfnet} 
					css={css`
					width: 400px;
					border-radius: 12px;
					margin: 20px 0 40px 0;
		  
					@media (max-width: 520px) {
						width: 100%;
					}`}
				/>
			</div>	

			<p
				css={css`
					font-size: 28px !important;
					font-family: "GTEestiProText-medium" !important;
		  
				@media (max-width: 520px) {
					font-size: 24px !important;
				}`}

			> The Breaker </p>

			<p>
				<h3 style={{margin:0}}>An product:</h3>
				Until a few years ago, the whole Internet content ecosystem seemed to change again when Roam, an authoring tool based on a two-way linking model, appeared on the market, and released a "Roam White Paper" to try to break the silos and monopolies of information with an unprecedented, more open source authoring model. In fact, from the perspective of today's technology, two-way linking is not a particularly difficult technological innovation, but more of a humanistic one.
			</p>

			<div 
				css={css`
					display: flex;
					flex-direction: row;
					gap: 24px;
					justify-content: center;
					align-items: center;
					box-sizing: border-box;

				@media (max-width: 920px) {
					flex-direction: column;
					width: 100%;
				}`}
			>
				<img src={roam} 
					css={css`
					width: 400px;
					height: 320px;
					border-radius: 12px;
					/* 图片裁切 */
					object-fit: cover;
					margin: 20px 0 40px 0;
		  
					@media (max-width: 520px) {
						width: 100%;
					}`}
				/>
				<img src={trillium} 
					css={css`
					width: 400px;
					height: 320px;
					border-radius: 12px;
					/* 图片裁切 */
					object-fit: cover;
					margin: 20px 0 40px 0;
			  
					@media (max-width: 520px) {
						width: 100%;
					}`}	
				/>
			</div>	

			<p
				css={css`
					font-size: 28px !important;
					font-family: "GTEestiProText-medium" !important;
		  
				@media (max-width: 520px) {
					font-size: 24px !important;
				}`}

			> A hundred flowers are blooming </p>


			<p>
					Nowadays we can see more and more bi-directional linking products on the market, we see Roam, Notion, Obsidian, Remnote, trillium and so on, the bi-directional linking of documents seems to have become the standard, but if you look back, from the moment Tad Nelson started to explore the Shangdu Project in the library, to the present As we said at the beginning, we are just continuing the thinking of our predecessors and using modern technology to realize it, that's all.
			</p>

			<div css={css`
					text-align: center;
					border-bottom: 1px solid #9984ac;
					margin-bottom: 40px;`}
				>
				<img src={ubiquitousLink}
					css={css`
					width: 400px;
					border-radius: 12px;
					margin: 20px 0 40px 0;
			  
					@media (max-width: 520px) {
					  width: 100%;
					}`}
				/>
			</div>

		</div>
	)
}