import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  about: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '400px',
    color: '#fff',
    position: 'relative',
    padding: '0 10vw',

    [theme.breakpoints.down('sm')]: {
      height: '70vh',
      paddingBottom: '10vw'
    }
  },
  largeCircle: {
    position: 'absolute',
    left: '90px',

    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  smallCircle: {
    position: 'absolute',
    right: '160px',
    top: 0,

    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  mobileCircle: {
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'block',
      position: 'absolute',
      right: 0,
      top: 0
    }
  },
  textWrapper: {
    width: '100%',
    paddingTop: '2vw',
    zIndex: 100
  },
  txt2: {
    '&.MuiTypography-root': {
      fontSize: '1.2rem',
      lineHeight: '2.4rem'
    }
  },
  btnWrapper: {
    display: 'grid',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  btn: {
    '&.MuiButton-root': {
      backgroundColor: '#fff',
      color: '#000',
      borderRadius: '60px',
      width: '237px',
      height: '54px',
      fontSize: 16,

      [theme.breakpoints.down('lg')]: {
        width: '200px'
      }
    }
  }
}))

export default useStyles
