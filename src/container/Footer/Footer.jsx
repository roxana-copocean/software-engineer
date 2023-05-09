import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';

import './Footer.scss';

const userID = process.env.REACT_APP_EMAILJS_USERID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATEID;
const serviceID = process.env.REACT_APP_EMAILJS_SERVICEID;

const Footer = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);
	// const [ loading, setLoading ] = useState(false);

	// Email JS-------------------
	const form = useRef();

	// Inputs State ---------------------
	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	// Email JS ----------------------
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(serviceID, templateID, form.current, userID).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		setName('');
		setEmail('');
		setMessage('');
		setIsFormSubmitted(true);
	};

	// JSX --------------------------
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
				<form ref={form} className="app__footer-form app__flex" onSubmit={sendEmail}>
					<div className="app__flex">
						<input
							type="text"
							name="user_name"
							className="p-text"
							placeholder="Your Name"
							value={name}
							onChange={handleName}
							required
						/>
					</div>
					<div className="app__flex">
						<input
							type="email"
							name="user_email"
							className="p-text"
							placeholder="Your Email"
							value={email}
							onChange={handleEmail}
							required
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							name="message"
							placeholder="Your Message"
							value={message}
							onChange={handleMessage}
							required
						/>
					</div>
					<button type="submit" className="p-text">
						Send Message
					</button>
				</form>
			) : (
				<div>
					<h3 className="head-text">Thank you for getting in touch!</h3>
				</div>
			)}
		</React.Fragment>
	);
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__secondary');
