import React from 'react';
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
export default AboutMe;
