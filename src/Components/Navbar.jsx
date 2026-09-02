import { useState } from 'react'

const Icon = ({ name }) => {
	const paths = {
		search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 5 5" /></>,
		bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
		menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
		close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
	}

	return (
		<svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
			{paths[name]}
		</svg>
	)
}

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="site-header">
			<nav className="navbar" aria-label="Main navigation">
				<a className="brand" href="/" aria-label="Codecademy home">
					<span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
					<span className="brand-name">codecademy</span>
				</a>

				<div className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
					<a href="#learn">Learn</a>
					<a href="#practice">Practice</a>
					<a href="#projects">Projects</a>
					<a href="#resources">Resources</a>
					<div className="mobile-actions">
						<a className="sign-in" href="#sign-in">Sign In</a>
						<a className="start-learning" href="#start-learning">Start learning</a>
					</div>
				</div>

				<div className="nav-actions">
					<button className="icon-button search-button" type="button" aria-label="Search">
						<Icon name="search" />
					</button>
					<button className="icon-button notification-button" type="button" aria-label="Notifications">
						<Icon name="bell" />
						<span className="notification-dot" aria-hidden="true" />
					</button>
					<a className="sign-in desktop-only" href="#sign-in">Sign In</a>
					<a className="start-learning desktop-only" href="#start-learning">Start learning</a>
					<button className="icon-button menu-button" type="button" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<Icon name={isMenuOpen ? 'close' : 'menu'} />
					</button>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
