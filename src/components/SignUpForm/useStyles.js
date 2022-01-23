import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
	modal: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		minWidth: 320,
		minHeight: 500,
		backgroundColor: '#fff',
		boxShadow: '0 0 10px rgba(0,0,0,0.5)',
		borderRadius: '20px',
		padding: theme.spacing(3, 8),

		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(4),
			width: '90%'
		}
	},
	input: {
		marginBottom: theme.spacing(3)
	},
	errorMsg: {
		color: '#d32f2f',
		backgroundColor: 'pink',
		marginBottom: 10,
		padding: '2px 10px',
		borderRadius: '5px'
	},
	successMsg: {
		color: 'green',
		backgroundColor: 'lightGreen',
		marginBottom: 10,
		padding: '2px 10px',
		borderRadius: '5px',
		transition: 'all 1s'
	}
}))

export default useStyles
