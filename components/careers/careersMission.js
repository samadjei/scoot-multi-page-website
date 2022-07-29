import { Button } from '../button';

const careersMission = () => {
	return (
		<div className="container">
			<div className='careers__header'>
				<h2>Care to join our mission?</h2>
				<p className='careers__header-content'>We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
				<Button className="btn hero--btn " buttonStyle="btn--primary" buttonSize="btn--desktop">
					Get Scootin
				</Button>
			</div>
		</div>
	);
};

export default careersMission;
