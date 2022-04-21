import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: '5vw 10vw',

    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(15),
      paddingBottom: theme.spacing(10)
    }
  },
  heading: {
    fontSize: '1.8rem',
    fontWeight: '500'
  },
  timer: {
    fontSize: '4rem',
    fontWeight: '500',

    [theme.breakpoints.down('sm')]: {
      fontSize: '3.5rem',
      textAlign: 'center'
    }
  },
  btnWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  info: {
    '&.MuiGrid-root': {
      display: 'flex',
      flexDirection: 'column'
    },

    [theme.breakpoints.down('sm')]: {
      '&.MuiGrid-root': {
        alignItems: 'center'
      }
    }
  },
  text1: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '30px',
    padding: '0 5vw',

    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  }
}))

export default useStyles
