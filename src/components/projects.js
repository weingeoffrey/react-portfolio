import React from 'react';

class Projects extends React.Component {
	render() {
		return (
			<>
				<section id="projects">
					<div className="flex-row">
						<h2 className="section-title-secondary">Projects</h2>
					</div>
					<div className="projects">
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
						<article className="project">
							<img
								className="proj-thumbnail"
								src="./images/run-buddy.png"
								alt="Run Buddy"
							/>
							<a
								href="https://weingeoffrey.github.io/run-buddy/"
								target="_blank"
							>
								<div className="proj-overlay">
									<h3 className="proj-title">Run Buddy</h3>
									<h4 className="proj-subtitle">HTML/CSS</h4>
								</div>
							</a>
						</article>
						<article className="project">
							<img
								className="proj-thumbnail"
								src="./images/under-construction.jpg"
								alt="Under Construction"
							/>
							<div className="proj-overlay">
								<h3 className="proj-title">Under Construction</h3>
								<h4 className="proj-subtitle">More coming soon!</h4>
							</div>
						</article>
						<article className="project">
							<img
								className="proj-thumbnail"
								src="./images/under-construction.jpg"
								alt="Under Construction"
							/>
							<div className="proj-overlay">
								<h3 className="proj-title">Under Construction</h3>
								<h4 className="proj-subtitle">More coming soon!</h4>
							</div>
						</article>
					</div>
				</section>
			</>
		);
	}
}

export default Projects;
