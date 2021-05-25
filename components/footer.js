import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__top">
				<div className=" footer__top--inner container">
					<h2 className="footer--title">Sign up and Scoot off today</h2>
					<div className="footer__apps">
						<Image className="footer__apps__child" src="/assets/icons/app-store.svg" alt="Apps Store" width={182} height={56} />
						<Image src="/assets/icons/google-play.svg" alt="Google Play" width={182} height={56} />
					</div>
				</div>
			</div>
			{/* <div className="footer__bottom">
				<div className="footer__bottom--left">
					<Image src="/logo.svg" alt="Apps Store" width={107.82} height={28.56} />
					<div>
						<div className="navbar__links">
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
				</div>
				<div className="footer__bottom--right">
					<Image src="/assets/icons/facebook.svg" alt="Apps Store" width={107.82} height={28.56} />
					<Image src="/assets/icons/twitter.svg" alt="Apps Store" width={107.82} height={28.56} />
					<Image src="/assets/icons/instagram.svg" alt="Apps Store" width={107.82} height={28.56} />
				</div>
			</div> */}
		</footer>
	);
};

export default Footer;
