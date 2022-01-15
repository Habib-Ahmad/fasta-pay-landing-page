import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",

		allVariants: {
			fontSize: 'clamp(1.875rem, 4vw, 1.125rem)'
		},

		h1: {
			fontSize: 'clamp(.8rem, 3.5vw, 2.5rem)',
			fontWeight: '600'
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
				root: {
					boxShadow: 'none',
					'&:hover': {
						boxShadow: 'none'
					}
				},

				contained: {
					color: '#fff',
					textTransform: 'none'
				},

				containedSizeMedium: {
					fontSize: 13
				},

				sizeLarge: {
					width: 200
				}
			}
		},

		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					backgroundColor: '#fff',
					fontSize: 16
				}
			}
		}
	}
})
