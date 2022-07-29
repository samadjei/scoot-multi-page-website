import React from 'react';
import Mission from '../components/locations/locationMission';
import pageHero from '../components/pageHero';
import Title from '../components/title';
import Listed from '../components/locations/locationsListed';

const Location = () => {
	return (
		<main>
			<Title title="Locations" />
			<Mission />
			{/* <pageHero/> */}
			<Listed />
		</main>
	);
};

export default Location;
