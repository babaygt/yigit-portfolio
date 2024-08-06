import Link from 'next/link'
import './footer.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-container container'>
				<h1 className='footer-title'>Yigit Baba</h1>
				<ul className='footer-links'>
					<li>
						<Link href='#home' className='footer-link'>
							Home
						</Link>
					</li>
					<li>
						<Link href='#about' className='footer-link'>
							About
						</Link>
					</li>
					<li>
						<Link href='#projects' className='footer-link'>
							Projects
						</Link>
					</li>
					<li>
						<Link href='#contact' className='footer-link'>
							Contact
						</Link>
					</li>
				</ul>
				<div className='footer-copyright'>
					<span>&copy; 2024 Yigit Baba. All rights reserved.</span>
				</div>
			</div>
		</footer>
	)
}
export default Footer
