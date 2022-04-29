import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    minHeight: '140vh',
    padding: '10vw 10vw 0',

    [theme.breakpoints.down('sm')]: {
      marginTop: '50px',
      minHeight: '120vh',
      padding: '10vw 5vw 0'
    }
  },
  leftBlob: {
    position: 'absolute',
    left: 0,
    top: 'clamp(80px, 6vh, 100px)',
    width: '4vw',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  spiral2: {
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: '100px'
    }
  },
  point: {
    position: 'absolute',
    left: '10%',
    top: '45%',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  phone: {
    position: 'absolute',
    left: '20%',
    top: '40%',

    [theme.breakpoints.down('sm')]: {
      left: '46%',
      top: '40%',
      width: '200px'
    }
  },
  doublePhone: {
    position: 'absolute',
    right: '0%',
    top: '10%',
    width: '500px',

    [theme.breakpoints.down('sm')]: {
      top: '3%',
      width: '300px'
    }
  },
  heading: {
    '&.MuiTypography-root': {
      fontSize: '2.5rem',
      width: '60%',

      '&>span': {
        fontFamily: 'Mansalva',
        color: theme.palette.primary.main
      }
    },

    [theme.breakpoints.down('sm')]: {
      '&.MuiTypography-root': {
        fontSize: '1.4rem',
        lineHeight: '3rem',
        marginTop: '100vw',
        width: '80%'
      }
    }
  },
  btnWrapper: {
    marginLeft: '30vw',

    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginTop: '15vw'
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: '-3vw'
    }
  },
  features: {
    marginTop: '850px',
    marginBottom: '85px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginTop: '300px',

      '&>img': {
        display: 'none'
      }
    }
  },
  feature: {
    width: '33%',

    '&>img': {
      display: 'block',
      margin: '30px auto',

      [theme.breakpoints.down('sm')]: {
        margin: '0 20px 0 0'
      }
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: '40px'
    }
  },
  featureText: {
    '&.MuiTypography-root': {
      textAlign: 'center',
      fontWeight: '500',

      [theme.breakpoints.down('sm')]: {
        textAlign: 'left'
      }
    }
  }
}))

export default useStyles
