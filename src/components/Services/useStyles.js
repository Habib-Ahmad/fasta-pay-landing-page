import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
	services: {
		padding: '10vw 5vw',
		display: 'grid',
		placeItems: 'center',
		position: 'relative'
	},
	text: {
		'&.MuiTypography-root': {
			fontSize: 'clamp(1rem, 2vw, 18px)',
			width: '80%',
			textAlign: 'center',
			fontWeight: 300,
			margin: '3vw 0',
			lineHeight: '30px',
			marginBottom: theme.spacing(20)
		},

		[theme.breakpoints.down('sm')]: {
			'&.MuiTypography-root': {
				width: '100%',
				lineHeight: '24px',
				marginBottom: theme.spacing(5)
			}
		}
	},
	wrapReverse: {
		[theme.breakpoints.down('md')]: {
			'&.MuiGrid-root': {
				flexWrap: 'wrap-reverse'
			}
		}
	},
	svg: {
		display: 'flex',
		justifyContent: 'center'
	},
	feature: {
		display: 'flex',
		alignItems: 'center'
	},
	featureImg: {
		minWidth: 83,
		height: 83,
		display: 'grid',
		placeItems: 'center',
		borderRadius: '50%',
		marginRight: '15px'
	},
	featureTxt1: {
		'&.MuiTypography-root': {
			fontSize: '17px',
			fontWeight: 500
		}
	},
	featureTxt2: {
		'&.MuiTypography-root': {
			fontSize: '12px'
		}
	},
	featureTxt3: {
		'&.MuiTypography-root': {
			fontSize: 'clamp(18px, 2vw, 24px)',
			fontWeight: 600,
			paddingLeft: theme.spacing(5),
			marginTop: theme.spacing(3)
		},

		[theme.breakpoints.down('sm')]: {
			'&.MuiTypography-root': {
				paddingLeft: 0
			}
		}
	},
	circle: {
		position: 'absolute',
		right: 0,
		marginRight: '-5vw',
		zIndex: -100,

		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	circle2: {
		display: 'none',

		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			position: 'absolute',
			top: 120,
			left: 0,
			marginLeft: '-5vw',
			zIndex: -100
		}
	},
	circle3: {
		position: 'absolute',
		left: 0,
		zIndex: -100
	},
	abstract: {
		position: 'absolute',
		opacity: 0.05,
		top: '20vw',
		width: 'clamp(200px, 40vw, 650px)',
		left: '15vw',
		zIndex: -200
	}
}))

export default useStyles
