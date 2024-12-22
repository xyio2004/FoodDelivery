import React, { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MobileApp from './pages/Mobile-app/Mobile-app'
import ContactUs from './pages/ContactUs/ContactUs'
import LoginPopup from './component/LoginPopup/LoginPopup'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'
const App = () => {

  const[showLogin,setShowLogin] = useState(false);

  return (
    <div className='p-0 m-0 box-border font-[Outfit] scroll-smooth'>
      <div className=' m-auto w-[80%]'>
      {showLogin? <LoginPopup setShowLogin= {setShowLogin}></LoginPopup> : <></>}
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/menu' element={<Menu></Menu>}></Route>
          <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>
          <Route path='/mobileApp' element={<MobileApp></MobileApp>}> </Route>
          <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </div>
    </div>
    
  )
}

export default App
