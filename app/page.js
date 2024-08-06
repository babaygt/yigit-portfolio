import Home from './components/home/Home'
import About from './components/about/About'
import { Projects } from './components/projects/Projects'

export default function HomePage() {
	return (
		<main>
			<Home />
			<About />
			<Projects />
		</main>
	)
}
