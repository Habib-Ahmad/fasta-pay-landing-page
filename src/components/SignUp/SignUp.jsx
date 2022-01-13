import { Button, Grid, Typography } from '@mui/material'
import useStyles from './useStyles'
import largeCircle from '../../assets/svg/largeCircle.svg'
import smallCircle from '../../assets/svg/smallCircle.svg'

const SignUp = () => {
	const classes = useStyles()

	return (
		<Grid container className={classes.signUp}>
			<img src={largeCircle} alt='' className={classes.largeCircle} />
			<img src={smallCircle} alt='' className={classes.smallCircle} />
			<Grid item sx={12} md={8} lg={7} className={classes.textWrapper}>
				<Typography variant='h2' sx={{ marginBottom: 1 }}>
					Earn extra money as a fasta boss
				</Typography>
				<Typography className={classes.extraPadding}>
					Set your own schedule, become a Fasta boss
				</Typography>
			</Grid>
			<Grid item sx={12} md={4} lg={5} className={classes.btnWrapper}>
				<Button variant='contained' className={classes.btn}>
					Sign up to ride
				</Button>
			</Grid>
		</Grid>
	)
}

export default SignUp
