import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const Project = ({ project }) => {
	return (
		<div className='project-card' key={project.id}>
			<div className='project-image-container'>
				<Image
					src={`/project-images/${project.image}`}
					alt={project.title}
					layout='fill'
					objectFit='cover'
					className='project-image'
				/>
			</div>
			<div className='project-content'>
				<h3 className='project-title'> {project.title} </h3>
				<p className='project-description'> {project.description} </p>
				<ul className='project-technologies'>
					{project.technologies.map((technology, index) => (
						<li key={index} className='project-techonology'>
							{technology}
						</li>
					))}
				</ul>
			</div>
			<Link href={project.githubLink} target='_blank' className='project-link'>
				<span className='project-link-text'>View Code</span>
				<FaArrowRight className='project-link-icon' />
			</Link>
		</div>
	)
}
export default Project
