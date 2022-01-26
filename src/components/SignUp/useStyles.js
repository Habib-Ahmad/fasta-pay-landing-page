import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  signUp: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '243px',
    color: '#fff',
    position: 'relative',
    padding: '0 5vw',

    [theme.breakpoints.down('sm')]: {
      height: '189px'
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
  textWrapper: {
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    zIndex: 100
  },
  txt2: {
    '&.MuiTypography-root': {
      fontSize: '1rem',
      textAlign: 'center'
    }
  },
  btnWrapper: {
    display: 'grid',
    placeItems: 'center',
    width: '100%'
  },
  btn: {
    '&.MuiButton-root': {
      backgroundColor: '#fff',
      color: '#000',
      borderRadius: '60px',
      width: '237px',
      height: '54px',
      fontSize: 16,
      textTransform: 'uppercase',

      '&:hover': {
        color: '#fff'
      },

      [theme.breakpoints.down('lg')]: {
        width: '200px'
      }
    }
  }
}))

export default useStyles
