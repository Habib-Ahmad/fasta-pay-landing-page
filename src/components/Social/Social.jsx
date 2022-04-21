import { Box, IconButton } from '@mui/material'
import facebook from '../../assets/social/facebook.svg'
import instagram from '../../assets/social/instagram.svg'
import twitter from '../../assets/social/twitter.svg'
import useStyles from './useStyles'

const Social = () => {
  const classes = useStyles()

  return (
    <Box className={classes.social}>
      <IconButton data-aos="fade-left">
        <img src={facebook} alt="facebook" />
      </IconButton>
      <IconButton
        href="https://instagram.com/fastaride"
        target="_blank"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <img src={instagram} alt="instagram" />
      </IconButton>
      <IconButton
        href="https://twitter.com/fastaride"
        target="_blank"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <img src={twitter} alt="twitter" />
      </IconButton>
    </Box>
  )
}

export default Social
