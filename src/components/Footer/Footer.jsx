import { Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import facebook from '../../assets/footer/facebook.svg'
import instagram from '../../assets/footer/instagram.svg'
import linkedin from '../../assets/footer/linkedin.svg'
import twitter from '../../assets/footer/twitter.svg'
import logo from '../../assets/logo.svg'
import useStyles from './useStyles'

const Footer = () => {
  const classes = useStyles()

  return (
    <>
      <Grid
        id="footer"
        container
        alignItems="center"
        className={classes.footer}
      >
        <Grid
          item
          xs={12}
          sm={6}
          mb={{ xs: 8, sm: 0 }}
          display="flex"
          justifyContent="center"
          data-aos="fade-down-right"
        >
          <img
            src={logo}
            alt="fasta"
            style={{ width: 'clamp(150px, 40vw, 400px)' }}
          />
        </Grid>

        <Grid item xs={12} sm={6} className={classes.info}>
          <Typography
            sx={{ fontSize: 17, fontWeight: 500, marginBottom: 2 }}
            className={classes.text1}
            data-aos="fade-up"
          >
            Contact us
          </Typography>
          <Typography
            sx={{ fontSize: 16, fontWeight: 400, marginBottom: 4 }}
            className={classes.text2}
            data-aos="fade-up"
          >
            <strong>Email:</strong> info@fastaride.ng
          </Typography>
          <Box sx={{ marginBottom: 2 }}>
            <IconButton data-aos="fade-left">
              <img
                src={facebook}
                alt="facebook"
                style={{ width: 'clamp(60px, 10vw, 100px)' }}
              />
            </IconButton>
            <IconButton
              href="https://instagram.com/fastaride"
              target="_blank"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <img
                src={instagram}
                alt="instagram"
                style={{ width: 'clamp(60px, 10vw, 100px)' }}
              />
            </IconButton>
            <IconButton
              href="https://twitter.com/fastaride"
              target="_blank"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <img
                src={twitter}
                alt="twitter"
                style={{ width: 'clamp(60px, 10vw, 100px)' }}
              />
            </IconButton>
            <IconButton data-aos="fade-left" data-aos-delay="900">
              <img
                src={linkedin}
                alt="linkedin"
                style={{ width: 'clamp(60px, 10vw, 100px)' }}
              />
            </IconButton>
          </Box>

          <Box className={classes.copyright}>
            <Typography>
              Copyright ® 2021 fasta inc. All rights Reserved
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer
