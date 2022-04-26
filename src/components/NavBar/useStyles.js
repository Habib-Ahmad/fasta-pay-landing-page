import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  navBar: {
    position: 'fixed',
    height: 64,
    padding: theme.spacing(0, 3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
    zIndex: 1000,

    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none'
    }
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start'
    }
  },
  logo: {
    width: 150
  },
  navBtnWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  activeNavBtn: {
    '&.MuiButton-root': {
      color: '#00AEE8',
      textTransform: 'none',
      fontSize: '1rem',
      fontWeight: 700,
      marginRight: theme.spacing(3),
      whiteSpace: 'nowrap',

      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  },
  navBtn: {
    '&.MuiButton-root': {
      color: '#000',
      textTransform: 'none',
      fontSize: '1rem',
      fontWeight: 300,
      marginRight: theme.spacing(3),
      whiteSpace: 'nowrap',

      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  },
  contactBtnWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  menuWrapper: {
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  menuItems: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,

    '&>*': {
      justifyContent: 'center',

      '&.MuiButton-root': {
        marginBottom: theme.spacing(3),
        margin: 0
      }
    }
  }
}))

export default useStyles
