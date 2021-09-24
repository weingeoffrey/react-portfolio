import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
	state = {
		aboutMe: true,
		projects: false,
		contact: false,
	};

	render() {
		return (
			<div className="App">
				<Header />
				{this.state.aboutMe ? <AboutMe /> : null}
				{this.state.projects ? <Projects /> : null}
				{this.state.contact ? <Contact /> : null}
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
			</div>
		);
	}
}

class Navigation extends React.Component {
	render() {
		return (
			<>
				<header>
					<nav className="nav-buttons">
						<ul>
							<li>
								<a href="#about-me">About Me</a>
							</li>
							<li>
								<a href="#projects">Projects</a>
							</li>
							<li>
								<a href="#contact-info">Contact</a>
							</li>
						</ul>
					</nav>
				</header>
			</>
		);
	}
}
class Header extends React.Component {
	render() {
		return (
			<>
				<section className="intro-main">
					<h1>Geoffrey Wein</h1>
					<h3>Solution Architect</h3>
				</section>
				<Navigation />
			</>
		);
	}
}

class AboutMe extends React.Component {
	render() {
		return (
			<>
				<section id="about-me">
					<div className="flex-row">
						<h2 className="section-title-primary">About Me</h2>
					</div>
					<div className="about-me">
						<article className="bio">
							<img src="./images/picture-thumbnail.JPG" alt="profile-picture" />
							<p>
								Hello, my name is Geoffrey Wein and I'm enrolled in UT Austin's
								coding boot camp. Thanks to the coding boot camp I was able to
								land a position as a Solutions Architect for the SaaS company,
								JumpCloud.
								<br />
								<br />
								I've always been interested in coding and have spent some of my
								personal freetime tinkering with different languages. I have
								past experience in languages such as C#, Python, C++ and PHP. In
								my professional career I have implemented various automation
								procedures using custom scripts via PowerShell and Python. I'm
								excited to continue with the UT coding boot camp to expand my
								knowledge and allow myself to branch out into the exciting world
								of programming!
							</p>
						</article>
					</div>
				</section>
			</>
		);
	}
}

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

class Contact extends React.Component {
	render() {
		return (
			<>
				<section id="contact-info">
					<div className="flex-row">
						<h2 className="section-title-primary">Contact</h2>
					</div>
				</section>
			</>
		);
	}
}
export default App;
