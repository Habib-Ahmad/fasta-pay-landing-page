import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    minHeight: '100vh'
  },
  keke: {
    width: '23vw',
    position: 'absolute',
    top: 0,
    left: '7vw',
    zIndex: -100,

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  smallKeke: {
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      position: 'absolute',
      zIndex: -100,
      top: 235
    }
  },
  f: {
    position: 'absolute',
    zIndex: -100,
    top: 'clamp(7%, 18vw, 25%)',
    left: '35vw',
    width: '25vw'
  },
  man: {
    width: '50vw',
    position: 'absolute',
    top: 'clamp(60px, 6vh, 250px)',
    right: 0,
    zIndex: -100,

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  smallMan: {
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      position: 'absolute',
      right: 0,
      top: 150,
      zIndex: -150
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
  rightBlob: {
    position: 'absolute',
    right: 0,
    top: 'clamp(60px, 6vh, 250px)',
    width: '6vw',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  leftCircle: {
    position: 'absolute',
    left: 0,
    zIndex: -200,
    width: '20vw',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  headingWrapper: {
    marginTop: 'clamp(30px, 10vw, 100px)'
  },
  heading: {
    '&.MuiTypography-root': {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginLeft: '30vw',
      width: '60%'
    },

    [theme.breakpoints.down('sm')]: {
      '&.MuiTypography-root': {
        fontSize: '2.25rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        width: '100%'
      }
    }
  },
  head1: {
    textTransform: 'uppercase',
    color: theme.palette.primary.main,

    [theme.breakpoints.down('sm')]: {
      fontWeight: 700,
      fontSize: '3rem',
      textAlign: 'center',
      display: 'block'
    }
  },
  head2: {
    [theme.breakpoints.down('sm')]: {
      fontWeight: 600,
      textAlign: 'center',
      width: '80%',
      display: 'block',
      margin: '0 auto'
    }
  },
  br: {
    display: 'none',

    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  subHeading: {
    '&.MuiTypography-root': {
      fontSize: 'clamp(1rem, 2vw, 1rem)',
      width: '45%',
      marginLeft: '30vw',
      marginTop: theme.spacing(3),
      color: '#5c5c5c',
      lineHeight: '32px'
    },

    [theme.breakpoints.down('md')]: {
      '&.MuiTypography-root': {
        textAlign: 'center',
        width: '100%',
        marginLeft: 0,
        marginTop: theme.spacing(15),
        padding: theme.spacing(0, 8),
        lineHeight: '25px'
      }
    },

    [theme.breakpoints.down('sm')]: {
      '&.MuiTypography-root': {
        marginTop: theme.spacing(40),
        padding: theme.spacing(0, 4)
      }
    }
  },
  btnWrapper: {
    marginTop: theme.spacing(3),
    marginLeft: '30vw',

    '&>:first-child': {
      marginRight: theme.spacing()
    },

    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',

      '&>:first-child': {
        marginRight: 0,
        marginBottom: theme.spacing()
      }
    }
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '18vw',
    flexWrap: 'wrap',
    padding: theme.spacing(5),

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start'
    }
  },
  feature: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(3)
  },
  featureImg: {
    width: '83px !important',
    height: 83,
    display: 'grid',
    placeItems: 'center',
    borderRadius: '20px',
    marginRight: '15px'
  },
  featuresTxt1: {
    '&.MuiTypography-root': {
      fontSize: '1rem',
      fontWeight: 500
    }
  },
  featuresTxt2: {
    '&.MuiTypography-root': {
      fontSize: '0.8rem',
      fontWeight: 400,
      color: '#969696'
    }
  }
}))

export default useStyles
