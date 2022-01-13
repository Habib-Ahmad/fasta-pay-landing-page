import { useState } from 'react'
import useStyles from './useStyles'
import logo from '../assets/svg/logo.svg'
import menuIcon from '../assets/svg/menu.svg'
import { Button, Grid, IconButton, SwipeableDrawer } from '@mui/material'
import { Box } from '@mui/system'

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
		<Grid container className={classes.navBar}>
			<Grid item xs={10} sm={2} md={2.5} className={classes.logoWrapper}>
				<img src={logo} alt='fasta' className={classes.logo} />
			</Grid>

			<Grid item md={5} lg={4} className={classes.navBtnWrapper}>
				<Button className={classes.navBtn} disableRipple>
					Home
				</Button>
				<Button className={classes.navBtn} disableRipple>
					Become a boss
				</Button>
				<Button className={classes.navBtn} disableRipple>
					Services
				</Button>
			</Grid>

			<Grid item md={3} lg={2} className={classes.contactBtnWrapper}>
				<Button variant='contained'>Contact us</Button>
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
						<Button className={classes.navBtn} disableRipple>
							Home
						</Button>
						<Button className={classes.navBtn} disableRipple>
							Become a boss
						</Button>
						<Button className={classes.navBtn} disableRipple>
							Services
						</Button>
						<Button variant='contained'>Contact us</Button>
					</Box>
				</SwipeableDrawer>
			</Grid>
		</Grid>
	)
}

export default NavBar