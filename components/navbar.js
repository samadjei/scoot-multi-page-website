import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';

class Navbar extends Component {
	state = { clicked: false };
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};
	render() {
		return (
			<header className="navbar">
				<div className="navbar__logo">
					<Link href="/">
						<Image src="/logo.svg" alt="Scoot logo" width={107.82} height={28.56} alt="Logo" />
					</Link>
				</div>
				<div className="menu-icon" onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
				<ul className={this.state.clicked ? 'navbar__links active' : 'navbar__links'}>
					<Link href="/about">
						<a>About Us</a>
					</Link>
					<Link href="/location">
						<a>Location</a>
					</Link>
					<Link href="/careers">
						<a>Careers</a>
					</Link>
					<Link href="/">
						<Button className="btn hero--btn " buttonStyle="btn--primary" buttonSize="btn--desktop">
							Get Scootin
						</Button>
					</Link>
				</ul>
			</header>
		);
	}
}

export default Navbar;
