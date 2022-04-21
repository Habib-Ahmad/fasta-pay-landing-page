import { Box } from '@mui/material'
import React from 'react'
import About from '../components/About/About'
import Header from '../components/Header/Header'
import Services from '../components/Services/Services'

const Home = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Header />
      <About />
      <Services />
    </Box>
  )
}

export default Home
