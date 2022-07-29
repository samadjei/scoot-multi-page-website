import React from 'react';
import Image from 'next/image';

const locationMap = () => {
	return (
		<section className="locations container">
			<div className="locations__map">
				<div className="locations__map-inner">
					<div className='locations__desktop'>
						<Image className="feature__image" src="/assets/images/world-map-desktop.png" alt="Telemetry" width={1110} height={543} />
					</div>
					<div className='locations__mobile'>
						<Image className="feature__image" src="/assets/images/world-map-desktop.png" alt="Telemetry" width={311} height={152} />
					</div>
				</div>
				<div className="locations__dot">
					<span className="locations__dot-items new__york"></span>
					<span className="locations__dot-items london"></span>
					<span className="locations__dot-items yokohama"></span>
					<span className="locations__dot-items jakarta"></span>
				</div>
				<div className="locations__cities">
					<span className="locations__city locations--names new__york">New York</span>
					<span className="locations__city locations--names london">London</span>
					<span className="locations__city locations--names yokohama">Yokohama</span>
					<span className="locations__city locations--names jakarta">Jakarta</span>
				</div>
				<div className="locations__mobile">
					<span className="locations__mobile-cities">New York</span>
					<span className="locations__mobile-cities">London</span>
					<span className="locations__mobile-cities">Jakarta</span>
					<span className="locations__mobile-cities">Yokohama</span>
				</div>
			</div>
		</section>
	);
};

export default locationMap;
