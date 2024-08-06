const Education = () => {
	return (
		<div className='education-container'>
			<div className='about-header'>
				<h3 className='about-title'>
					<i className='fi fi-rr-graduation-cap about-icon'></i> Education
				</h3>
			</div>

			<div className='education-content'>
				<div className='education-data'>
					<div>
						<h3 className='education-department'>Software Engineering</h3>
						<span className='education-institution'>CODE University</span>
						<div className='education-time'>
							<i className='fi fi-ts-calendar-days'></i> 2024 - Present
						</div>
					</div>

					<div>
						<span className='education-circle'></span>
						<span className='education-line'></span>
					</div>
				</div>

				<div className='education-data'>
					<div></div>
					<div>
						<span className='education-circle'></span>
						<span className='education-line'></span>
					</div>

					<div>
						<h3 className='education-department'>Industrial Engineering</h3>
						<span className='education-institution'>
							Middle East Technical University
						</span>
						<div className='education-time'>
							<i className='fi fi-ts-calendar-days'></i> 2021 - 2023
							(Incomplete)
						</div>
					</div>
				</div>

				<div className='education-data'>
					<div>
						<h3 className='education-department'>Mechanical Engineering</h3>
						<span className='education-institution'>
							Middle East Technical University
						</span>
						<div className='education-time'>
							<i className='fi fi-ts-calendar-days'></i> 2018 - 2020 (Changed
							Department)
						</div>
					</div>

					<div>
						<span className='education-circle'></span>
						<span className='education-line'></span>
					</div>
				</div>

				<div className='education-data'>
					<div></div>
					<div>
						<span className='education-circle'></span>
						<span className='education-line'></span>
					</div>
					<div>
						<h3 className='education-department'>
							Control & Automation Technology
						</h3>
						<span className='education-institution'>Istanbul University</span>
						<div className='education-time'>
							<i className='fi fi-ts-calendar-days'></i> 2015 - 2017
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Education
