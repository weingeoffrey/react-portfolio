import React from 'react';

class Projects extends React.Component {
	render() {
		return (
			<>
				<section id="projects">
					<div className="flex-row">
						<h2 className="section-title-primary">Projects</h2>
					</div>
					<div className="projects">
						<article className="project">
							<img
								className="proj-thumbnail"
								src="./images/caffeinate.jpg"
								alt="Caffeinate 2.0"
							/>
							<a
								href="https://stark-eyrie-54944.herokuapp.com/"
								target="_blank"
							>
								<div className="proj-overlay">
									<h3 className="proj-title">Caffeinate 2.0</h3>
									<h4 className="proj-subtitle">
										Node.js/JWT & Passport/Sequelize/Express
									</h4>
								</div>
							</a>
						</article>
						<article className="project">
							<img
								className="proj-thumbnail"
								src="./images/discord.jpg"
								alt="CMS Employee Tracker"
							/>
							<div className="proj-overlay">
								<h3 className="proj-title">NWBot (Discord Bot)</h3>
								<h4 className="proj-subtitle">
									JavaScript(discord.js/dotenv) <br /> Under Construction
								</h4>
							</div>
						</article>
						<article className="project">
							<img
								className="proj-thumbnail"
								src="./images/social-network.jpg"
								alt="Social Network API"
							/>
							<a
								href="https://github.com/weingeoffrey/social-network-api"
								target="_blank"
							>
								<div className="proj-overlay">
									<h3 className="proj-title">Social Network API</h3>
									<h4 className="proj-subtitle">Node.js/MongoDB/Express</h4>
								</div>
							</a>
						</article>
					</div>
					<div className="projects">
						<article className="project">
							<img
								className="proj-thumbnail"
								src="./images/e-commerce.png"
								alt="E-Commerce Back End"
							/>
							<a
								href="https://github.com/weingeoffrey/e-commerce-back-end"
								target="_blank"
							>
								<div className="proj-overlay">
									<h3 className="proj-title">E-Commerce Back End</h3>
									<h4 className="proj-subtitle">Node.js/Sequelize/Express</h4>
								</div>
							</a>
						</article>
						<article className="project">
							<img
								className="proj-thumbnail"
								src="./images/cms.jpg"
								alt="CMS Employee Tracker"
							/>
							<a
								href="https://github.com/weingeoffrey/cms-employee-tracker"
								target="_blank"
							>
								<div className="proj-overlay">
									<h3 className="proj-title">CMS Employee Tracker</h3>
									<h4 className="proj-subtitle">
										JavaScript(MySQL/Inquirer/dotenv)
									</h4>
								</div>
							</a>
						</article>
						<article className="project">
							<img
								className="proj-thumbnail"
								src="./images/password-generator.png"
								alt="Password Generator"
							/>
							<a
								href="https://weingeoffrey.github.io/password-generator/"
								target="_blank"
							>
								<div className="proj-overlay">
									<h3 className="proj-title">Random Password Generator</h3>
									<h4 className="proj-subtitle">HTML/CSS/JS</h4>
								</div>
							</a>
						</article>
					</div>
				</section>
			</>
		);
	}
}

export default Projects;
