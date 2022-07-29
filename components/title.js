import React from 'react';

const title = (props) => {
	return (
		<header className="about about__hero">
			<div className="container">
				<div className="about__hero-container">
					<h1>{props.title}</h1>
				</div>
			</div>
		</header>
	);
};

export default title;
