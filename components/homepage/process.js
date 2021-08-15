import Image from 'next/image';

const Process = () => {
	return (
		<section className="process">
			<div className="process__inner container">
				<div className="process__item">
					<Image className="process__icons" src="/assets/icons/locate.svg" alt="Locate icon" width={96} height={96} />
					<div className="process__content">
						<h4 className="process__title">Locate with app</h4>
						<p className="process__description">Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.</p>
					</div>
				</div>
				<div className="process__item">
					<Image className="process__icons" src="/assets/icons/scooter.svg" alt="Scooter icon" width={96} height={96} />
					<div className="process__content">
						<h4 className="process__title">Pick your scooter</h4>
						<p className="process__description">We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.</p>
					</div>
				</div>
				<div className="process__item">
					<Image src="/assets/icons/ride.svg" alt="Ride icon" width={96} height={96} />
					<div className="process__content">
						<h4 className="process__title">Enjoy the ride</h4>
						<p className="process__description">Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;
