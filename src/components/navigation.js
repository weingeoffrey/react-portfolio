import React from 'react';
class Navigation extends React.Component {
	render() {
		return (
			<>
				<header>
					<nav className="nav-buttons">
						<ul>
							<li>
								<a href="#about-me" onClick={() => console.log(this.props)}>
									About Me
								</a>
							</li>
							<li>
								<a
									href="#projects"
									onClick={() => this.setState({ isProjectsVisible: true })}
								>
									Projects
								</a>
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
export default Navigation;
