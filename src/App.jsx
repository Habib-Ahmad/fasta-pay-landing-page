import { Box } from '@mui/material'
import NavBar from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './themes/theme'
import { ThemeProvider } from '@mui/material/styles'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Box>
					<NavBar />
				</Box>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
