import model from '../../../../../src/assets/content/articles/articleList/img/articleB/model.jpg'
import productType from '../../../../../src/assets/content/articles/articleList/img/articleB/productType.jpg'
import profucttable from '../../../../../src/assets/content/articles/articleList/img/articleB/profucttable.jpg'
import productmodel from '../../../../../src/assets/content/articles/articleList/img/articleB/productmodel.jpg'
import userPermission from '../../../../../src/assets/content/articles/articleList/img/articleB/userPermission.jpg'
import uxFlow from '../../../../../src/assets/content/articles/articleList/img/articleB/uxflow.jpg'
import testFlow from '../../../../../src/assets/content/articles/articleList/img/articleB/testFlow.jpg'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export default function articleTwoTempDetail () {
	return (
		<>
			<p>
				ToB (Business) products are systems used internally by enterprises or operators, which are quite different from the ToC (Consumer) products that we contact every day. When we use C-end products, we can feel the advantages and disadvantages of a product, and experience is king; but not when it comes to B-end products, which are mainly used to standardize and modularize some existing business processes and migrate them online, simplify business processes to improve efficiency and generate value for the enterprise's profit chain and contribute to the production and operation of the enterprise. Therefore, the greater the contribution of the product to the business, the more valuable it is. Common ToB products in China include 1688, Jingdong Cloud, Ali Cloud Services, Enterprise WeChat, etc., while abroad there are Slack, Google Office Suite, Trello, etc.
			</p>

			<div style={{textAlign: "center"}}>
				<img src={model}
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

			>Common ToB products are the following categories</p>

			<p>
				<strong>OA:</strong> Enterprise office automation OA system: products that provide intelligent card punching, personnel management, office collaboration and other related functions within the enterprise.

				<strong>CRM:</strong> Domestic products such as Streak, and foreign products such as Salesforce, which are used to manage customer relationships, market to customers, provide business support and business collaboration for sales teams, and observe sales data to predict future performance.

				<strong>CMS:</strong> ToC product line of back-end products, such as: hungry merchant version, Taobao merchant back office, drip driver side, etc., are used to support the ToC business, configuration of the front-end display products.

				<strong>ERP:</strong> management of resources within the enterprise such as goods in and out of warehouses, raw materials in and out of storage, supply chain management systems such as Lutisda, foreign Sap, Oracle, etc.

				<strong>SAAS</strong> Enterprise open services and products, such as nail, is an OA application system for small and medium-sized enterprises, time and attendance is one of the general functions. For example, Teambition or Lark is also a document online communication and collaboration function, in addition to Baidu Intelligent Cloud, Ali Cloud and other web hosting systems, Youzan, Little Goose Boy, Kingdee Cloud, etc.	
			</p>

			<div style={{textAlign: "center"}}>
				<img src={productType} 
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

			>What is the difference between B-end products and C-end products?</p>

			<h3 style={{marginTop: 40, textAlign: 'left'}}> 01. Use scenarios: </h3>
			<p>
				ToC products often have multiple different use scenarios, the process of using C-end products is fragmented, so the product design will extend multiple sub-functions around its core functions to meet the needs of users in different scenarios, in order to maximize the user's time.
				ToB products have a core scenario, which is the work scenario, where users are using the product for a long time, with strong purpose and focus, so it needs to be designed more conveniently and efficiently to ensure smooth work, to meet the needs of management and employees in the office and collaboration at work, and to improve the business efficiency of the company.
			</p>


			<h3 style={{marginTop: 40, textAlign: 'left'}}> 02. User type: </h3>
			<p>
				C-end products have a thousand faces, emphasizing personalization and personalization, and the granularity needs to be refined to region, gender, age, occupation, income, consumption preferences and even more decision-making factors in the use-research stage in order to build a more complete user portrait. As the volume of C-end product user questions is generally large, different user tags can be defined to dig out pain points and opportunity points as a source of product iteration.
				The ToB product is a collective representation, the decision-making power lies with the management, the purpose is to maximize the interests of the enterprise, in the process of product design need to balance the interests of employees and the boss, sometimes for the business may also partially sacrifice the product experience.
			</p>
			

			<h3 style={{marginTop: 40, textAlign: 'left'}}> 03. Profit Model: </h3>
			<p>
				C-end products can charge users and enterprises through advertising, service fees, membership fees, platform commission extraction, value-added services, etc.
				ToB products mainly charge enterprises for function module service fee, number of users fee, maintenance fee or customization fee of the software at the later stage.
			</p>

			<h3 style={{marginTop: 40, textAlign: 'left'}}> 04. Operation mode: </h3>
			<p>				
				The core purpose is to occupy the user's mind and improve the business conversion rate through the conversion funnel of pulling new, promoting live, converting and retaining.
				ToB operations need to optimize the exposure rate (SEM, SEO), as well as expand enterprise sales business, to achieve the performance indicators
			</p>

			<div style={{textAlign: "center"}}>
				<img src={profucttable} 
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

			>How to start the design of ToB products?</p>

			<h3 style={{marginTop: 40, textAlign: 'left'}}> 01. Business research: </h3>
			<p>
				The key to ToB product design lies in the understanding of business logic. Generally speaking, different departments have different usage scenarios, business flows and roles, and product designers need to target business combing to have an in-depth knowledge of the business, and generally the output of this stage is a flow chart. The common processes are: business model, business process, functional process, operational process, page process, data process etc., we can target the combing.
			</p>

			<div style={{textAlign: "center"}}>
				<img src={productmodel} 
					css={css`
						width: 400px;
						border-radius: 12px;
						margin: 20px 0 40px 0;
		  
					@media (max-width: 520px) {
						width: 100%;
					}`}
				/>
			</div>

			<h3 style={{marginTop: 40, textAlign: 'left'}}> 02. User research: </h3>
			<p>
				Under the premise of understanding the business process, we need to interview the users in the business. There are two kinds of user research in general, which are qualitative and quantitative research. Qualitative: user interview, user experience map, focus group, etc. Quantitative: user questionnaire, AB test, etc. The number of interviews need not be too large, usually 8 to 10 front-line business people can be selected, and the opinions of decision makers (bosses) need to be taken into account, because the users of the product and the buyers are often not the same person, so we need to collect business demands as much as possible to ensure that everyone's understanding of the business is the same.
			</p>

			<h3 style={{marginTop: 40, textAlign: 'left'}}> 03. Business Permissions: </h3>
			<p>
				We also need to pay attention to the business permissions of different users in this process, the setting of user permissions, to clarify the scope of the user's functional operations, operational processes, business norms and constraints, etc. Permissions affect the flow of data, in fact, is to sort out the WHO, WHAT and HOW in the business, to distinguish the "objects, relationships and actions" in the business.
				<strong>WHO:</strong>  abstracted from the business, a user role constituted by a class of users, such as site administrators.
				<strong>WHAT:</strong> The organizational relationship between roles and roles, such as superiors and subordinates.
				<strong>HOW:</strong>  The operation rights corresponding to different roles in the organizational structure, and the hierarchical division should be considered, for example, if A submits requirements to B for approval, B is the role with approval rights, and the roles with different rights may have different display pages.
			</p>
	

			<div style={{textAlign: "center"}}>
				<img src={userPermission}
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
				When designing ToB applications, it is important to understand user needs. For product designers, it helps to develop empathy for users by fully understanding their work and the needs of their profession. In the user research process, we need to fully understand their work context, process, environment, expectations, problems and current solutions, but we also need to distinguish what are the real user needs, the user may tell you what he wants, not why, which requires the product designer to have the ability of subjective discrimination.
			</p>

			<h3 style={{marginTop: 40, textAlign: 'left'}}> 04. Solution design: </h3>
			<p>
				Produce a conceptual product structure, you can use the mind map to sort out the existing product functions; then think about what problems users encounter in what scenarios in the business system, and what functions can be used to solve it, in the case of sufficient time it is best to generate Prd documents, and confirm with team members and customers to avoid continuous rework later.
				A good process can not only form a closed loop in terms of functionality to meet business needs, but also follow the user's mental model to improve the ease of use of the product under the premise of meeting usability.
				The process must not be made too complicated, otherwise it will raise the learning cost of users.
			</p>

			<div style={{textAlign: "center"}}>
				<img src={uxFlow} 
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
				After we have the basic prototype, we can start to organize feasibility tests, let business people use our product or interaction prototype, observe their waiting points, decision points and failure points in the process of use, listen to their feedback and record them, gain insight into users' concerns, reflect on the process that can be optimized or improved, and ensure that our solution not only meets the needs of business people but also Enhance and improve business efficiency.
			</p>

			<div style={{textAlign: "center"}}
				css={css`
						text-align: center;
						border-bottom: 1px solid #9984ac;
						margin-bottom: 40px;`}
			>
				<img src={testFlow} 
					css={css`
						width: 400px;
						border-radius: 12px;
						margin: 20px 0 40px 0;
		  
					@media (max-width: 520px) {
						width: 100%;
					}`}
				/>
			</div>	

		</>
	)
}