import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import useStyles from './useStyles'
import bookRides from '../../assets/svg/services/bookRides.svg'
import sendDeliveries from '../../assets/svg/services/sendDeliveries.svg'
import earnPoints from '../../assets/svg/services/earnPoints.svg'
import iPhone from '../../assets/svg/services/iPhone.svg'
import iPhoneWithHand from '../../assets/svg/services/iPhoneWithHand.svg'
import money from '../../assets/svg/services/money.svg'
import circle from '../../assets/svg/services/circle.svg'
import circle2 from '../../assets/svg/services/circle2.svg'

const Services = () => {
	const classes = useStyles()

	return (
		<Box className={classes.services}>
			<Typography variant='h2'>Our Services</Typography>
			<Typography className={classes.text}>
				We provide a convinience, safe and secure keke rides. with the aid of
				our registered, civilized and advance fasta{' '}
				<span style={{ color: '#00AEE8' }}>
					<span style={{ fontWeight: 700 }}>bosses</span> (riders)
				</span>
				, for our
				<span style={{ color: '#00AEE8' }}>
					<span style={{ fontWeight: 700 }}> guests</span> (passengers)
				</span>
				. And you also earn points for every trip that you take, which you can
				use to book for another trip or donate to any charity foundattion of
				your choice.
			</Typography>

			<Grid container sx={{ position: 'relative' }}>
				<Grid item xs={12} sm={6}>
					<Box className={classes.feature}>
						<img src={bookRides} alt='Book rides' style={{ marginRight: 15 }} />
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

				<Grid item xs={12} sm={6} className={classes.svg}>
					<img
						src={iPhone}
						alt='iPhone'
						style={{ width: 'clamp(150px, 23vw, 300px)' }}
					/>
				</Grid>
				<img src={circle} alt='circle' className={classes.circle} />
				<img src={circle2} alt='circle2' className={classes.circle2} />
			</Grid>

			<Grid
				container
				sx={{ display: 'flex', alignItems: 'center' }}
				mt={{ sm: -5, md: -10 }}
				className={classes.wrapReverse}
			>
				<Grid item xs={12} sm={6} className={classes.svg}>
					<img
						src={iPhoneWithHand}
						alt='iPhone with hand'
						style={{ width: 'clamp(250px, 33vw, 450px)' }}
					/>
				</Grid>

				<Grid item xs={12} sm={6}>
					<Box className={classes.feature}>
						<img
							src={sendDeliveries}
							alt='Send Deliveries'
							style={{ marginRight: 15 }}
						/>
						<Box>
							<Typography className={classes.featureTxt1}>
								Send Deliverires
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
			</Grid>

			<Grid container sx={{ display: 'flex', alignItems: 'center' }}>
				<Grid item xs={12} sm={6}>
					<Box className={classes.feature}>
						<img
							src={earnPoints}
							alt='Earn points'
							style={{ marginRight: 15 }}
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

				<Grid item xs={12} sm={6} className={classes.svg}>
					<img
						src={money}
						alt='Money'
						style={{ width: 'clamp(200px, 40vw, 450px)' }}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Services
