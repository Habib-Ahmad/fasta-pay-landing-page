import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
	footer: {
		padding: '5vw 0'
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
	}
}))

export default useStyles
