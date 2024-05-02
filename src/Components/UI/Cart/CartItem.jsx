import React from 'react'
import '../../../Styles/cart-item.css';
import productImg from '../../../Assets/images/product_01.1.jpg';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import {useDispatch} from 'react-redux';
import {cartActions} from '../../../RTK-STORE/shopping-cart/cartSlice.js';


const CartItem = ({item}) => {
  
  const {id, title, price, image01, quantity, totalPrice} = item
  
  const dispatch = useDispatch();
  
  const incrementItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01,
    }))
  }
  
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id))
  }
  
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }

  
  
  return (
    <ListGroupItem className="cart_item ">
      <div className="cart_item_info d-flex gap-2">
        <img src={image01} alt="product-img" />
        
        <div className="cart_product_info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div className="">
            <h6 className="cart_product_title">{title}</h6>
            <p className="cart_product_price d-flex align-items-center gap-5 ">{quantity}x
              <span>${totalPrice}</span>
            </p>
            
            <div className="increase_decrease_btn d-flex align-items-center justify-content-between">
              <span className="increase_btn" onClick={incrementItem}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              
              <span onClick={decreaseItem} className="decrease_btn">
                <i class="ri-subtract-line"></i>
              </span>
              
            </div>
          </div>
          
          <span onClick={decreaseItem} className="delete_btn">
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  )
}

export default CartItem