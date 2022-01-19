import { useState } from 'react'
import { Box } from '@mui/system'
import {
	Typography,
	Button,
	Modal,
	TextField,
	RadioGroup,
	FormControlLabel,
	Radio,
	CircularProgress
} from '@mui/material'
import toast, { Toaster } from 'react-hot-toast'
import { Formik } from 'formik'
import * as Yup from 'yup'
import useStyles from './useStyles'
import keke from '../../assets/svg/header/keke.svg'
import smallKeke from '../../assets/svg/header/smallKeke.svg'
import man from '../../assets/svg/header/man.svg'
import f from '../../assets/svg/header/f.svg'
import leftBlob from '../../assets/svg/header/leftBlob.svg'
import rightBlob from '../../assets/svg/header/rightBlob.svg'
import leftCircle from '../../assets/svg/header/leftCircle.svg'
import bookRides from '../../assets/svg/header/bookRides.svg'
import sendDeliveries from '../../assets/svg/header/sendDeliveries.svg'
import earnFreePoints from '../../assets/svg/header/earnFreePoints.svg'
import axios from '../../axios'

const Header = () => {
	const classes = useStyles()
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)

	const handleClose = () => setOpen(false)

	const handleSubmit = async ({ firstName, lastName, email, phone, as }) => {
		console.log('ji', firstName, lastName, email, phone, as)
		// await axios
		// 	.post('/users/campaign', { firstName, lastName, email, phone, as })
		// 	.then((data) => {
		// 		console.log(data)
		// 		notify()
		// 	})
	}

	const setFieldValue = (name, value) => {}

	const notify = () => toast.success('You have successfuly signed up')

	return (
		<Box className={classes.header}>
			<Toaster position='top-right' reverseOrder={false} />
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
						<Button variant='contained' size='large' onClick={handleOpen}>
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
							as: ''
						}}
						validationSchema={Yup.object().shape({
							firstName: Yup.string().required('First Name is required'),
							lastName: Yup.string().required('Last Name is required'),
							email: Yup.string()
								.required('E-mail Name is required')
								.email('E-mail is not valid'),
							phone: Yup.string().required('Phone Number is required'),
							as: Yup.number().required('Please pick an option'),
							password: Yup.string()
								.required('Password is required')
								.max(100, 'Password is too long')
								.min(6, 'Password too short')
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
									className={classes.input}
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
									className={classes.input}
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
									className={classes.input}
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
									className={classes.input}
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
										value={values.as.toString()}
										onChange={handleChange}
									>
										<FormControlLabel
											value={1}
											control={<Radio />}
											label='Driver (Boss)'
										/>
										<Box sx={{ width: '30px' }} />
										<FormControlLabel
											value={2}
											control={<Radio />}
											label='Guest (Passesnger)'
										/>
									</RadioGroup>
									<span style={{ color: 'red' }}>{errors.as}</span>
								</Box>

								<Button
									onClick={handleSubmit}
									type='submit'
									variant='contained'
									size='large'
									sx={{ display: 'block', margin: '10px auto' }}
								>
									{isSubmitting ? (
										<CircularProgress sx={{ width: '20px' }} />
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

export default Header
