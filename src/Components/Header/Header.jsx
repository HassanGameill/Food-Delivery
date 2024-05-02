import React from 'react'
import {useRef, useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {cartUiActions} from '../../RTK-STORE/shopping-cart/cartUiSlice.js';
import '../../Styles/header.css'
import {Container} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';
import logo from '../../Assets/images/res-logo.png';


const nav_links = [
    {
      display: 'Home',
      path: '/home',
    },
    
    {
      display: 'Foods',
      path: '/foods',
    },
    
    {
      display: 'Cart',
      path: '/cart',
    },
    
    {
      display: 'Contact',
      path: '/contact',
    },
    
  ]

const Header = () => {
  const menuRef = useRef(null)
  const headerRef = useRef(null)
  
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  
  const dispatch = useDispatch()
  
  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');
  
  
  
  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80) {
        headerRef.current.classList.add('header_shrink')
      } else {
        headerRef.current.classList.remove('header_shrink')
      }
    })
    return (arg) => window.removeEventListener('scroll', arg)
    
  }, [])
  
  
  return (
    <header className='header' ref={headerRef}>
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo d-flex align-items-center justify-content-center flex-column gap-2">
            <img src={logo} alt="logo" />
            <h5>Testy Treat</h5>
          </div>
          
          {/* ========== Menu ========== */}
          <div className="navigation" ref={menuRef}  onClick={toggleMenu} >
            <div className="menu d-flex align-items-center gap-5 ">
              {
                nav_links.length >= 1 ? (nav_links.map((item, index) => (
                  <NavLink   key={index} to={item.path} className={navClass => navClass.isActive ? 'active_menu': ""} >
                    {item.display}
                  </NavLink>
                ) )) : (<h4>No Data</h4>)
              }
            </div>
          </div>
          
          {/* ===== Nav Right Icons ===== */}
          <div className="nav_right d-flex align-items-center gap-3">
            <span className="cart_icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart_badge">{totalQuantity}</span>
            </span>
              
              <span className="user">
                <Link to='/login'>
                  <i className="ri-user-line"></i>
                </Link>
              </span>
              
              <span className="mobile_menu" onClick={toggleMenu}>
               <i className="ri-menu-line"></i>
              </span>
          </div>
          
          
        </div>
      </Container>
      
    </header>
  )
}

export default Header