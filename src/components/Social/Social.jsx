import { Box, IconButton } from '@mui/material'
import facebook from '../../assets/social/facebook.svg'
import instagram from '../../assets/social/instagram.svg'
import twitter from '../../assets/social/twitter.svg'
import useStyles from './useStyles'

const Social = () => {
  const classes = useStyles()

  return (
    <Box className={classes.social}>
      <IconButton href="https://twitter.com/fastaride" target="_blank">
        <img src={twitter} alt="twitter" />
      </IconButton>
      <IconButton href="https://instagram.com/fastaride" target="_blank">
        <img src={instagram} alt="instagram" />
      </IconButton>
      <IconButton>
        <img src={facebook} alt="facebook" />
      </IconButton>
    </Box>
  )
}

export default Social
