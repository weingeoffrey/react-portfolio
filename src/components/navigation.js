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
								<a onClick={() => showComponent('isAboutVisible')}>About Me</a>
							</li>
							<li>
								<a onClick={() => showComponent('isProjectsVisible')}>
									Projects
								</a>
							</li>
							<li>
								<a onClick={() => showComponent('isContactVisible')}>Contact</a>
							</li>
						</ul>
					</nav>
				</header>
			</>
		);
	}
}
export default Navigation;
