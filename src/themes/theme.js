import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'Mansalva', 'sans-serif'",

    h2: {
      fontSize: '2rem',
      fontWeight: '600'
    },

    h3: {
      fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
      fontWeight: '600'
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
          textTransform: 'none',
          backgroundColor:
            'linear-gradient(180deg, rgba(225,289,55,0.58) 0%, #ffbd37 100%)'
        },

        containedSizeMedium: {
          fontSize: 13
        },

        sizeLarge: {
          width: 200
        }
      }
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          fontSize: 16,
          padding: 0
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 16
        }
      }
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          fontSize: '.1rem'
        }
      }
    }
  }
})
