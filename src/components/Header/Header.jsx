import { useState, useEffect } from 'react'
import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import toast, { Toaster } from 'react-hot-toast'
import useStyles from './useStyles'
import keke from '../../assets/header/keke.svg'
import smallKeke from '../../assets/header/smallKeke.svg'
import man from '../../assets/header/man.svg'
import smallMan from '../../assets/header/smallMan.svg'
import f from '../../assets/header/f.svg'
import leftBlob from '../../assets/header/leftBlob.svg'
import rightBlob from '../../assets/header/rightBlob.svg'
import leftCircle from '../../assets/header/leftCircle.svg'
import bookRides from '../../assets/bookRides.png'
import sendDeliveries from '../../assets/sendDeliveries.png'
import earnPoints from '../../assets/header/earnPoints.svg'
import SignUpForm from '../SignUpForm/SignUpForm'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const classes = useStyles()
  const location = useLocation()
  const nav = useNavigate()

  useEffect(() => {
    if (!location.search.includes('modalOpened=true')) {
      setOpen(false)
    }
  }, [location])

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    nav(location.pathname + '?modalOpened=true')
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const notify = () => toast.success('You have successfuly subscribed')

  return (
    <Box className={classes.header}>
      <Toaster position="top-right" />

      <Box sx={{ display: 'flex' }}>
        <img className={classes.keke} src={keke} alt="Keke" data-aos="fade" />
        <img
          className={classes.smallKeke}
          src={smallKeke}
          alt="Small Keke"
          data-aos="fade-right"
        />
        <img
          className={classes.man}
          src={man}
          alt="Man"
          data-aos="fade"
          data-aos-delay="100"
        />
        <img
          className={classes.smallMan}
          src={smallMan}
          alt="Man"
          data-aos="fade"
          data-aos-delay="300"
        />
        <img className={classes.f} src={f} alt="F" data-aos="fade" />
        <img
          className={classes.leftBlob}
          src={leftBlob}
          alt="Left Blob"
          data-aos="fade"
        />
        <img
          className={classes.rightBlob}
          src={rightBlob}
          alt="Right Blob"
          data-aos="fade"
          data-aos-delay="300"
        />
        <img
          className={classes.leftCircle}
          src={leftCircle}
          alt="Left Circle"
        />

        <Box className={classes.headingWrapper}>
          <Typography
            variant="h1"
            className={classes.heading}
            data-aos="fade-up"
          >
            <span className={classes.head1}>Keke rides </span>
            <span className={classes.head2}>
              have never been this easy,
              <br className={classes.br} /> Signup and Ride
            </span>
          </Typography>

          <Typography
            className={classes.subHeading}
            data-aos="fade-up"
            data-aos-delay="50"
          >
            FASTA TECHNOLOGY LTD is a team of experienced people from different
            fields that aim to simplify and secure the use of keke rides in
            Nigeria.
          </Typography>

          <Box
            className={classes.btnWrapper}
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <Button onClick={handleOpen} variant="contained" size="large">
              Sign up
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{ textTransform: 'none' }}
            >
              View more
            </Button>
          </Box>
        </Box>
      </Box>

      <SignUpForm
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        notify={notify}
      />

      <Box className={classes.features}>
        <Box className={classes.feature}>
          <Box
            className={classes.featureImg}
            sx={{
              backgroundColor: '#efeaff'
            }}
            data-aos="fade-left"
          >
            <img src={bookRides} alt="Book rides" style={{ width: 60 }} />
          </Box>
          <Box data-aos="fade-down">
            <Typography className={classes.featuresTxt1}>Book Rides</Typography>
            <Typography className={classes.featuresTxt2}>
              Easily book keke rides
            </Typography>
          </Box>
        </Box>

        <Box className={classes.feature}>
          <Box
            className={classes.featureImg}
            sx={{
              backgroundColor: '#ecffda'
            }}
            data-aos="fade-left"
          >
            <img
              src={sendDeliveries}
              alt="Send deliveries"
              style={{ width: 60 }}
            />
          </Box>
          <Box data-aos="fade-down">
            <Typography className={classes.featuresTxt1}>
              Send deliveries
            </Typography>
            <Typography className={classes.featuresTxt2}>
              Easily send deliveries
            </Typography>
          </Box>
        </Box>

        <Box className={classes.feature}>
          <img
            src={earnPoints}
            alt="Earn free points"
            style={{ marginRight: 15 }}
            data-aos="fade-left"
          />
          <Box data-aos="fade-down">
            <Typography className={classes.featuresTxt1}>
              Earn free points
            </Typography>
            <Typography className={classes.featuresTxt2}>
              Can book a ride, donate or mobile recharge
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
