import React from 'react';
import './About.scss';

import { motion } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';

// images
import aws from '../../assets/about/aws.png';
import backend from '../../assets/about/backend.jpg';
import frontend from '../../assets/about/frontend.jpg';

import CV from '../../assets/cv/Bogdan_Copocean_Senior_Software_Engineer.pdf';

const abouts = [
	{
		title: 'AWS Solutions Architect',
		description: 'Mastering AWS to drive powerful, scalable cloud solutions that redefine the digital landscape.',
		imgUrl: aws
	},
	{
		title: 'Backend Developer',
		description:
			'Delivering exceptional backend services with clean APIs, seamless integration, and performance in mind.',
		imgUrl: backend
	},
	{
		title: 'Fronted Developer',
		description:
			'Crafting captivating, user-centric interfaces that merge technical excellence with unforgettable experiences.',
		imgUrl: frontend
	}
];
const About = () => {
	return (
		<React.Fragment>
			<h2 className="head-text">
				Crafting Scalable Solutions
				<span> for a</span>
				<br />
				<span> Cloud-First World</span>
			</h2>
			<div className="app__profiles">
				{abouts.map((item, idx) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className="app__profile-item"
						key={item.title + idx}
					>
						<img src={item.imgUrl} alt={item.title} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{item.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{item.description}
						</p>
					</motion.div>
				))}
			</div>
			<div className="resume-button-container">
				<a href={CV} target="_blank" rel="noopener noreferrer" className="resume-button">
					My Resume
				</a>
			</div>
		</React.Fragment>
	);
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
