import React from 'react';
import {useState, useEffect} from 'react';
import '../../Styles/checkout.css';
import {useSelector, useDispatch} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';

import Helmet from '../../Components/Helmet/Helmet.js';
import CommonSection from '../../Components/UI/Common-Section/CommonSection.jsx';

const Checkout = () => {
  const [enterName, setEnterName] = useState('');
  const [enterEmail, setEnterEmail] = useState('');
  const [enterNumber, setEnterNumber] = useState('');
  const [enterCountry, setEnterCountry] = useState('');
  const [enterCity, setEnterCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount)
  
  const shippingCost = 30
  
  const totalAmount = cartTotalAmount + Number(shippingCost);
  
  const shippingInfo = [];
  
  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name : enterName,
      email : enterEmail,
      phone : enterNumber,
      country : enterCountry,
      city : enterCity,
      postalCode : postalCode,
    }
    
    shippingInfo.push(userShippingAddress)
    console.log(shippingInfo)
  }
  
  
  return (
    <Helmet title='Checkout'>
      <CommonSection title='checkout' />
      
      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <h6 className="mb-4">shipping Address
              </h6>
              
              <form className="checkout_form" onSubmit={submitHandler} >
               
                <div className="form_group">
                  <input type="text" placeholder="Enter Your Name" required onChange={(e) => setEnterName(e.target.value)} />
                </div>
                
        
                <div className="form_group">
                  <input type="text" placeholder="Enter Your Email" required onChange={(e) => setEnterEmail(e.target.value)} />
                </div>
              
                <div className="form_group">
                  <input type="number" placeholder="Phone Number" required onChange={(e) => setEnterNumber(e.target.value)} />
                </div>
              
              
                <div className="form_group">
                  <input type="text" placeholder="Country" required onChange={(e) => setEnterCountry(e.target.value)} />
                </div>
    
            
                <div className="form_group">
                  <input type="text" placeholder="City" required onChange={(e) => setEnterCity(e.target.value)} />
                </div>
              
                <div className="form_group">
                  <input type="number" placeholder="Postal Code"  required onChange={(e) => setPostalCode(e.target.value)} />
                </div>
                <button className="addTOCart_btn">Payment</button>
              </form>
              
              
            </Col>
            
            <Col lg='4' md='6'>
              <div className="checkout_bill">
              
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout_total">
                  <h5 className="d-flex align-items-center justify-content-between">
                  Total: <span>${totalAmount}</span>
                  </h5>
                </div>
                
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout