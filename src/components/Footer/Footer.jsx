import { Box } from '@mui/system'
import useStyles from './useStyles'
import { Grid, IconButton, Typography } from '@mui/material'
import logo from '../../assets/svg/logo.svg'
import facebook from '../../assets/svg/footer/facebook.svg'
import instagram from '../../assets/svg/footer/instagram.svg'
import twitter from '../../assets/svg/footer/twitter.svg'
import linkedin from '../../assets/svg/footer/linkedin.svg'

const Footer = () => {
	const classes = useStyles()

	return (
		<Grid container alignItems='center' className={classes.footer}>
			<Grid item xs={12} sm={6} display='flex' justifyContent='center'>
				<img src={logo} alt='fasta' style={{ width: '25vw' }} />
			</Grid>

			<Grid item xs={12} sm={6} className={classes.info}>
				<Typography
					sx={{ fontSize: 17, fontWeight: 500, marginBottom: 1 }}
					className={classes.text1}
				>
					Contact us
				</Typography>
				<Typography
					sx={{ fontSize: 16, fontWeight: 400 }}
					className={classes.text2}
				>
					Email: fastaride@outlook.com
				</Typography>
				<Typography
					sx={{ fontSize: 16, fontWeight: 400 }}
					className={classes.text2}
				>
					Phone: +2347048429177
				</Typography>
				<Box>
					<IconButton>
						<img
							src={facebook}
							alt='facebook'
							style={{ width: 'clamp(60px, 8vw, 200px)' }}
						/>
					</IconButton>
					<IconButton>
						<img
							src={instagram}
							alt='instagram'
							style={{ width: 'clamp(60px, 8vw, 200px)' }}
						/>
					</IconButton>
					<IconButton>
						<img
							src={twitter}
							alt='twitter'
							style={{ width: 'clamp(60px, 8vw, 200px)' }}
						/>
					</IconButton>
					<IconButton>
						<img
							src={linkedin}
							alt='linkedin'
							style={{ width: 'clamp(60px, 8vw, 200px)' }}
						/>
					</IconButton>
				</Box>
			</Grid>
		</Grid>
	)
}

export default Footer
