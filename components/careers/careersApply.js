import React from 'react';
import { Button } from '../button';
const data = [
	{
		position: 'General Manager',
		country: 'Jakarta, Indonesia',
	},
	{
		position: 'UI/UX Designer',
		country: 'Yokohama, Japan',
	},
	{
		position: 'Blog Content Copywriter',
		country: 'New York, United States',
	},
	{
		position: 'Graphic Designer',
		country: 'New York, United States',
	},
	{
		position: 'Fleet Supervisor',
		country: 'Jakarta, Indonesia',
	},
	{
		position: 'UX Analyst',
		country: 'London, United Kingdom',
	},
];

const CareersApply = () => {
	return (
		<div className="apply">
			<div className="container">
				{data.map((items, i) => (
					<div className="apply__inner">
						<div className='apply__text'>
							<h4>{items.position}</h4>
							<p className='apply--country'>{items.country}</p>
						</div>
						<Button className="btn hero--btn " buttonStyle="btn--primary" buttonSize="btn--desktop">
							Apply
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};

export default CareersApply;
