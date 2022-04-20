import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
import './aos'
import ComingSoon from './components/ComingSoon/ComingSoon'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Services from './components/Services/Services'
import About from './components/About/About'
import { theme } from './themes/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{ overflowX: 'hidden' }}>
          <NavBar />
          <Header />
          <About />
          <Services />
          <ComingSoon />
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
