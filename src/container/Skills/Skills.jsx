import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { motion } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';

import { skillsData, experienceData } from './skillsData';
import './Skills.scss';

const Skills = () => {
	const [ skills, setSkills ] = useState([]);
	const [ experience, setExperience ] = useState([]);

	useEffect(() => {
		setSkills(skillsData);
		setExperience(experienceData);
	}, []);
	return (
		<React.Fragment>
			<h2 className="head-text">Skills & Experience</h2>
			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills.map((skill) => (
						<motion.div
							whileInView={{ opacity: [ 0, 1 ] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex"
							key={skill.name}
						>
							<div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
								<img src={skill.icon} alt={skill.name} />
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
				<motion.div className="app__skills-exp">
					{experience.map((exp) => (
						<motion.div className="app__skills-exp-item" key={exp.year}>
							<div className="app_skills-exp-year">
								<p className="bold-text">{exp.year}</p>
							</div>
							<motion.div className="app__skills-exp-works">
								{exp.works.map((work, index) => (
									<div key={`${exp.year}-4{index}`}>
										<motion.div
											whileInView={{ opacity: [ 0, 1 ] }}
											transition={{ duration: 0.5 }}
											className="app__skills-exp-work app__flex"
											data-tip
											data-tooltip-id={work.name}
											key={work.name}
										>
											<h4 className="bold-text">{work.name}</h4>
											<p className="p-text">{work.company}</p>
										</motion.div>
										{/* <Tooltip
											id={work.name}
											effect="solid"
											arrowColor="#fff"
											className="skills-tooltip"
										>
											{work.desc}
										</Tooltip> */}
									</div>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</React.Fragment>
	);
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');
