import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import ComingSoon from './components/ComingSoon/ComingSoon'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './themes/theme'
import { ThemeProvider } from '@mui/material/styles'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<NavBar />
				<Header />
				<SignUp />
				<Services />
				<ComingSoon />
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
