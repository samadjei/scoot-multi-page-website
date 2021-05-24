import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/button';

const Navbar = () => {
	return (
		<nav className="logo container">
			<Image src="/logo.svg" alt="Scoot logo" width={107.82} height={28.56} alt="Logo" />
			<div className="nav-items">
				<Link href="/about">
					<a>About Us</a>
				</Link>
				<Link href="/about">
					<a>Location</a>
				</Link>
				<Link href="/about">
					<a>Careers</a>
				</Link>
			</div>
			<div className="cta">
				<Link href="/">
					<Button className="btn hero--btn" buttonStyle="btn--primary" buttonSize="btn--desktop">
						Get Scootin
					</Button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
