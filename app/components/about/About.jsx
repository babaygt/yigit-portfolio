import './about.css'
import Education from './Education'
import Language from './Language'
import Skills from './Skills'

const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section-title'>About Me</h2>

			<div className='about-container container grid'>
				<Education />
				<Skills />
				<Language />
			</div>
		</section>
	)
}
export default About
