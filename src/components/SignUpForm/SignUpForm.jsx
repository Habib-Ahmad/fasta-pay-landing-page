import {
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { Formik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import axios from '../../axios'
import useStyles from './useStyles'

const SignUpForm = ({ open, handleClose, notify }) => {
  const classes = useStyles()

  const [error, setError] = useState('')
  const [success, setSuccess] = useState()

  const handleSubmit = async ({ firstName, lastName, email, phone }) => {
    await axios
      .post('/user/campaign', {
        firstName,
        lastName,
        email,
        phone
      })
      .then((res) => {
        if (res.status === 200) {
          setError('')
          setSuccess(res.data.message)
        }
      })
      .catch((error) => {
        setError(error.response.data.message)
      })
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={classes.modal}>
        {success && (
          <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Typography className={classes.successMsg}>{success}</Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ display: 'block', margin: '10px auto', height: '40px' }}
              onClick={() => {
                handleClose()
                setSuccess()
                setError('')
              }}
            >
              Thank you!
            </Button>
          </div>
        )}

        {!success && (
          <>
            <Typography
              variant="h2"
              sx={{ textAlign: 'center', marginBottom: 5 }}
            >
              Sign up
            </Typography>
            {error && (
              <Typography className={classes.errorMsg}>{error}</Typography>
            )}
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
              }}
              validationSchema={Yup.object().shape({
                firstName: Yup.string().required('First Name is required'),
                lastName: Yup.string().required('Last Name is required'),
                email: Yup.string()
                  .trim()
                  .required('E-mail is required')
                  .email('E-mail is not valid'),
                phone: Yup.string().required('Phone Number is required')
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
                    variant="outlined"
                    label="First Name"
                    fullWidth
                    className={classes.input}
                    name="firstName"
                    helperText={touched.firstName ? errors.firstName : ''}
                    error={touched.firstName && Boolean(errors.firstName)}
                    value={values.firstName}
                    onChange={handleChange}
                  />

                  <TextField
                    variant="outlined"
                    label="Last Name"
                    fullWidth
                    className={classes.input}
                    name="lastName"
                    helperText={touched.lastName ? errors.lastName : ''}
                    error={touched.lastName && Boolean(errors.lastName)}
                    value={values.lastName}
                    onChange={handleChange}
                  />

                  <TextField
                    variant="outlined"
                    label="E-mail"
                    fullWidth
                    className={classes.input}
                    name="email"
                    helperText={touched.email ? errors.email : ''}
                    error={touched.email && Boolean(errors.email)}
                    value={values.email}
                    onChange={handleChange}
                  />

                  <TextField
                    variant="outlined"
                    label="Phone Number"
                    fullWidth
                    className={classes.input}
                    name="phone"
                    helperText={touched.phone ? errors.phone : ''}
                    error={touched.phone && Boolean(errors.phone)}
                    value={values.phone}
                    onChange={handleChange}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      display: 'block',
                      margin: '10px auto',
                      height: '60px'
                    }}
                  >
                    {isSubmitting ? (
                      <CircularProgress
                        sx={{ width: '20px', color: 'white' }}
                      />
                    ) : (
                      'Submit'
                    )}
                  </Button>
                </form>
              )}
            </Formik>
          </>
        )}
      </Box>
    </Modal>
  )
}

export default SignUpForm
