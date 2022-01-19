import { Button, IconButton, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import useStyles from './useStyles'
import largeFox from '../../assets/svg/largeFox.svg'
import smallFox from '../../assets/svg/smallFox.svg'
import appStore from '../../assets/svg/appStore.svg'
import playStore from '../../assets/svg/playStore.svg'

const ComingSoon = () => {
	const classes = useStyles()
	return (
		<Box className={classes.comingSoon}>
			<img src={largeFox} alt='' className={classes.largeFox} />
			<img src={smallFox} alt='' className={classes.smallFox} />
			<img src={smallFox} alt='' className={classes.smallFox2} />

			<Typography className={classes.heading}>Coming Soon</Typography>

			<Box className={classes.btnWrapper}>
				<IconButton className={classes.downloadBtn} disableRipple>
					<img
						src={appStore}
						alt='download on the App Store'
						style={{ width: '100%' }}
					/>
				</IconButton>
				<IconButton className={classes.downloadBtn} disableRipple>
					<img
						src={playStore}
						alt='download on Google Play'
						style={{ width: '100%' }}
					/>
				</IconButton>
			</Box>

			<Typography className={classes.txt}>
				Subcribe to be the first to get notification on our services when we
				launch
			</Typography>

			<Box className={classes.inputWrapper}>
				<TextField
					variant='outlined'
					placeholder='Enter your email'
					fullWidth
					className={classes.input}
				/>
				<Button
					variant='contained'
					sx={{ backgroundColor: '#004266', height: '54px', width: '173px' }}
				>
					Subscribe
				</Button>
			</Box>
		</Box>
	)
}

export default ComingSoon
