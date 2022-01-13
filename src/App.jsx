// import { Box } from '@mui/material'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './themes/theme'
import { ThemeProvider } from '@mui/material/styles'
import SignUp from './components/SignUp/SignUp'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<NavBar />
				<Header />
				<SignUp />
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
