import './contact.css'
import Link from 'next/link'
import { FaEnvelope, FaLinkedin, FaArrowRight } from 'react-icons/fa'

const Contact = () => {
	return (
		<section className='contact section' id='contact'>
			<h2 className='section-title'>Contact</h2>
			<span className='section-subtitle'>Get in touch</span>

			<div className='contact-container container grid'>
				<div className='contact-card'>
					<FaEnvelope className='contact-card-icon' />
					<h3 className='contact-card-title'>Email</h3>
					<span className='contact-card-info'>yigitbaba.contact@gmail.com</span>
					<Link
						href='mailto:yigitbaba.contact@gmail.com'
						target='_blank'
						className='contact-card-button'
					>
						<span className='contact-card-button-text'>Write an email </span>
						<FaArrowRight className='contact-card-button-icon' />
					</Link>
				</div>

				<div className='contact-card'>
					<FaLinkedin className='contact-card-icon' />
					<h3 className='contact-card-title'>LinkedIn</h3>
					<span className='contact-card-info'>linkedin.com/in/yigitbaba</span>

					<Link
						href='https://www.linkedin.com/in/yigitbaba/'
						target='_blank'
						className='contact-card-button'
					>
						<span className='contact-card-button-text'>
							Connect on LinkedIn
						</span>
						<FaArrowRight className='contact-card-button-icon' />
					</Link>
				</div>
			</div>
		</section>
	)
}
export default Contact
