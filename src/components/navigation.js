import React from 'react';
class Navigation extends React.Component {
	render() {
		var { showComponent } = this.props;
		return (
			<>
				<header>
					<nav className="nav-buttons">
						<ul>
							<li>
								<a
									onClick={() => {
										document.title = 'About';
										showComponent('isAboutVisible');
									}}
								>
									About Me
								</a>
							</li>
							<li>
								<a
									onClick={() => {
										document.title = 'Projects';
										showComponent('isProjectsVisible');
									}}
								>
									Projects
								</a>
							</li>
							<li>
								<a
									onClick={() => {
										document.title = 'Contact';
										showComponent('isContactVisible');
									}}
								>
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</header>
			</>
		);
	}
}
export default Navigation;
