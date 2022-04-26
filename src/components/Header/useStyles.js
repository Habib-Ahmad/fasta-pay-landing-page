import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    minHeight: '160vh',
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
    top: '20px',
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
    right: '3%',
    bottom: '0',

    [theme.breakpoints.down('sm')]: {
      bottom: 'auto',
      top: '10%',
      left: '45%'
    }
  },
  point: {
    position: 'absolute',
    right: '30%',
    top: '50%',

    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  phone: {
    position: 'absolute',
    left: '5%',
    top: '45%',

    [theme.breakpoints.down('sm')]: {
      top: '68%',
      left: '10%',
      width: '350px'
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
        marginTop: '20px'
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
