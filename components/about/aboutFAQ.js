import React, { useState } from 'react';
import Faq from '../faq';
import DrivingFaq from '../faqs/drivingFaq';

const aboutFAQ = () => {
	const [faqs, setfaqs] = useState([
		{
			question: 'How do I download the app?',
			answer: 'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.',
			open: true,
		},
		{
			question: 'Can I find a nearby Scoots?',
			answer: "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information",
			open: false,
		},
		{
			question: 'Do I need a license to ride?',
			answer: 'Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.',
			open: false,
		},
	]);

	const [drivingFaq, setDrivingFaq] = useState([
		{
			question: 'Should I wear a helmet?',
			answer: 'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend we want you to be as safe as possible while Scooting.',
			open: false,
		},
		{
			question: 'How about the rules & regulations?',
			answer: "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.",
			open: false,
		},
		{
			question: 'What if I damage my Scoot?',
			answer: "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.",
			open: false,
		},
	]);

	// Calls a function to calls one of the questions above
	const toggleFAQ = (index) => {
		setfaqs(
			faqs.map((faq, i) => {
				if (i === index) {
					faq.open = !faq.open;
				} else {
					faq.open = false;
				}
				return faq;
			})
		);
	};

	const switchFaq = (index) => {
		setDrivingFaq(
			drivingFaq.map((drivingFaq, i) => {
				if (i === index) {
					drivingFaq.open = !drivingFaq.open;
				} else {
					drivingFaq.open = false;
				}
				return drivingFaq;
			})
		);
	};

	return (
		<section className="faqs">
			<div className="container">
				<h2 className='faq--title'>FAQs</h2>
				<div className="faq__works">
					<h3 className="title__top">How it works</h3>
					<div className="faq__inner">
						{faqs.map((faq, i) => (
							<div>
								<Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
							</div>
						))}
					</div>
				</div>
				<div className="faq__works faq__driving">
					<h3 className="title__top">Safe Driving</h3>
					<div className="faq__inner">
						{drivingFaq.map((faq, i) => (
							<div>
								<DrivingFaq faq={faq} index={i} switchFaq={switchFaq} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
export default aboutFAQ;
