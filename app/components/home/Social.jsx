import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Social = () => {
	return (
		<div className='home-social'>
			<Link href='https://github.com/babaygt' className='home-social-icon'>
				<FaGithub />
			</Link>

			<Link
				href='https://www.linkedin.com/in/yigitbaba/'
				className='home-social-icon'
			>
				<FaLinkedin />
			</Link>
		</div>
	)
}
export default Social
