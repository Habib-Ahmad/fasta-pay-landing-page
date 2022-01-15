import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import useStyles from './useStyles'
import keke from '../../assets/svg/keke.svg'
import smallKeke from '../../assets/svg/smallKeke.svg'
import man from '../../assets/svg/man.svg'
import f from '../../assets/svg/f.svg'
import leftBlob from '../../assets/svg/leftBlob.svg'
import rightBlob from '../../assets/svg/rightBlob.svg'
import leftCircle from '../../assets/svg/leftCircle.svg'
import bookRides from '../../assets/svg/bookRides.svg'
import sendDeliveries from '../../assets/svg/sendDeliveries.svg'
import earnFreePoints from '../../assets/svg/earnFreePoints.svg'

const Header = () => {
	const classes = useStyles()
	return (
		<Box className={classes.header}>
			<Box sx={{ display: 'flex' }}>
				<img className={classes.keke} src={keke} alt='Keke' />
				<img className={classes.smallKeke} src={smallKeke} alt='Small Keke' />
				<img className={classes.man} src={man} alt='Man' />
				<img className={classes.f} src={f} alt='F' />
				<img className={classes.leftBlob} src={leftBlob} alt='Left Blob' />
				<img className={classes.rightBlob} src={rightBlob} alt='Right Blob' />
				<img
					className={classes.leftCircle}
					src={leftCircle}
					alt='Left Circle'
				/>

				<Box className={classes.headingWrapper}>
					<Typography variant='h1' className={classes.heading}>
						<Box className={classes.kekeRide}>Keke ride </Box>has never been
						this easy, Click and Ride
					</Typography>

					<Typography className={classes.subHeading}>
						FASTA TECHNOLOGY LTD is a team of experienced people from deferent
						fields. Aim to simplify and secure the use of keke ride in Nigeria.
					</Typography>

					<Box className={classes.btnWrapper}>
						<Button variant='contained' size='large'>
							Sign up
						</Button>
						<Button variant='outlined' size='large'>
							View more
						</Button>
					</Box>
				</Box>
			</Box>

			<Box className={classes.features}>
				<Box className={classes.feature}>
					<img src={bookRides} alt='Book rides' style={{ marginRight: 15 }} />
					<Box>
						<Typography className={classes.featuresTxt1}>Book Rides</Typography>
						<Typography className={classes.featuresTxt2}>
							Easily book keke rides
						</Typography>
					</Box>
				</Box>

				<Box className={classes.feature}>
					<img
						src={sendDeliveries}
						alt='Send deliveries'
						style={{ marginRight: 15 }}
					/>
					<Box>
						<Typography className={classes.featuresTxt1}>
							Send deliveries
						</Typography>
						<Typography className={classes.featuresTxt2}>
							Easily send deliveries
						</Typography>
					</Box>
				</Box>

				<Box className={classes.feature}>
					<img
						src={earnFreePoints}
						alt='Earn free points'
						style={{ marginRight: 15 }}
					/>
					<Box>
						<Typography className={classes.featuresTxt1}>
							Earn free points
						</Typography>
						<Typography className={classes.featuresTxt2}>
							Can book a ride, donate or mobile recharge
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Header
