import React from 'react';
import Image from 'next/image';

const locationMap = () => {
	return (
		<section className="map">
			<div className="map__inner container">
			<Image className="feature__image" src="/assets/images/world-map-desktop.png" alt="Telemetry" width={1110} height={543} />
			</div>
		</section>
	);
};

export default locationMap;
