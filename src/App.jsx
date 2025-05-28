import React from 'react'
import Navbar from './Componants/Navbar'
import { Routes ,Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './Componants/Footer';
import AllRooms from './Pages/AllRooms';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div >
    { !isOwnerPath && <Navbar/>}
    <div>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/rooms' element ={<AllRooms/>}/>
      </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App