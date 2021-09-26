import React, { useState } from 'react';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [emailSent, setEmailSent] = useState(false);

	const submit = () => {
		if (name && email && message) {
			if (isValidEmail(email)) {
				// TODO - send mail

				setName('');
				setEmail('');
				setMessage('');
				setEmailSent(true);
			} else {
				alert('Please enter a valid email address');
			}
		} else {
			alert('Please fill in all fields.');
		}
	};

	const isValidEmail = (email) => {
		const regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(String(email).toLowerCase());
	};

	return (
		<>
			<section id="contact-info">
				<div className="flex-row">
					<h2 className="section-title-primary">Contact</h2>
				</div>
				<div id="contact-form">
					<input
						type="text"
						placeholder="Your Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="email"
						placeholder="Your email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<textarea
						placeholder="Your message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
					<button onClick={submit}>Send Message</button>
				</div>
			</section>
		</>
	);
};

export default Contact;
