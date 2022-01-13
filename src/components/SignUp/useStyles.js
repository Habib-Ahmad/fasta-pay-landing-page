import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
	signUp: {
		backgroundColor: theme.palette.primary.main,
		width: '100%',
		height: '243px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: '#fff',
		position: 'relative',

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	largeCircle: {
		position: 'absolute',
		left: '90px',

		[theme.breakpoints.down('md')]: {
			display: 'none'
		}
	},
	smallCircle: {
		position: 'absolute',
		right: '160px',
		top: 0,

		[theme.breakpoints.down('lg')]: {
			display: 'none'
		}
	},
	textWrapper: {
		width: '100%',
		display: 'grid',
		placeItems: 'center',
		zIndex: 100
	},
	extraPadding: {
		'&.MuiTypography-root': {
			marginLeft: theme.spacing(-25),

			[theme.breakpoints.down('md')]: {
				marginLeft: 0
			}
		}
	},
	btnWrapper: {
		display: 'grid',
		placeItems: 'center',
		width: '100%'
	},
	btn: {
		'&.MuiButton-root': {
			backgroundColor: '#fff',
			color: '#000',
			borderRadius: '60px',
			// width: '237px',
			width: '200px',
			height: '54px',
			fontSize: 16,
			textTransform: 'uppercase'
		}
	}
}))

export default useStyles
