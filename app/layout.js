import { GoogleAnalytics } from '@next/third-parties/google'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const open_sans = Open_Sans({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-open-sans',
})

export const metadata = {
	title: 'Yigit Baba',
	description: 'Yigit Baba is a software developer based in Berlin.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${open_sans.variable}`}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
			<GoogleAnalytics gaId='G-RCKCLS0TDT' />
		</html>
	)
}
