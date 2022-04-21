import { Button, Grid, IconButton, SwipeableDrawer } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/menu.svg'
import useStyles from './useStyles'

const NavBar = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  const [displayDrawer, setDisplayDrawer] = useState(false)
  const [active, setActive] = useState('/')
  console.log(active)

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
    <Grid id="home" container className={classes.navBar}>
      <Grid
        item
        xs={10}
        sm={2}
        md={2.5}
        className={classes.logoWrapper}
        data-aos="fade-down"
      >
        <img src={logo} alt="fasta" className={classes.logo} />
      </Grid>

      <Grid
        item
        md={5}
        lg={4}
        className={classes.navBtnWrapper}
        data-aos="fade-down"
      >
        <Button
          className={active === '/' ? classes.activeNavBtn : classes.navBtn}
          onClick={() => {
            setActive('/')
            navigate('/')
          }}
          disableRipple
        >
          Home
        </Button>

        <Button
          className={
            active === '/business' ? classes.activeNavBtn : classes.navBtn
          }
          onClick={() => {
            setActive('/business')
            navigate('/business')
          }}
          disableRipple
        >
          Fastpay for Bussiness
        </Button>

        <Button
          className={
            active === '/services' ? classes.activeNavBtn : classes.navBtn
          }
          onClick={() => setActive('/services')}
          href="#services"
          disableRipple
        >
          Services
        </Button>
      </Grid>

      <Grid
        item
        md={3}
        lg={2}
        className={classes.contactBtnWrapper}
        data-aos="fade-left"
      >
        <Button
          onClick={() => setActive('/contact')}
          variant="contained"
          href="#footer"
          size="medium"
        >
          Contact us
        </Button>
      </Grid>

      <Grid item xs={2} className={classes.menuWrapper}>
        <IconButton onClick={toggleDrawer(true)}>
          <img src={menuIcon} alt="menu" />
        </IconButton>
        <SwipeableDrawer
          anchor="right"
          open={displayDrawer}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box className={classes.menuItems}>
            <Button
              onClick={() => {
                setActive('/')
                navigate('/')
                toggleDrawer(false)
              }}
              className={active === '/' ? classes.activeNavBtn : classes.navBtn}
              disableRipple
            >
              Home
            </Button>

            <Button
              onClick={() => {
                setActive('/business')
                navigate('/business')
                toggleDrawer(false)
              }}
              className={
                active === '/business' ? classes.activeNavBtn : classes.navBtn
              }
              disableRipple
            >
              Fastpay for Bussiness
            </Button>

            <Button
              className={classes.navBtn}
              onClick={toggleDrawer(false)}
              href="#services"
              disableRipple
            >
              Services
            </Button>

            <Button
              variant="contained"
              onClick={toggleDrawer(false)}
              href="#footer"
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
