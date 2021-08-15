import React from 'react';

const pageHero = ({title}) => {
	return (
		<header className="about about__hero">
			<div className="container">
				<div className="about__hero-content">
					<h1>{title}</h1>
				</div>
			</div>
		</header>
	);
};

export default pageHero;
