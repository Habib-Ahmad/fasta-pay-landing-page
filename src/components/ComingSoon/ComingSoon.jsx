import { useState } from 'react'
import {
	Button,
	IconButton,
	TextField,
	Typography,
	Modal,
	RadioGroup,
	FormControlLabel,
	Radio,
	CircularProgress
} from '@mui/material'
import { Box } from '@mui/system'
import toast, { Toaster } from 'react-hot-toast'
import { Formik } from 'formik'
import * as Yup from 'yup'
import useStyles from './useStyles'
import largeFox from '../../assets/comingSoon/largeFox.svg'
import smallFox from '../../assets/comingSoon/smallFox.svg'
import appStore from '../../assets/comingSoon/appStore.svg'
import playStore from '../../assets/comingSoon/playStore.svg'
import axios from '../../axios'

const ComingSoon = () => {
	const classes = useStyles()

	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

	const handleSubmit = async ({ firstName, lastName, email, phone, as }) => {
		const asNumber = parseInt(as)
		await axios.post('/user/campaign', {
			firstName,
			lastName,
			email,
			phone,
			asNumber
		})
		notify()
		handleClose()
	}

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
				{/* <TextField
					variant='outlined'
					placeholder='Enter your email'
					fullWidth
					className={classes.input}
				/> */}
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

			<Modal open={open} onClose={handleClose}>
				<Box className={classes.modal}>
					<Typography
						variant='h2'
						sx={{ textAlign: 'center', marginBottom: 5 }}
					>
						Sign up
					</Typography>

					<Formik
						initialValues={{
							firstName: '',
							lastName: '',
							email: '',
							phone: '',
							as: 0
						}}
						validationSchema={Yup.object().shape({
							firstName: Yup.string().required('First Name is required'),
							lastName: Yup.string().required('Last Name is required'),
							email: Yup.string()
								.required('E-mail Name is required')
								.email('E-mail is not valid'),
							phone: Yup.string().required('Phone Number is required'),
							as: Yup.number().required().oneOf([1, 2], 'Please pick an option')
						})}
						onSubmit={handleSubmit}
					>
						{({
							handleSubmit,
							handleChange,
							values,
							touched,
							errors,
							isSubmitting
						}) => (
							<form onSubmit={handleSubmit} noValidate>
								<TextField
									variant='outlined'
									label='First Name'
									fullWidth
									className={classes.input2}
									name='firstName'
									helperText={touched.firstName ? errors.firstName : ''}
									error={touched.firstName && Boolean(errors.firstName)}
									value={values.firstName}
									onChange={handleChange}
								/>

								<TextField
									variant='outlined'
									label='Last Name'
									fullWidth
									className={classes.input2}
									name='lastName'
									helperText={touched.lastName ? errors.lastName : ''}
									error={touched.lastName && Boolean(errors.lastName)}
									value={values.lastName}
									onChange={handleChange}
								/>

								<TextField
									variant='outlined'
									label='E-mail'
									fullWidth
									className={classes.input2}
									name='email'
									helperText={touched.email ? errors.email : ''}
									error={touched.email && Boolean(errors.email)}
									value={values.email}
									onChange={handleChange}
								/>

								<TextField
									variant='outlined'
									label='Phone Number'
									fullWidth
									className={classes.input2}
									name='phone'
									helperText={touched.phone ? errors.phone : ''}
									error={touched.phone && Boolean(errors.phone)}
									value={values.phone}
									onChange={handleChange}
								/>

								<Box>
									<RadioGroup
										name='as'
										sx={{ display: 'flex', flexDirection: 'row' }}
										helperText={touched.as ? errors.as : ''}
										error={touched.as && Boolean(errors.as)}
										value={values.as}
										onChange={handleChange}
									>
										<FormControlLabel
											name='as'
											value={1}
											control={<Radio />}
											label='Driver (Boss)'
										/>
										<Box sx={{ width: '30px' }} />
										<FormControlLabel
											name='as'
											value={2}
											control={<Radio />}
											label='Guest (Passesnger)'
										/>
									</RadioGroup>
									<Typography
										style={{
											color: '#d32f2f',
											fontSize: 12,
											marginLeft: '16px'
										}}
									>
										{errors.as}
									</Typography>
								</Box>

								<Button
									type='submit'
									variant='contained'
									size='large'
									sx={{ display: 'block', margin: '10px auto', height: '60px' }}
								>
									{isSubmitting ? (
										<CircularProgress sx={{ width: '20px', color: 'white' }} />
									) : (
										'Submit'
									)}
								</Button>
							</form>
						)}
					</Formik>
				</Box>
			</Modal>
		</Box>
	)
}

export default ComingSoon
