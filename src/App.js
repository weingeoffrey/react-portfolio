import logo from './logo.svg';
import './App.css';
import React from 'react';
import AboutMe from './components/aboutme';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Projects from './components/projects';

class App extends React.Component {
	state = {
		isAboutVisible: false,
		isProjectsVisible: false,
		isContactVisible: false,
	};

	hideComponent(name) {
		console.log(name);
		switch (name) {
			case 'isAboutVisible':
				this.setState({ isAboutVisible: !this.state.isAboutVisible });
				break;
			case 'isProjectsVisible':
				this.setState({ isProjectsVisible: !this.state.isProjectsVisible });
				break;
			case 'isContactVisible':
				this.setState({ isContactVisible: !this.state.isContactVisible });
				break;
		}
	}

	render() {
		return (
			<div className="App">
				<Header hideComponent={this.hideComponent} />
				{this.state.isAboutVisible ? <AboutMe /> : null}
				{this.state.isProjectsVisible ? <Projects /> : null}
				{this.state.isContactVisible ? <Contact /> : null}
				<Footer />
			</div>
		);
	}
}

export default App;
