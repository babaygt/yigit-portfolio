'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import './header.css'

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [activeNav, setActiveNav] = useState('#home')
	const [theme, setTheme] = useState('dark')

	// Effect to get the theme from local storage when the component mounts
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') || 'dark'
		setTheme(savedTheme)
		document.documentElement.setAttribute('data-theme', savedTheme)
	}, [])

	// Effect to apply the theme to the document and save it to local storage
	useEffect(() => {
		localStorage.setItem('theme', theme)
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<header className='header'>
			<nav className='nav container'>
				<Link href='/' className='nav-logo'>
					Yigit
				</Link>

				<div className={toggleMenu ? 'nav-menu show-menu' : 'nav-menu'}>
					<ul className='nav-list'>
						{/* Home */}
						<li className='nav-item'>
							<Link
								href='#home'
								onClick={() => setActiveNav('#home')}
								className={
									activeNav === '#home' ? 'nav-link active-link' : 'nav-link'
								}
							>
								<i className='fi fi-rs-house-chimney nav-icon'></i> Home
							</Link>
						</li>

						{/* About */}
						<li className='nav-item'>
							<Link
								href='#about'
								onClick={() => setActiveNav('#about')}
								className={
									activeNav === '#about' ? 'nav-link active-link' : 'nav-link'
								}
							>
								<i className='fi fi-rs-user nav-icon'></i> About
							</Link>
						</li>

						{/* Projects */}

						<li className='nav-item'>
							<Link
								href='#projects'
								onClick={() => setActiveNav('#projects')}
								className={
									activeNav === '#projects'
										? 'nav-link active-link'
										: 'nav-link'
								}
							>
								<i className='fi fi-rs-apps nav-icon'></i> Projects
							</Link>
						</li>

						{/* Contact */}

						<li className='nav-item'>
							<Link
								href='#contact'
								onClick={() => setActiveNav('#contact')}
								className={
									activeNav === '#contact' ? 'nav-link active-link' : 'nav-link'
								}
							>
								<i className='fi fi-rs-envelope nav-icon'></i> Contact
							</Link>
						</li>
					</ul>

					<i
						className='fi fi-rs-cross nav-close'
						onClick={() => setToggleMenu(!toggleMenu)}
					></i>
				</div>

				<div className='nav-toggle' onClick={() => setToggleMenu(!toggleMenu)}>
					<i className='fi fi-sr-menu-burger nav-toggle'></i>
				</div>

				{/* Theme switcher button */}
				<button
					className={toggleMenu ? 'theme-switcher show-menu' : 'theme-switcher'}
					onClick={toggleTheme}
				>
					{theme === 'dark' ? (
						<i className='fi fi-rr-brightness' title='Switch to light mode'></i>
					) : (
						<i className='fi fi-rr-moon' title='Switch to dark mode'></i>
					)}
				</button>
			</nav>
		</header>
	)
}
export default Header
