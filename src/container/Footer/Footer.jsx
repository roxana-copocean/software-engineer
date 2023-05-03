import React, { useState } from 'react';

import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';

import './Footer.scss';

const Footer = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);
	const [ loading, setLoading ] = useState(false);

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = (e) => {
		setLoading(true);
		const contact = {
			_type: 'contact',
			name: name,
			email: email,
			message: message
		};

		// ****NEED TO FIX THIS
		// client.create(contact).then(() => {
		// 	setLoading(false);
		// 	setIsFormSubmitted(true);
		// });
	};

	return (
		<React.Fragment>
			<h2 className="head-text">Take a coffe & chat with me!</h2>
			<div className="app__footer-cards">
				<div className="app__footer-card">
					<div>
						<BsFillTelephoneFill />
					</div>
					<a href="mailto:bogdancopocean@gmail.com" className="p-text">
						bogdancopocean@gmail.com
					</a>
				</div>
				<div className="app__footer-card">
					<div>
						<MdEmail />
					</div>
					<a href="tel: (+40) 736 235 558" className="p-text">
						(+40) 736 235 558
					</a>
				</div>
			</div>
			{!isFormSubmitted ? (
				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							type="text"
							name="name"
							className="p-text"
							placeholder="Your Name"
							value={name}
							onChange={handleName}
						/>
					</div>
					<div className="app__flex">
						<input
							type="email"
							name="email"
							className="p-text"
							placeholder="Your Email"
							value={email}
							onChange={handleEmail}
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							name="message"
							placeholder="Your Message"
							value={message}
							onChange={handleMessage}
						/>
					</div>
					<button type="button" className="p-text" onClick={handleSubmit}>
						{loading ? 'Sending' : 'Send Message'}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">Thank you for getting in touch!</h3>
				</div>
			)}
		</React.Fragment>
	);
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__secondary');
