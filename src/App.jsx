import React from 'react'
import Navbar from './Componants/Navbar'
import { Routes ,Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './Componants/Footer';
import AllRooms from './Pages/AllRooms';
import RoomDetail from './Pages/RoomDetail';
import MyBookings from './Pages/MyBookings';
import HotelReg from './Componants/HotelReg';
import Layout from './Pages/hotelOwner/Layout';
import DashBoard from './Pages/hotelOwner/DashBoard';
import AddRoom from './Pages/hotelOwner/AddRoom';
import ListRoom from './Pages/hotelOwner/ListRoom';
import { Toaster } from 'react-hot-toast';
import useAppContext from './Componants/Context/useAppContext.js'
import Loader from './Componants/Loader.jsx';
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const {showHotelReg} = useAppContext();
  return (
    <div >
      <Toaster/>
    { !isOwnerPath && <Navbar/>}
    {showHotelReg && <HotelReg/>}
    <div>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/rooms' element ={<AllRooms/>}/>
        <Route path='/rooms/:id' element ={<RoomDetail/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/loader/:nextUrl' element={<Loader/>}/>
        <Route path ='/owner' element={<Layout/>}>
           <Route index element={<DashBoard/>}/>
           <Route path='add-room' element={<AddRoom/>}/>
           <Route path='list-room' element={<ListRoom/>}/>
        </Route>
      </Routes>
    </div>
    <Footer/>
    </div>
  )
}

export default App