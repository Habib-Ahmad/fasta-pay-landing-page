import { useState, useEffect } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import useStyles from './useStyles'
import largeCircle from '../../assets/signUp/largeCircle.svg'
import smallCircle from '../../assets/signUp/smallCircle.svg'
import mobileCircle from '../../assets/signUp/mobileCircle.svg'
import toast, { Toaster } from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import SignUpForm from '../SignUpForm/SignUpForm'

const About = () => {
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
    <Grid id="about" container className={classes.about}>
      <img
        src={largeCircle}
        alt=""
        className={classes.largeCircle}
        data-aos="fade-right"
        data-aos-delay="300"
      />
      <img
        src={smallCircle}
        alt=""
        className={classes.smallCircle}
        data-aos="fade-left"
        data-aos-delay="300"
      />
      <img
        src={mobileCircle}
        alt=""
        className={classes.mobileCircle}
        data-aos="fade-left"
        data-aos-delay="300"
      />
      <Grid item xs={12} className={classes.textWrapper} data-aos="fade-right">
        <Typography variant="h3" sx={{ margin: '32px 0' }}>
          About Us
        </Typography>
        <Typography className={classes.txt2}>
          We provide fast, efficient and secure payment system with the aid of
          our Advance QR code. Earn points for every transactions that you make,
          which you can use to for another transaction or donate to any charity
          foundation of your choice.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.btnWrapper} data-aos="fade-left">
        <Button
          onClick={handleOpen}
          variant="contained"
          className={classes.btn}
        >
          Get Started
        </Button>
      </Grid>

      <Toaster position="top-right" reverseOrder={false} />

      <SignUpForm
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        notify={notify}
      />
    </Grid>
  )
}

export default About
