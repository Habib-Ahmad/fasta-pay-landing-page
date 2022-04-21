import { Box } from '@mui/material'
import React from 'react'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Services from '../components/Services/Services'
import Social from '../components/Social/Social'

const Home = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Header />
      <About />
      <Services />
      <Footer />
      <Social />
    </Box>
  )
}

export default Home
