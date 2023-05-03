import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';

import { images } from '../../constants';

const scaleVariants = {
	whileInView: {
		sclale: [ 0, 1 ],
		opacity: [ 0, 1 ],
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	}
};
const Header = () => {
	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [ -100, 0 ], opacity: [ 0, 1 ] }}
				transition={{ duration: 1 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<div>
							<p className="p-text">Hello, I'm</p>
							<h1 className="head-text">Bogdan</h1>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						<p className="p-text">Senior Backend Engineer</p>
						<p className="p-text">AWS Solution Arhitect</p>
					</div>
				</div>
			</motion.div>
			<motion.div
				whileInView={{ opacity: [ 0, 1 ] }}
				transition={{ duration: 1, delayChildren: 0.5 }}
				className="app__header-img"
			>
				<img src={images.bogdan2} alt="profile_bg" />
				<motion.img
					whileInView={{ scale: [ 0, 1 ] }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					src={images.circle}
					alt="profile_circle"
					className="overlay_circle"
				/>
			</motion.div>
			<motion.div variant={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles">
				{[ images.awsLogo, images.python1, images.api ].map((circle, index) => (
					<div className="circle-cmp app__flex" key={`circle-${index}`}>
						<img src={circle} alt="circle" />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, 'home');
