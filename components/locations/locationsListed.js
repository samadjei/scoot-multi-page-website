import React from 'react';
import { Button } from '../button';

const locationsListed = () => {
	return (
		<div className="locations__listed container">
			<h3 className="locations__text">Your City Not Listed?</h3>
			<p className="locations__content">If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
			<div className="locations__btn">
				<Button className="btn hero--btn " buttonStyle="btn--primary" buttonSize="btn--desktop">
					Message Us
				</Button>
			</div>
		</div>
	);
};

export default locationsListed;
