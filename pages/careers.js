import React from 'react';
import CareersApply from '../components/careers/careersApply';
import CareersHero from '../components/careers/careersHero';
import CareersMission from '../components/careers/careersMission';
import Values from '../components/values';

const Careers = () => {
	return (
		<main>
			<CareersHero />
			<CareersMission />
			<Values />
			<CareersApply />
		</main>
	);
};

export default Careers;
