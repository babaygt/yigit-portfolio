import Home from './components/home/Home'
import About from './components/about/About'
import { Projects } from './components/projects/Projects'
import Contact from './components/contact/Contact'

export default function HomePage() {
	return (
		<main>
			<Home />
			<About />
			<Projects />
			<Contact />
		</main>
	)
}
