import Link from 'next/link';
import { Button } from '../button';

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero__flex">
					<h1>Scooter sharing made simple</h1>
					<div className="hero__inner">
						<p className="hero__description">Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
						<Link className="hero__btn" href="/">
							<Button className="btn hero--btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
								Get Scootin
							</Button>
						</Link>
					</div>
				</div>
			</div>
			<div className="hero__circle"></div>
		</section>
	);
};

export default Hero;
