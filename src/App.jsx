import React from 'react'
import Navbar from './Componants/Navbar'
import { Routes ,Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
    { !isOwnerPath && <Navbar/>}
    <div>
      <Routes>
        <Route path='/' element ={<Home/>}/>
      </Routes>
    </div>

    </div>
  )
}

export default App