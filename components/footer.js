import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__top">
				<div className="footer__top-overlay"> </div>
				<div className=" footer__top-inner container">
					<h2 className="footer--title">Sign up and Scoot off today</h2>
					<div className="footer__apps">
						<div className="footer__apps-child">
							<Image src="/assets/icons/app-store.svg" alt="Apps Store" width={182} height={56} />
						</div>

						<Image src="/assets/icons/google-play.svg" alt="Google Play" width={182} height={56} />
					</div>
				</div>
				<div className="footer__top-bg">
					<Image src="/assets/patterns/semi-circles.svg" alt="Google Play" width={1158} height={158} />
				</div>
			</div>
			<div className="footer__bottom">
				<div className="container footer__bottom-inner">
					<div className="footer__bottom-left">
						<div className="footer__bottom-logo">
							<Image src="/logo-white.svg" alt="Apps Store" width={107.82} height={28.56} />
						</div>

						<div className="footer__bottom-links">
							<Link href="/about">
								<a>About Us</a>
							</Link>
							<Link href="/location">
								<a>Location</a>
							</Link>
							<Link href="/careers">
								<a>Careers</a>
							</Link>
						</div>
					</div>
					<div className="footer__bottom-right">
						<Image src="/assets/icons/facebook.svg" alt="Apps Store" width={24} height={24} />
						<Image className="twitter" src="/assets/icons/twitter.svg" alt="Apps Store" width={24} height={24} />
						<Image src="/assets/icons/instagram.svg" alt="Apps Store" width={24} height={24} />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
