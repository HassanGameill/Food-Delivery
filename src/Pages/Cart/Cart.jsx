import React from 'react'
import {Link} from 'react-router-dom';
import '../../Styles/cart-page.css';

import CommonSection from '../../Components/UI/Common-Section/CommonSection.jsx';
import Helmet from '../../Components/Helmet/Helmet.js';

import {cartActions} from '../../RTK-STORE/shopping-cart/cartSlice.js';
import {useSelector, useDispatch} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';


  
const Tr = (props) => {
    const dispatch = useDispatch()
    const {id, image01, title, price, quantity} = props.item;
    
    const deleteItem = () => {
      dispatch(cartActions.removeItem(id))
    }
    
    return <tr className="text-center">
      <td className="cart_img_box">
        <img src={image01} alt="" />
      </td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td onClick={deleteItem} className="cart_item_del">
        <i  className="ri-delete-bin-line">
        </i>
      </td>
    </tr>
  }
  

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  
  
  
  return (
    <Helmet title='Cart'>
      <CommonSection title="Your Cart" />
      
      <section>
        <Container>
          <Row>
            <Col lg='12' className="">
              
              {
                cartItems.length === 0 ? <h5 className="text-center">Your cart is empty</h5>
                : <table className="table table-bordered">
                <thead className="">
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                
                <tbody>
                  {
                    cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                     ))
                  }
                </tbody>
              </table>
              }
              
              <div className="">
                <h6 className="">
                Subtotal:{" "} 
                <span className="cart_subtotal">
                  $ {totalAmount}
                </span>
                </h6>
                <p className="">
                  Taxes and shipping will calculate at checkout
                </p>
                <div className="cart_page_btn d-flex align-items-center gap-4">
                  <button className="addTOCart_btn">
                    <Link to='/foods'>
                    Coutinue Shopping
                    </Link>
                  </button>
                  
                   <button className="addTOCart_btn">
                    <Link to='/checkout'>
                    Proceed to checkout
                    </Link>
                  </button>
                  
                </div>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}



export default Cart;