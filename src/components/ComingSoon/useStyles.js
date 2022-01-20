import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
	comingSoon: {
		backgroundColor: theme.palette.primary.main,
		width: '100%',
		display: 'grid',
		placeItems: 'center',
		color: '#fff',
		padding: '7vw',
		position: 'relative',

		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing(8),
			paddingBottom: theme.spacing(8)
		}
	},
	heading: {
		'&.MuiTypography-root': {
			fontSize: 'clamp(3rem, 6vw, 4.5rem)',
			fontWeight: 600,
			textAlign: 'center',
			marginBottom: theme.spacing(4)
		}
	},
	btnWrapper: {
		display: 'flex',
		alignItems: 'center',

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	txt: {
		width: '45%',
		textAlign: 'center',
		'&.MuiTypography-root': {
			fontSize: 'clamp(18px, 2vw, 32px)'
		},

		[theme.breakpoints.down('md')]: {
			width: '70%'
		},

		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	},

	inputWrapper: {
		display: 'flex',
		alignItems: 'center',
		width: '60%',
		marginTop: theme.spacing(6),

		[theme.breakpoints.down('lg')]: {
			width: '70%'
		},

		[theme.breakpoints.down('md')]: {
			width: '80%'
		},

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			width: '100%'
		}
	},
	input: {
		'&.MuiFormControl-root': {
			marginRight: theme.spacing(3),

			[theme.breakpoints.down('sm')]: {
				marginBottom: theme.spacing(3),
				marginRight: 0
			}
		}
	},
	largeFox: {
		position: 'absolute',
		top: 0,
		right: '5vw',
		width: '45vw',

		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	smallFox: {
		display: 'none',

		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			position: 'absolute',
			top: '-13vw',
			right: '5vw',
			width: '45vw'
		}
	},
	smallFox2: {
		display: 'none',

		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			position: 'absolute',
			bottom: '-15vw',
			left: '5vw',
			width: '45vw'
		}
	},
	modal: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		minWidth: 280,
		minHeight: 500,
		backgroundColor: '#fff',
		boxShadow: '0 0 10px rgba(0,0,0,0.5)',
		borderRadius: '20px',
		padding: theme.spacing(3, 8),

		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(4)
		}
	},
	input2: {
		marginBottom: theme.spacing(3)
	}
}))

export default useStyles
