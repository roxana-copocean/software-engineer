/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React, { useState, useEffect } from 'react';

const NavigationDots = () => {
	const [ activeDot, setActiveDot ] = useState('home'); // set initial active dot to 'home'
	const sections = [ 'home', 'about', 'work', 'skills', 'contact' ];

	const handleScroll = () => {
		const yOffset = window.pageYOffset;
		const sectionOffsets = sections.map((id) => {
			const element = document.getElementById(id);
			return element ? element.offsetTop : null;
		});

		for (let i = sections.length - 1; i >= 0; i--) {
			if (yOffset >= sectionOffsets[i] - 100) {
				setActiveDot(sections[i]);
				break;
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleClick = (item) => {
		setActiveDot(item); // update active dot state when a dot is clicked
	};

	return (
		<div className="app__navigation">
			{sections.map((item, index) => (
				<a
					href={`#${item}`}
					key={item + index}
					className="app__navigation-dot"
					style={activeDot === item ? { backgroundColor: '#570a57' } : {}}
					onClick={() => handleClick(item)}
				/>
			))}
		</div>
	);
};

export default NavigationDots;

/*This code uses the useState hook to create a state variable called activeDot and initializes it to 'home'. When a dot is clicked, the handleClick function is called and updates the activeDot state to the clicked dot's item name.

The style attribute for each dot is updated to set the background color to '#313BAC' if the dot's item name matches the activeDot state.*/

// handleScroll function to update the active dot based on the user's scroll position. The handleScroll function calculates the offsets of each section and sets the active dot based on which section the user has scrolled past. I also added the useEffect hook to add and remove the scroll event listener when the component mounts and unmounts.
