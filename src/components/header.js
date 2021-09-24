import React from 'react';
import Navigation from './navigation';
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
export default Header;
