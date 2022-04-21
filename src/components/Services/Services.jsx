import { Grid, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
// import abstract from '../../assets/services/abstract.svg'
import circle from '../../assets/services/circle.svg'
import iPhone from '../../assets/services/iPhoneDesktop.png'
import iPhoneWithHand from '../../assets/services/iPhoneWithHandDesktop.png'
import money from '../../assets/services/money.svg'
import useStyles from './useStyles'

const Services = () => {
  const classes = useStyles()

  const isDesktop = useMediaQuery('(min-width: 600px)')

  return (
    <Box id="services" className={classes.services}>
      {/* <img src={abstract} alt="Abstract art" className={classes.abstract} /> */}

      <Grid id="bookRide" container sx={{ position: 'relative' }}>
        <Grid item xs={6} data-aos="fade-right">
          <Box
            className={classes.feature}
            sx={{
              justifyContent: 'flex-end',
              paddingTop: isDesktop ? 0 : '50px'
            }}
          >
            <Box
              className={classes.featureImg}
              sx={{ backgroundColor: '#1493C917' }}
            />
            <Box>
              <Typography className={classes.featureTxt1}>
                Fastest QR Code Payment
              </Typography>
              <Typography className={classes.featureTxt2}>
                Send or receive money easily by scanning QR code
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          mt={{ xs: 5, sm: 0 }}
          item
          xs={6}
          className={classes.svg}
          sx={{ marginTop: 2 }}
          data-aos="fade-left"
        >
          <img
            src={iPhone}
            alt="iPhone"
            style={
              isDesktop
                ? { marginRight: -200 }
                : { width: '150%', marginRight: '-130px' }
            }
          />
        </Grid>
        <img src={circle} alt="circle" className={classes.circle} />
      </Grid>

      <Grid
        id="deliveries"
        container
        sx={{ display: 'flex', alignItems: 'center' }}
        mt={{ xs: 5, md: -40 }}
        className={classes.wrapReverse}
      >
        <Grid item xs={6} className={classes.svg}>
          <img
            src={iPhoneWithHand}
            alt="iPhone with hand"
            style={isDesktop ? null : { width: '100%' }}
            data-aos="fade-right"
          />
        </Grid>

        <Grid item xs={6} data-aos="fade-left">
          <Box
            className={classes.feature}
            sx={{ marginTop: isDesktop ? '300px' : 0 }}
          >
            <Box
              style={{ backgroundColor: '#eaf5fa', marginRight: 15 }}
              className={classes.featureImg}
            />
            <Box>
              <Typography className={classes.featureTxt1}>
                Earn points for every transaction you make
              </Typography>
              <Typography className={classes.featureTxt2}>
                The more you spend, the more points you earn
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid
        id="earnPoint"
        container
        mt={{ xs: 5 }}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Grid item xs={6} data-aos="fade-right">
          <Box className={classes.feature}>
            <Box
              style={{ backgroundColor: '#eaf5fa', marginRight: 15 }}
              className={classes.featureImg}
            />
            <Box>
              <Typography className={classes.featureTxt1}>
                Easily redeem points
              </Typography>
              <Typography className={classes.featureTxt2}>
                Reseem points and use as payment or donate to local charity of
                your choice
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} className={classes.svg} data-aos="fade-left">
          <img src={money} alt="Money" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Services
