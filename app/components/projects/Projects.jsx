import './projects.css'
import { projectsData } from './ProjectsData'
import Project from './Project'

export const Projects = () => {
	return (
		<section className='projects section' id='projects'>
			<h2 className='section-title'>Projects</h2>

			<div className='projects-container container grid'>
				{projectsData.map((project) => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</section>
	)
}

export default Projects
