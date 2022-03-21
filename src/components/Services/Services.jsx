import { Grid, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import bookRides from '../../assets/bookRides.png'
import earnPoints from '../../assets/earnPoints.svg'
import sendDeliveries from '../../assets/sendDeliveries.png'
import abstract from '../../assets/services/abstract.svg'
import circle from '../../assets/services/circle.svg'
import circle2 from '../../assets/services/circle2.svg'
import circle3 from '../../assets/services/circle3.svg'
import iPhone from '../../assets/services/iPhoneDesktop.png'
import iPhoneMobile from '../../assets/services/iPhoneMobile.png'
import iPhoneWithHand from '../../assets/services/iPhoneWithHandDesktop.png'
import iPhoneWithHandMobile from '../../assets/services/iPhoneWithHandMobile.png'
import money from '../../assets/services/money.svg'
import useStyles from './useStyles'

const Services = () => {
  const classes = useStyles()

  const isDesktop = useMediaQuery('(min-width: 600px)')

  return (
    <Box id="services" className={classes.services}>
      <img src={abstract} alt="Abstract art" className={classes.abstract} />
      <Typography variant="h2" data-aos="fade-up">
        Our Services
      </Typography>
      <Typography
        className={classes.text}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        We provide convenient, safe and secure keke rides. With the aid of our
        registered, civilized and advanced fasta{' '}
        <span style={{ color: '#00AEE8' }}>
          <span style={{ fontWeight: 700 }}>bosses</span> (riders)
        </span>
        , for our
        <span style={{ color: '#00AEE8' }}>
          <span style={{ fontWeight: 700 }}> guests</span> (passengers)
        </span>
        . Earn points for every trip that you take, which you can use to book
        for other trips or donate to any charity foundation of your choice.
      </Typography>

      <Grid
        id="bookRide"
        mt={{ xs: 10, sm: 0 }}
        container
        sx={{ position: 'relative' }}
      >
        <Grid item xs={12} sm={6} data-aos="fade-right">
          <Box className={classes.feature}>
            <Box
              className={classes.featureImg}
              sx={{ backgroundColor: '#1493C917' }}
            >
              <img src={bookRides} alt="Book rides" style={{ width: 60 }} />
            </Box>
            <Box>
              <Typography className={classes.featureTxt1}>
                Book rides
              </Typography>
              <Typography className={classes.featureTxt2}>
                Easily book keke rides to your destination
              </Typography>
            </Box>
          </Box>
          <Typography className={classes.featureTxt3}>
            <span style={{ color: '#00AEE8' }}>Request a ride</span>, meet our
            boss, enjoy the journey, get to your destinsation
          </Typography>
        </Grid>

        <Grid
          mt={{ xs: 5, sm: 0 }}
          item
          xs={12}
          sm={6}
          className={classes.svg}
          sx={{ marginTop: 2 }}
          data-aos="fade-left"
        >
          <img
            src={isDesktop ? iPhone : iPhoneMobile}
            alt="iPhone"
            style={isDesktop ? null : { width: 300 }}
          />
        </Grid>
        <img src={circle} alt="circle" className={classes.circle} />
        <img src={circle2} alt="circle2" className={classes.circle2} />
      </Grid>

      <Grid
        id="deliveries"
        container
        sx={{ display: 'flex', alignItems: 'center' }}
        mt={{ xs: 10, md: -10 }}
        className={classes.wrapReverse}
      >
        <Grid item xs={12} sm={6} className={classes.svg}>
          <img
            src={isDesktop ? iPhoneWithHand : iPhoneWithHandMobile}
            alt="iPhone with hand"
            style={isDesktop ? null : { width: 350 }}
            data-aos="fade-right"
          />
        </Grid>

        <Grid item xs={12} sm={6} data-aos="fade-left">
          <Box className={classes.feature}>
            <Box
              style={{ backgroundColor: '#eaf5fa', marginRight: 15 }}
              className={classes.featureImg}
            >
              <img
                src={sendDeliveries}
                alt="Send Deliveries"
                style={{ width: 60 }}
              />
            </Box>
            <Box>
              <Typography className={classes.featureTxt1}>
                Send Deliveries
              </Typography>
              <Typography className={classes.featureTxt2}>
                Easily send deliveries to any location of your choice
              </Typography>
            </Box>
          </Box>
          <Typography className={classes.featureTxt3}>
            <span style={{ color: '#00AEE8' }}>Request for a delivery</span>,
            meet our boss and get your package delivered in no time
          </Typography>
        </Grid>
        <img src={circle3} alt="" className={classes.circle3} />
      </Grid>

      <Grid
        id="earnPoint"
        container
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Grid item xs={12} sm={6} data-aos="fade-right">
          <Box className={classes.feature}>
            <img
              src={earnPoints}
              alt="Earn points"
              style={{ marginRight: 15, width: 83 }}
            />
            <Box>
              <Typography className={classes.featureTxt1}>
                Earn Points
              </Typography>
              <Typography className={classes.featureTxt2}>
                Easily earn points for every ride you take
              </Typography>
            </Box>
          </Box>
          <Typography className={classes.featureTxt3}>
            <span style={{ color: '#00AEE8' }}>You earn points </span>
            after every ride which you can either use to book for another ride,
            or donate to any charity foundation of your choice
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.svg} data-aos="fade-left">
          <img
            src={money}
            alt="Money"
            style={{ width: 'clamp(300px, 40vw, 450px)' }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Services
