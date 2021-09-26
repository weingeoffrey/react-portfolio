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
		isAboutVisible: true,
		isProjectsVisible: false,
		isContactVisible: false,
	};

	showComponent = (name) => {
		switch (name) {
			case 'isAboutVisible':
				this.setState({
					isAboutVisible: true,
					isProjectsVisible: false,
					isContactVisible: false,
				});
				break;
			case 'isProjectsVisible':
				this.setState({
					isAboutVisible: false,
					isProjectsVisible: true,
					isContactVisible: false,
				});
				break;
			case 'isContactVisible':
				this.setState({
					isAboutVisible: false,
					isProjectsVisible: false,
					isContactVisible: true,
				});
				break;
		}
	};

	render() {
		return (
			<div className="App">
				<div id="content">
					<Header showComponent={this.showComponent} />
					{this.state.isAboutVisible ? <AboutMe /> : null}
					{this.state.isProjectsVisible ? <Projects /> : null}
					{this.state.isContactVisible ? <Contact /> : null}
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
