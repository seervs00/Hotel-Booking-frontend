import React from 'react'
import Navbar from './Componants/Navbar'
import { Routes ,Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './Componants/Footer';
import AllRooms from './Pages/AllRooms';
import RoomDetail from './Pages/RoomDetail';
import MyBookings from './Pages/MyBookings';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div >
    { !isOwnerPath && <Navbar/>}
    <div>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/rooms' element ={<AllRooms/>}/>
        <Route path='/rooms/:id' element ={<RoomDetail/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App