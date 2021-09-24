import React from 'react';
class Footer extends React.Component {
	render() {
		return (
			<>
				<footer>
					<div className="contact-social">
						<ul className="socialbtns">
							<li>
								<a href="https://github.com/weingeoffrey" target="_blank">
									<img src="./images/github-icon.svg" alt="GitHub"></img>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/geoffrey-wein-731376104/"
									target="_blank"
								>
									<img src="./images/linkedin-icon.svg" alt="LinkedIn"></img>
								</a>
							</li>
							<li>
								<a href="mailto:wein.geoffrey@gmail.com">
									<img src="./images/email-icon.svg" alt="Email Me"></img>
								</a>
							</li>
						</ul>
					</div>
					<h2>Made by Geoffrey Wein</h2>
				</footer>
			</>
		);
	}
}
export default Footer;
