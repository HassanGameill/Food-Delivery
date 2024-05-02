import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'

import Home from '../Pages/Home/Home.jsx';
import AllFood from '../Pages/All-Food/AllFood.jsx';
import FoodDetails from '../Pages/Food-Details/FoodDetails.jsx';

import Cart from '../Pages/Cart/Cart.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Checkout from '../Auth/Checkout/Checkout.jsx';
import Login from '../Auth/Login/Login.jsx';
import Register from '../Auth/Register/Register.jsx';



const Routers = () => {
  return (
    <div>
      <Routes>
      
        <Route path='/' element={<Navigate to="/home" />} />
        
        <Route path='/home' element={<Home />} />
        
        <Route path='/foods' element={<AllFood />} />
        
        <Route path='/foods/:id' element={<FoodDetails />} />
        
        <Route path='/cart' element={<Cart />} />
        
        <Route path='/checkout' element={<Checkout />} />
        
        <Route path='/login' element={<Login />} />
        
        <Route path='/register' element={<Register />} />
        
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
    </div>
  )
}

export default Routers