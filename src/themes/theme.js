import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",

		allVariants: {
			fontSize: 'clamp(0.875rem, 2vw, 1rem)'
		},

		h2: {
			fontSize: 'clamp(1.25rem, 3.5vw, 2rem)',
			fontWeight: '500'
		}
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
