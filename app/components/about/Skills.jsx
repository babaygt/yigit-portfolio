import {
	RiNextjsFill,
	RiHtml5Fill,
	RiCss3Fill,
	RiTailwindCssFill,
	RiJavascriptFill,
	RiNodejsFill,
	RiReactjsFill,
} from 'react-icons/ri'

import {
	SiMongodb,
	SiPrisma,
	SiPostgresql,
	SiMongoose,
	SiExpress,
	SiTypescript,
} from 'react-icons/si'

const Skills = () => {
	return (
		<div className='skills-container grid'>
			<div className='about-header'>
				<h3 className='about-title '>
					<i className='fi fi-rr-tool-box about-icon'></i> Skills
				</h3>
			</div>

			<div className='skills-content grid'>
				<div className='skills-box'>
					<RiJavascriptFill className='skills-icon' />
					<h3 className='skills-title'>JavaScript</h3>
				</div>

				<div className='skills-box'>
					<SiTypescript className='skills-icon' />
					<h3 className='skills-title'>TypeScript</h3>
				</div>

				<div className='skills-box'>
					<RiHtml5Fill className='skills-icon' />
					<h3 className='skills-title'>HTML</h3>
				</div>

				<div className='skills-box'>
					<RiCss3Fill className='skills-icon' />
					<h3 className='skills-title'>CSS</h3>
				</div>

				<div className='skills-box'>
					<RiTailwindCssFill className='skills-icon' />
					<h3 className='skills-title'>Tailwind</h3>
				</div>

				<div className='skills-box'>
					<RiReactjsFill className='skills-icon' />
					<h3 className='skills-title'>React</h3>
				</div>

				<div className='skills-box'>
					<RiNextjsFill className='skills-icon' />
					<h3 className='skills-title'>Next.js</h3>
				</div>

				<div className='skills-box'>
					<RiNodejsFill className='skills-icon' />
					<h3 className='skills-title'>Node.js</h3>
				</div>
				<div className='skills-box'>
					<SiExpress className='skills-icon' />
					<h3 className='skills-title'>Express</h3>
				</div>

				<div className='skills-box'>
					<SiMongodb className='skills-icon' />
					<h3 className='skills-title'>MongoDB</h3>
				</div>

				<div className='skills-box'>
					<SiMongoose className='skills-icon' />
					<h3 className='skills-title'>Mongoose</h3>
				</div>

				<div className='skills-box'>
					<SiPostgresql className='skills-icon' />
					<h3 className='skills-title'>PostgreSQL</h3>
				</div>

				<div className='skills-box'>
					<SiPrisma className='skills-icon' />
					<h3 className='skills-title'>Prisma</h3>
				</div>
			</div>
		</div>
	)
}
export default Skills
