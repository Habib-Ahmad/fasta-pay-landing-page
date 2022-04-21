import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './aos'
import { theme } from './themes/theme'
import Home from './pages/Home'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Social from './components/Social/Social'
import Business from './pages/Business'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
        </Routes>
        <Footer />
        <Social />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
