import { useState } from 'react'
import { Button, Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import toast, { Toaster } from 'react-hot-toast'
import appStore from '../../assets/footer/appStore.svg'
import playStore from '../../assets/footer/playStore.svg'
import useStyles from './useStyles'
import { useLocation, useNavigate } from 'react-router'
import SignUpForm from '../SignUpForm/SignUpForm'
import Countdown from 'react-countdown'

const Footer = () => {
  const classes = useStyles()
  const location = useLocation()
  const nav = useNavigate()

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    nav(location.pathname + '?modalOpened=true')
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  const notify = () => toast.success('You have successfuly subscribed')

  const date = new Date('2022-06-25')

  return (
    <Grid id="footer" container alignItems="center" className={classes.footer}>
      <Toaster position="top-right" reverseOrder={false} />

      <Grid item xs={12} sm={6} mb={{ xs: 8, sm: 0 }} data-aos="fade-right">
        <Typography className={classes.heading} data-aos="fade-up">
          Count down to launch
        </Typography>
        <Typography className={classes.timer} data-aos="fade-up">
          <Countdown date={date} />
        </Typography>

        <Box
          className={classes.btnWrapper}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <IconButton disableRipple>
            <img src={appStore} alt="download on the App Store" />
          </IconButton>
          <IconButton disableRipple>
            <img src={playStore} alt="download on Google Play" />
          </IconButton>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} className={classes.info}>
        <Typography className={classes.text1} data-aos="fade-up">
          Subcribe to be the first to get notification on our services when we
          launch
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#004266',
            height: '54px',
            width: '173px',
            margin: '0 auto'
          }}
          onClick={handleOpen}
        >
          Subscribe
        </Button>
      </Grid>

      <SignUpForm
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        notify={notify}
      />
    </Grid>
  )
}

export default Footer
