import React, { useContext } from 'react'
import './BaseInfoProjectC.less'
import coverFramework from '../../../../../../assets/img/migu-rest.png'


export const BaseInfoProjectC = () => {

	return (
		<div className="migu-main-container">
			<p className="migu-main-title">MIGU Video</p>
			<div className="migu-bottom-container">
				<div className="migu-svg-container">
					<svg width="109" height="69" viewBox="0 0 109 69" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path id="svg-anim-1" d="M32.5 67C36.8333 68.1667 47.6 68.7 56 61.5C66.5 52.5 63.3879 31.3547 72.5 21C83.5 8.5 99.1667 9.5 107.5 8.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
						<path id="svg-anim-2" d="M32.7888 60.4246C35.636 59.5138 41.8698 55.9382 44.0268 48.9232C46.723 40.1544 37.4617 29.5418 38.8974 20.5204C40.6305 9.62998 49.7809 4.55146 54.1037 1.0002" stroke="#c8c4de" stroke-width="2" stroke-linecap="round"/>
						<path id="svg-anim-3" d="M24.9811 54.2524C26.7138 53.2966 30.0087 50.0288 29.327 44.6039C28.475 37.8227 18.5588 30.8424 16.7328 23.997C14.5286 15.7334 19.4187 11.0628 21.3656 8.00014" stroke="#a69eba" stroke-width="2" stroke-linecap="round"/>
					</svg>
				</div>
				<p>MIGU Circles is a young social entertainment platform based on short video platform and IP operation as the core of the product, which integrates pan-secondary content animation, comics, games and light novels.</p>
				<div className="migu-baseInfo-imgContainer">
					<img src={coverFramework} alt="" />
				</div>
			</div>
		</div>
	)
}

export default BaseInfoProjectC
