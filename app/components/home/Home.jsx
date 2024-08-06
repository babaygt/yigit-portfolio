import Info from './Info'
import Social from './Social'
import './home.css'

const Home = () => {
	return (
		<section className='home section' id='home'>
			<div className='home-container container grid'>
				<div className='home-content grid'>
					<Info />
					<Social />
				</div>
			</div>
		</section>
	)
}
export default Home
