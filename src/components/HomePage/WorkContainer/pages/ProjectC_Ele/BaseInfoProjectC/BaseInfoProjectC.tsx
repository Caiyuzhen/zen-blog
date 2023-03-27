import React from 'react'
import './BaseInfoProjectC.less'
import coverFramework from '../../../../../../assets/img/migu-rest.png'

export const BaseInfoProjectC = () => {
  return (
	<div className="migu-main-container">
		<p className="migu-main-title">MIGU Video</p>
		<div className="migu-bottom-container">
			<p>MIGU Circles is a young social entertainment platform based on short video platform and IP operation as the core of the product, which integrates pan-secondary content animation, comics, games and light novels.</p>
			<img src={coverFramework} alt="" />
		</div>
	</div>
  )
}

export default BaseInfoProjectC
