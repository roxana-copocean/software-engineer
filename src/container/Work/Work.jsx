import React, { useState, useEffect } from 'react';
import { AiFillEye, AiOutlineDownload } from 'react-icons/ai';

import { motion } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';

import { worksData, cvUrl } from './workData';
import './Work.scss';

const Work = () => {
	const [ activeFilter, setActiveFilter ] = useState('All');
	const [ animateCard, setAnimateCard ] = useState({ y: 0, opacity: 1 });
	const [ works, setWorks ] = useState([]);
	const [ filterWorks, setFilterWorks ] = useState([]);

	useEffect(() => {
		const sortedWorks = worksData.sort((a, b) => {
			const order = [ 'Hotjar', 'FINN', 'EPAM', 'CyberGhost', 'All' ];
			return order.indexOf(a.tags[0]) - order.indexOf(b.tags[0]);
		});
		setWorks(sortedWorks);
		setFilterWorks(sortedWorks);
	}, []);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([ { y: 100, opacity: 0 } ]);
		setTimeout(() => {
			setAnimateCard([ { y: 0, opacity: 1 } ]);
			if (item === 'All') {
				setFilterWorks(works);
			} else {
				setFilterWorks(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};
	return (
		<React.Fragment>
			<h2 className="head-text">
				Background
				<span> Experience</span>
			</h2>
			<div className="app__work-filter">
				{[ 'Hotjar', 'FINN', 'EPAM', 'CyberGhost', 'All' ].map((item, idx) => (
					<div
						key={idx}
						onClick={() => handleWorkFilter(item)}
						className={`app__work-filter-item app__flex p-text ${activeFilter === item
							? 'item-active'
							: ''}`}
					>
						{item}
					</div>
				))}
			</div>
			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio"
			>
				{filterWorks.map((work, idx) => (
					<div className="app__work-item app__flex" key={idx}>
						<div className="app__work-img app__flex">
							<img src={work.imgUrl} alt={work.name} />
							<motion.div
								whileHover={{ opacity: [ 0, 1 ] }}
								transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
								className="app__work-hover app__flex"
							>
								<a href={work.projectLink} target="_blank" rel="noreferrer">
									<motion.div
										whileHover={{ scale: [ 1, 1.1 ] }}
										whileInView={{ scale: [ 1, 1 ] }}
										transition={{ duration: 0.15 }}
										className=" app__flex"
									>
										<AiFillEye />
									</motion.div>
								</a>
								<a href={cvUrl} target="_blank" rel="noreferrer">
									<motion.div
										whileHover={{ scale: [ 1, 1.1 ] }}
										whileInView={{ scale: [ 1, 1 ] }}
										transition={{ duration: 0.25 }}
										className=" app__flex"
									>
										<AiOutlineDownload style={{ color: 'white' }} />
									</motion.div>
								</a>
							</motion.div>
						</div>
						<div className="app__work-content app__flex">
							<h4 className="bold-text">{work.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{work.description}
							</p>
							<div className="app__work-tag app__flex">
								<p className="p-text">{work.tags[0]}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</React.Fragment>
	);
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__primarybg');
