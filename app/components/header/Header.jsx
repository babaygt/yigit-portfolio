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

		const handleScroll = () => {
			const sections = ['home', 'about', 'projects', 'contact']
			const scrollPosition = window.scrollY

			for (const section of sections) {
				const element = document.getElementById(section)
				if (element) {
					const { offsetTop, offsetHeight } = element
					if (
						scrollPosition >= offsetTop - 100 &&
						scrollPosition < offsetTop + offsetHeight - 100
					) {
						setActiveNav(`#${section}`)
						break
					}
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
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
						{['home', 'about', 'projects', 'contact'].map((item) => (
							<li key={item} className='nav-item'>
								<Link
									href={`#${item}`}
									onClick={() => setActiveNav(`#${item}`)}
									className={
										activeNav === `#${item}`
											? 'nav-link active-link'
											: 'nav-link'
									}
								>
									<i
										className={`fi fi-rs-${
											item === 'home'
												? 'house-chimney'
												: item === 'about'
												? 'user'
												: item === 'projects'
												? 'apps'
												: 'envelope'
										} nav-icon`}
									></i>{' '}
									{item.charAt(0).toUpperCase() + item.slice(1)}
								</Link>
							</li>
						))}
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
