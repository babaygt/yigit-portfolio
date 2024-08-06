import { GrLanguage } from 'react-icons/gr'

const Language = () => {
	return (
		<div className='language-container grid'>
			<div className='about-header'>
				<h3 className='about-title'>
					<GrLanguage className='about-icon ' />
					Languages
				</h3>
			</div>

			<div className='language-content grid'>
				<div className='language-data'>
					<div className='language-box'>
						<h3 className='language-title'>Turkish</h3>
						<span className='language-level'>Native</span>
					</div>
				</div>

				<div className='language-data'>
					<div className='language-box'>
						<h3 className='language-title'>English</h3>
						<span className='language-level'>Advanced</span>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Language
