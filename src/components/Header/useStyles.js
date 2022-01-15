import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
	header: {
		position: 'relative',
		minHeight: '100vh'
	},
	keke: {
		width: '23vw',
		position: 'absolute',
		top: 0,
		left: '7vw',
		zIndex: -100,

		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	smallKeke: {
		display: 'none',

		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			position: 'absolute',
			top: 'clamp(10px, 6vh, 100px)',
			zIndex: -100,
			width: '28vw'
		}
	},
	f: {
		position: 'absolute',
		zIndex: -100,
		top: 'clamp(7%, 18vw, 25%)',
		left: '35vw',
		width: '25vw'
	},
	man: {
		width: '35vw',
		position: 'absolute',
		top: 'clamp(80px, 6vh, 250px)',
		right: '3vw',
		zIndex: -100
	},
	leftBlob: {
		position: 'absolute',
		left: 0,
		top: 'clamp(80px, 6vh, 100px)',
		width: '4vw',

		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	rightBlob: {
		position: 'absolute',
		right: 0,
		top: 'clamp(80px, 6vh, 250px)',
		width: '3vw'
	},
	leftCircle: {
		position: 'absolute',
		left: 0,
		zIndex: -200,
		width: '20vw',

		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	headingWrapper: {
		marginTop: 'clamp(30px, 10vw, 100px)'
	},
	heading: {
		'&.MuiTypography-root': {
			marginLeft: '30vw',
			width: '60%'
		},

		[theme.breakpoints.down('sm')]: {
			'&.MuiTypography-root': {
				textAlign: 'center',
				marginLeft: 'auto',
				marginRight: 'auto',
				width: '60%',
				lineHeight: '20px'
			}
		}
	},
	kekeRide: {
		textTransform: 'uppercase',
		color: theme.palette.primary.main,
		display: 'inline',
		fontSize: 'clamp(1.1rem, 3.5vw, 2.5rem)',

		[theme.breakpoints.down('sm')]: {
			display: 'block'
		}
	},
	subHeading: {
		'&.MuiTypography-root': {
			fontSize: 'clamp(0.8rem, 2vw, 1rem)',
			width: '45%',
			marginLeft: '30vw',
			marginTop: theme.spacing(3),
			color: '#5c5c5c',
			lineHeight: '32px'
		},

		[theme.breakpoints.down('md')]: {
			'&.MuiTypography-root': {
				width: '100%',
				marginLeft: 0,
				marginTop: theme.spacing(25),
				padding: theme.spacing(0, 8),
				lineHeight: '20px'
			}
		},

		[theme.breakpoints.down('sm')]: {
			'&.MuiTypography-root': {
				marginTop: theme.spacing(18),
				padding: theme.spacing(0, 4)
			}
		}
	},
	btnWrapper: {
		marginTop: theme.spacing(3),
		marginLeft: '30vw',

		'&>:first-child': {
			marginRight: theme.spacing()
		},

		[theme.breakpoints.down('md')]: {
			marginLeft: 0,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		},

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',

			'&>:first-child': {
				marginRight: 0,
				marginBottom: theme.spacing()
			}
		}
	},
	features: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '15vw',
		flexWrap: 'wrap',
		padding: theme.spacing(5),

		[theme.breakpoints.down('sm')]: {
			justifyContent: 'flex-start'
		}
	},
	feature: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: theme.spacing(4),
		marginBottom: theme.spacing(3)
	},
	featuresTxt1: {
		'&.MuiTypography-root': {
			fontSize: '1rem',
			fontWeight: 500
		}
	},
	featuresTxt2: {
		'&.MuiTypography-root': {
			fontSize: '0.8rem',
			fontWeight: 400,
			color: '#969696'
		}
	}
}))

export default useStyles
