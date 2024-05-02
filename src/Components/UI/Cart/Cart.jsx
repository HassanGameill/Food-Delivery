import React from 'react'
import '../../../Styles/shopping-cart.css';
import CartItem from './CartItem.jsx';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {cartUiActions} from '../../../RTK-STORE/shopping-cart/cartUiSlice.js';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  
  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }
  
  
  return (
    <div className="cart_container">
      <ListGroup className="cart">
      
        <div className="cart_close">
        <span onClick={toggleCart}>
          <i className="ri-close-fill"></i>
        </span>
        </div>
        
        <div className="cart_item_list">
        
          {
            cartProducts.length === 0 ? <h6 className="text-center mt-5">No item added to cart</h6> : cartProducts.map((item, index) => (
                <CartItem item={item} key={index} />
              ))
          }
          
        </div>
        
        <div className="cart_bottom d-flex align-items-center justify-content-between">
        
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          
          <button>
            <Link to="/checkout">
              Checkout
            </Link>
          </button>
          
        </div>
          
      </ListGroup>
    </div>
  )
}

export default Cart