import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import leftBlob from '../../assets/header/leftBlob.svg'
import getStarted from '../../assets/header/getStarted.svg'
import spiral2 from '../../assets/header/spiral2.svg'
import point from '../../assets/header/point.svg'
import phone from '../../assets/header/phone2.png'
import doublePhone from '../../assets/header/doublePhone.png'
import qrCode from '../../assets/header/qrCode.svg'
import transactions from '../../assets/header/transactions.svg'
import charges from '../../assets/header/charges.svg'
import arrow1 from '../../assets/header/arrow1.svg'
import arrow2 from '../../assets/header/arrow2.svg'
import SignUpForm from '../SignUpForm/SignUpForm'
import useStyles from './useStyles'

const BusinessHeader = () => {
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
        data-aos="fade"
      />
      <img className={classes.point} src={point} alt="Point" data-aos="fade" />
      <img className={classes.phone} src={phone} alt="Phone" data-aos="fade" />
      <img
        className={classes.doublePhone}
        src={doublePhone}
        alt="Phone"
        data-aos="fade"
      />

      <Box className={classes.headingWrapper}>
        <Typography variant="h1" className={classes.heading} data-aos="fade-up">
          With our <span>quick QR code </span>payment method, you can easily
          expand your business.
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
        </Box>
      </Box>

      <Box className={classes.features}>
        <Box className={classes.feature}>
          <img src={qrCode} alt="QR Code" />
          <Typography className={classes.featureText}>
            Easily Expand your bussiness with Our Advance Qr code payment
          </Typography>
        </Box>
        <img src={arrow1} alt="" />
        <Box className={classes.feature}>
          <img src={transactions} alt="Transactions" />
          <Typography className={classes.featureText}>
            Limitless transactions
          </Typography>
        </Box>
        <img src={arrow2} alt="" />
        <Box className={classes.feature}>
          <img src={charges} alt="Charges" />
          <Typography className={classes.featureText}>
            Avoid unnecessary charges
          </Typography>
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

export default BusinessHeader
