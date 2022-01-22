import { useState } from 'react'
import { Box } from '@mui/system'
import {
	Button,
	Grid,
	IconButton,
	SwipeableDrawer,
	Typography
} from '@mui/material'
import useStyles from './useStyles'
import menuIcon from '../../assets/menu.svg'
import logo from '../../assets/logo.svg'

const NavBar = () => {
	const [displayDrawer, setDisplayDrawer] = useState(false)
	const classes = useStyles()

	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}

		setDisplayDrawer(open)
	}

	return (
		<Grid id='home' container className={classes.navBar}>
			<Grid item xs={10} sm={2} md={2.5} className={classes.logoWrapper}>
				<img src={logo} alt='fasta' className={classes.logo} />
			</Grid>

			<Grid item md={5} lg={4} className={classes.navBtnWrapper}>
				<Button className={classes.navBtn} href='#home' disableRipple>
					<Typography
						sx={{ fontWeight: 700, color: '#00AEE8', fontSize: '1rem' }}
					>
						Home
					</Typography>
				</Button>
				<Button className={classes.navBtn} href='#signUp' disableRipple>
					Become a boss
				</Button>
				<Button className={classes.navBtn} href='#services' disableRipple>
					Services
				</Button>
			</Grid>

			<Grid item md={3} lg={2} className={classes.contactBtnWrapper}>
				<Button variant='contained' href='#footer' size='medium'>
					Contact us
				</Button>
			</Grid>

			<Grid item xs={2} className={classes.menuWrapper}>
				<IconButton onClick={toggleDrawer(true)}>
					<img src={menuIcon} alt='menu' />
				</IconButton>
				<SwipeableDrawer
					anchor='right'
					open={displayDrawer}
					onClose={toggleDrawer(false)}
					onOpen={toggleDrawer(true)}
				>
					<Box className={classes.menuItems}>
						<Button
							onClick={toggleDrawer(false)}
							className={classes.navBtn}
							href='#home'
							disableRipple
						>
							Home
						</Button>
						<Button
							onClick={toggleDrawer(false)}
							className={classes.navBtn}
							href='#signUp'
							disableRipple
						>
							Become a boss
						</Button>
						<Button
							onClick={toggleDrawer(false)}
							className={classes.navBtn}
							href='#services'
							disableRipple
						>
							Services
						</Button>
						<Button
							variant='contained'
							onClick={toggleDrawer(false)}
							href='#footer'
						>
							Contact us
						</Button>
					</Box>
				</SwipeableDrawer>
			</Grid>
		</Grid>
	)
}

export default NavBar
