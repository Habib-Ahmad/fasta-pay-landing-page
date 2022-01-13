import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
	comingSoon: {
		backgroundColor: theme.palette.primary.main,
		width: '100%',
		display: 'grid',
		placeItems: 'center',
		color: '#fff',
		padding: '5vw'
	},
	heading: {
		'&.MuiTypography-root': {
			fontSize: '4.5rem',
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
	downloadBtn: {
		// width: '200px'
	},
	txt: {
		textAlign: 'center',
		width: '45%',

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
	}
}))

export default useStyles
