import React from 'react'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import RoutesFile from './Routes/RoutesFile'

const App = () => {
  return (
    <div>
      <Navbar/>
      <RoutesFile/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App