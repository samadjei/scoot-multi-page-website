import { Button } from '../button';
import Image from 'next/image';

const careersMission = () => {
	return (
		<div className="careers__mission">
			<div className="container">
				<div className="digital careers__header">
					<div className="careers__content">
						<h2 className="careers--title">Care to join our mission?</h2>
						<p className="careers__header-content">We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!</p>
						<Button className="btn hero--btn " buttonStyle="btn--primary" buttonSize="btn--desktop">
							Get Scootin
						</Button>
					</div>
					<div className="highlight__image">
						<Image className="feature__image" src="/assets/images/join-us.jpg" alt="Telemetry" width={445} height={445} />
					</div>
				</div>
			</div>
			<div className="digital__arrow">
				<div className="digital__arrow-image">
					<Image src="/assets/patterns/left-downward-arrow.svg" alt="Telemetry" width={1040} height={138} />
				</div>
			</div>
		</div>
	);
};

export default careersMission;
