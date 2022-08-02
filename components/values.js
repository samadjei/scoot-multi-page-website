import React from 'react';
import Image from 'next/image';

const Values = () => {
	return (
		<div>
			<section className="values">
				<div className="container">
					<h2 className="values--title">Our values</h2>
					<div className="values__grid">
						<div className="values__tech">
							<div className="values__image">
								<Image className="values__img" src="/assets/images/our-tech.jpg" width={'240'} height={'240'} />
								<span className="values__number values--num">01</span>
							</div>
							<h3 className="values--head">Our tech</h3>
							<p className="values--text">We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
						</div>
						<div className="values__tech">
							<div className="values__image">
								<Image className="values__img" src="/assets/images/our-integrity.jpg" width={'240'} height={'240'} />
								<span className="values__number values--num">02</span>
							</div>
							<h3 className="values--head">Our integrity</h3>
							<p className="values--text">We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
						</div>
						<div className="values__tech">
							<div className="values__image">
								<Image className="values__img" src="/assets/images/our-community.jpg" width={'240'} height={'240'} />
								<span className="values__number values--num">03</span>
							</div>
							<h3 className="values--head">Our community</h3>
							<p className="values--text">We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Values;
