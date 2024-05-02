import React from 'react'
import '../../../Styles/product-cart.css';
import { Link } from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import {cartActions} from '../../../RTK-STORE/shopping-cart/cartSlice.js';
// import productImg from '../../../Assets/images/product_2.product_2.1.jpg';

const ProductCart = (props) => {
  const {id, title, image01, price} = props.item
  const dispatch = useDispatch()
  
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price,
    }))
  }
  
  return (
    <div className="product_item">
      <div className="product_img">
        <img src={image01} alt="product_img" className="w-50" />
      </div>
      
      <div className="product_content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
          <div className="d-flex align-items-center justify-content-between mt-4">
            <span className="product_price">
              ${price}
            </span>
            <button onClick={addToCart} className="addTOCart_btn">Add to Cart</button>
          </div>
        </div>
    </div>
  )
}

export default ProductCart