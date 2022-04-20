import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import leftBlob from '../../assets/header/leftBlob.svg'
import getStarted from '../../assets/header/getStarted.svg'
import qrCode from '../../assets/header/qrCode.png'
import spiral from '../../assets/header/spiral.svg'
import spiral2 from '../../assets/header/spiral2.svg'
import man from '../../assets/header/man.png'
import point from '../../assets/header/point.svg'
import phone from '../../assets/header/phone.png'
import SignUpForm from '../SignUpForm/SignUpForm'
import useStyles from './useStyles'

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
    <Box id="home" className={classes.header}>
      <Toaster position="top-right" />

      <img
        className={classes.leftBlob}
        src={leftBlob}
        alt="Left Blob"
        // data-aos="fade"
      />
      <img
        className={classes.qrCode}
        src={qrCode}
        alt="QR Code"
        // data-aos="fade"
      />
      <img
        className={classes.spiral}
        src={spiral}
        alt="Arrow"
        // data-aos="fade"
      />
      <img
        className={classes.man}
        src={man}
        alt="Man"
        //  data-aos="fade"
      />
      <img
        className={classes.point}
        src={point}
        alt="Point"
        //  data-aos="fade"
      />
      <img
        className={classes.phone}
        src={phone}
        alt="Phone"
        //  data-aos="fade"
      />

      <Box className={classes.headingWrapper}>
        <Typography variant="h1" className={classes.heading} data-aos="fade-up">
          The simplest way to <span>send and receive money</span> while also
          earning money.
        </Typography>

        <Box
          className={classes.btnWrapper}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <img
            className={classes.spiral2}
            src={spiral2}
            alt="Arrow"
            data-aos="fade"
          />
          <IconButton
            sx={{ padding: '0', justifyContent: 'flex-start' }}
            onClick={handleOpen}
            variant="contained"
            size="large"
          >
            <img style={{ width: '70%' }} src={getStarted} alt="Get started" />
          </IconButton>

          {/* <Button
            variant="outlined"
            size="large"
            sx={{ textTransform: 'none' }}
            onClick={() => {
              document.getElementById('services').scrollIntoView()
            }}
          >
            View more
          </Button> */}
        </Box>
      </Box>

      <SignUpForm
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        notify={notify}
      />
    </Box>
  )
}

export default Header
