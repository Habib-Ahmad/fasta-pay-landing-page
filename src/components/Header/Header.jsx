import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import useStyles from './useStyles'
import keke from '../../assets/header/keke.svg'
import smallKeke from '../../assets/header/smallKeke.png'
import man from '../../assets/header/man.svg'
import smallMan from '../../assets/header/smallMan.png'
import f from '../../assets/header/f.svg'
import leftBlob from '../../assets/header/leftBlob.svg'
import rightBlob from '../../assets/header/rightBlob.svg'
import leftCircle from '../../assets/header/leftCircle.svg'
import bookRides from '../../assets/bookRides.png'
import sendDeliveries from '../../assets/sendDeliveries.png'
import earnPoints from '../../assets/earnPoints.svg'

const Header = () => {
	const classes = useStyles()

	return (
		<Box className={classes.header}>
			<Box sx={{ display: 'flex' }}>
				<img className={classes.keke} src={keke} alt='Keke' />
				<img className={classes.smallKeke} src={smallKeke} alt='Small Keke' />
				<img className={classes.man} src={man} alt='Man' />
				<img className={classes.smallMan} src={smallMan} alt='Man' />
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
						<span className={classes.head1}>Keke rides </span>
						<span className={classes.head2}>
							have never been this easy,
							<br className={classes.br} /> Click and Ride
						</span>
					</Typography>

					<Typography className={classes.subHeading}>
						FASTA TECHNOLOGY LTD is a team of experienced people from different
						fields that aim to simplify and secure the use of keke rides in
						Nigeria.
					</Typography>

					<Box className={classes.btnWrapper}>
						<Button variant='contained' size='large'>
							Sign up
						</Button>

						<Button
							variant='outlined'
							size='large'
							sx={{ textTransform: 'none' }}
						>
							View more
						</Button>
					</Box>
				</Box>
			</Box>

			<Box className={classes.features}>
				<Box className={classes.feature}>
					<Box
						className={classes.featureImg}
						sx={{
							backgroundColor: '#efeaff'
						}}
					>
						<img src={bookRides} alt='Book rides' />
					</Box>
					<Box>
						<Typography className={classes.featuresTxt1}>Book Rides</Typography>
						<Typography className={classes.featuresTxt2}>
							Easily book keke rides
						</Typography>
					</Box>
				</Box>

				<Box className={classes.feature}>
					<Box
						className={classes.featureImg}
						sx={{
							backgroundColor: '#ecffda'
						}}
					>
						<img src={sendDeliveries} alt='Send deliveries' />
					</Box>
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
						src={earnPoints}
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
