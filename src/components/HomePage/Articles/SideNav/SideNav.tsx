import React from 'react'
import './SideNav.less'
import designIcon from '../../../../assets/svg/icon-designIcon.svg'
import iconBusiness from '../../../../assets/svg/icon-business.svg'
import iconFun from '../../../../assets/svg/icon-fun.svg'
import iconProduct from '../../../../assets/svg/icon-product.svg'



export const SideNav = () => {
  return (
	<>
		<div className="nav-items">
			<div className="item  item-selected nav-item-design">
				<div className="inline">
					<img src={designIcon} alt="" />
					<p>Design</p>
				</div>
			</div>
			<div className="item  nav-item-product">
				<div className="inline">
					<img src={iconBusiness} alt="" />
					<p>Product</p>
				</div>
			</div>
			<div className="item  nav-item-product">
				<div className="inline">
					<img src={iconFun} alt="" />
					<p>Business</p>
				</div>
			</div>
			<div className="item  nav-item-product">
				<div className="inline">
					<img src={iconProduct} alt="" />
					<p>Sth Fun</p>
				</div>
			</div>
		</div>
	</>
  )
}
