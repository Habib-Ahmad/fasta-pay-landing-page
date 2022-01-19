import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
	footer: {
		padding: '5vw 0',

		[theme.breakpoints.down('sm')]: {
			paddingTop: theme.spacing(15),
			paddingBottom: theme.spacing(10)
		}
	},
	info: {
		'&.MuiGrid-root': {
			display: 'flex',
			flexDirection: 'column'
		},

		[theme.breakpoints.down('sm')]: {
			'&.MuiGrid-root': {
				alignItems: 'center'
			}
		}
	},
	text1: {
		[theme.breakpoints.up('sm')]: {
			'&.MuiTypography-root': {
				marginLeft: '6vw'
			}
		}
	},
	text2: {
		[theme.breakpoints.up('sm')]: {
			'&.MuiTypography-root': {
				marginLeft: '6vw'
			}
		}
	},
	copyright: {
		display: 'none',

		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			borderTop: '0.8px solid #D2D2D2',
			paddingTop: theme.spacing(4),
			width: '80%',

			'&>.MuiTypography-root': {
				fontWeight: 'normal',
				fontSize: '0.8125rem',
				width: '90%',
				color: '#686868',
				textAlign: 'center'
			}
		}
	}
}))

export default useStyles
