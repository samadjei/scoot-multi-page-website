import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/button';

const Telemetry = () => {
	return (
		<section className="telemetry feature">
			<div className="feature__inner container">
				<div className="feature__content">
					<h2>Easy to use riding telemetry</h2>
					<p className="feature--description">The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your travelling distance, and many more things all in an easy to use app.</p>
					<Link href="/">
						<Button className="btn hero--btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
							Learn More
						</Button>
					</Link>
				</div>
				<div className="telemetry__right">
					<Image className="feature__image" src="/assets/images/telemetry.jpg" alt="Telemetry" width={445} height={445} />
				</div>
			</div>
			<div className="telemetry__arrow">
				<div className="telemetry__arrow-image">
					<Image src="/assets/patterns/left-downward-arrow.svg" alt="Telemetry" width={1040} height={138} />
				</div>
			</div>

			{/* City */}
			<div className="city options">
				<div className="city__image">
					<Image src="/assets/patterns/right-arrow.svg" alt="Telemetry" width={735} height={138} />
				</div>
				<div className="feature__inner container">
					<div className="city__left">
						<Image className="feature__image" src="/assets/images/near-you.jpg" alt="City" width={445} height={445} />
					</div>
					<div className="feature__content">
						<h2>Coming to a city near you</h2>
						<p className="feature--description">Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
						<Link href="/">
							<Button className="btn hero--btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
								Learn More
							</Button>
						</Link>
					</div>
				</div>
			</div>

			{/* Payments */}
			<div className="payment options">
				<div className="payment__image">
					<Image src="/assets/patterns/left-downward-arrow.svg" alt="City" width={735} height={138} />
				</div>
				<div className="feature__inner container">
					<div className="feature__content">
						<h2>Zero hassle payments</h2>
						<p className="feature--description">Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.</p>
						<Link href="/">
							<Button className="btn hero--btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
								Learn More
							</Button>
						</Link>
					</div>
					<div className="payments__right">
						<Image className="feature__image" src="/assets/images/payments.jpg" alt="City" width={445} height={445} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Telemetry;
