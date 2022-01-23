import { useState, useEffect } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import useStyles from './useStyles'
import largeCircle from '../../assets/signUp/largeCircle.svg'
import smallCircle from '../../assets/signUp/smallCircle.svg'
import toast, { Toaster } from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import SignUpForm from '../SignUpForm/SignUpForm'

const SignUp = () => {
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
		<Grid id='signUp' container className={classes.signUp}>
			<img src={largeCircle} alt='' className={classes.largeCircle} />
			<img src={smallCircle} alt='' className={classes.smallCircle} />
			<Grid item xs={12} sm={8} lg={7} className={classes.textWrapper}>
				<Typography variant='h3' sx={{ marginBottom: 1 }}>
					Earn extra money as a fasta boss
				</Typography>
				<Typography className={classes.txt2}>
					Set your own schedule, become a Fasta boss
				</Typography>
			</Grid>
			<Grid item xs={12} sm={4} lg={5} className={classes.btnWrapper}>
				<Button
					onClick={handleOpen}
					variant='contained'
					className={classes.btn}
				>
					Sign up to ride
				</Button>
			</Grid>

			<Toaster position='top-right' reverseOrder={false} />

			<SignUpForm
				open={open}
				setOpen={setOpen}
				handleClose={handleClose}
				notify={notify}
			/>
		</Grid>
	)
}

export default SignUp
