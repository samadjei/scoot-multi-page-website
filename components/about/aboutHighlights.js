import Image from 'next/image';

const aboutHighlights = () => {
	return (
		<section className="highlight">
			<div className="digital">
				<div className="container">
					{/* Digital */}
					<div className="highlight__inner">
						<div className="highlight__content">
							<h2>Mobility for the digital era</h2>
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
							<h2>Coming to a city near you</h2>
							<p className="feature--description">Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.</p>
						</div>
					</div>
				</div>

				<section className="values">
					<div className="container">
						<h2 className="values--title">Our values</h2>
						<div className="values__grid">
							<div className="values__tech">
								<div className="values__image">
									<Image className='values__img' src="/assets/images/our-tech.jpg" width={'240'} height={'240'} />
									<span className="values__number values--num">01</span>
								</div>
								<h3 className='values--head'>Our tech</h3>
								<p className='values--text'>We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
							</div>
							<div className="values__tech">
								<div className="values__image">
									<Image className='values__img' src="/assets/images/our-integrity.jpg" width={'240'} height={'240'} />
									<span className="values__number values--num">02</span>
								</div>
								<h3 className='values--head'>Our integrity</h3>
								<p className='values--text'>We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
							</div>
							<div className="values__tech">
								<div className="values__image">
									<Image className='values__img' src="/assets/images/our-community.jpg" width={'240'} height={'240'} />
									<span className="values__number values--num">03</span>
								</div>
								<h3 className='values--head'>Our community</h3>
								<p className='values--text'>We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default aboutHighlights;
