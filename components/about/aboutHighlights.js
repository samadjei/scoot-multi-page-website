import Image from 'next/image';
import Values from '../values';

const aboutHighlights = () => {
	return (
		<section className="highlight">
			<div className="digital">
				<div className="container">
					{/* Digital */}
					<div className="highlight__inner">
						<div className="highlight__content">
							<h2 className="highlight--title">Mobility for the digital era</h2>
							<p className="feature--description">Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.</p>
						</div>
						<div className="highlight__image">
							<Image className="feature__image" src="/assets/images/digital-era.jpg" alt="Telemetry" width={445} height={445} />
						</div>
					</div>
				</div>
				<div className="digital__arrow">
					<div className="digital__arrow-image">
						<Image src="/assets/patterns/left-upward-arrow.svg" alt="Telemetry" width={1040} height={138} />
					</div>
				</div>

				{/* Urban */}
				<div className="urban">
					<div className="urban__image">
						<Image src="/assets/patterns/right-arrow.svg" alt="Telemetry" width={735} height={138} />
					</div>
					<div className="highlight__inner container">
						<div className="urban__left">
							<Image className="feature__image" src="/assets/images/better-living.jpg" alt="Urban City" width={445} height={445} />
						</div>
						<div className="feature__content">
							<h2 className="highlight--title">Coming to a city near you</h2>
							<p className="feature--description">Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
						</div>
					</div>
				</div>
				<Values />
			</div>
		</section>
	);
};

export default aboutHighlights;
