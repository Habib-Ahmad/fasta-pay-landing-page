import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    minHeight: '140vh',
    padding: '10vw 10vw 0',

    [theme.breakpoints.down('sm')]: {
      marginTop: '50px',
      minHeight: '115vh',
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
  qrCode: {
    position: 'absolute',
    right: '20%',
    top: '15%',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  spiral: {
    position: 'absolute',
    right: '10%',
    top: '25%',
    width: '150px',

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
  man: {
    position: 'absolute',
    right: '5%',
    bottom: 0,

    [theme.breakpoints.down('sm')]: {
      right: '-35%'
    }
  },
  point: {
    position: 'absolute',
    right: '33%',
    top: '50%',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  phone: {
    position: 'absolute',
    left: '30%',
    top: '45%',

    [theme.breakpoints.down('sm')]: {
      top: '5%',
      left: '50%',
      width: '150px'
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
        marginTop: '90vw'
      }
    }
  },
  btnWrapper: {
    marginLeft: '30vw',
    marginTop: '-3vw',

    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginTop: '15vw'
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: '-3vw'
    }
  }
}))

export default useStyles
