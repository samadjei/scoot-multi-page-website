import Navbar from './navbar';
import Head from 'next/head';
import Footer from './footer';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Frontend Mentor | Scoot</title>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Space+Mono:ital,wght@0,700;1,400&display=swap" rel="stylesheet" />
			</Head>
			<div>
				<Navbar />
				{children}
				<Footer />
			</div>
		</>
	);
};

export default Layout;
