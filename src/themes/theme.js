import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	typography: {
		fontFamily: "'Poppins', 'sans-serif'"
	},

	palette: {
		primary: { main: '#00AEE8' }
	},

	shape: { borderRadius: 6 },

	components: {
		MuiButton: {
			styleOverrides: {
				contained: {
					color: '#fff',
					boxShadow: 'none',
					fontSize: 13,
					textTransform: 'none'
				}
			}
		}
	}
})
