// import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import useStyles from './useStyles'

const Header = () => {
	const classes = useStyles()
	return <Grid container className={classes.header}></Grid>
}

export default Header
