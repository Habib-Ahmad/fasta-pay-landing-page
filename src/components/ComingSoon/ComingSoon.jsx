import { useState, useEffect } from 'react'
import { Button, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import toast, { Toaster } from 'react-hot-toast'
import useStyles from './useStyles'
import largeFox from '../../assets/comingSoon/largeFox.svg'
import smallFox from '../../assets/comingSoon/smallFox.svg'
import appStore from '../../assets/comingSoon/appStore.svg'
import playStore from '../../assets/comingSoon/playStore.svg'
import SignUpForm from '../SignUpForm/SignUpForm'
import { useLocation, useNavigate } from 'react-router-dom'

const ComingSoon = () => {
	const classes = useStyles()
	const location = useLocation()
	const nav = useNavigate()

	useEffect(() => {
		if (!location.search.includes('modalOpened=true')) {
			setOpen(false)
		}
	}, [location])

	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		nav(location.pathname + '?modalOpened=true')
		setOpen(true)
	}

	const handleClose = () => setOpen(false)

	const notify = () => toast.success('You have successfuly subscribed')

	return (
		<Box className={classes.comingSoon}>
			<Toaster position='top-right' reverseOrder={false} />
			<img src={largeFox} alt='' className={classes.largeFox} />
			<img src={smallFox} alt='' className={classes.smallFox} />
			<img src={smallFox} alt='' className={classes.smallFox2} />

			<Typography className={classes.heading}>Coming Soon</Typography>

			<Box className={classes.btnWrapper}>
				<IconButton disableRipple>
					<img
						src={appStore}
						alt='download on the App Store'
						style={{ width: '100%' }}
					/>
				</IconButton>
				<IconButton disableRipple>
					<img
						src={playStore}
						alt='download on Google Play'
						style={{ width: '100%' }}
					/>
				</IconButton>
			</Box>

			<Typography className={classes.txt}>
				Subcribe to be the first to get notifications on our services when we
				launch
			</Typography>

			<Box className={classes.inputWrapper}>
				<Button
					variant='contained'
					sx={{
						backgroundColor: '#004266',
						height: '54px',
						width: '173px',
						margin: '0 auto'
					}}
					onClick={handleOpen}
				>
					Subscribe
				</Button>
			</Box>

			<SignUpForm
				open={open}
				setOpen={setOpen}
				handleClose={handleClose}
				notify={notify}
			/>
		</Box>
	)
}

export default ComingSoon
