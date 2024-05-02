import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

import Helmet from '../../Components/Helmet/Helmet.js';
import CommonSection from '../../Components/UI/Common-Section/CommonSection.jsx';


const Register = () => {
  const signupNameRef = useRef()
  const signupEmailRef = useRef()
  const signupPasswordRef = useRef()
  
  const submitHandler = (e) => {
    e.preventDefault()
    
  }
  
  return (
    <Helmet title='Signup'>
      <CommonSection title='Signup' />
      
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler} >
              
              <div className="form_group">
                <input type="text" placeholder="Full name" required ref={signupNameRef} />
              </div>
              
              <div className="form_group">
                <input type="text" placeholder="Email" required ref={signupEmailRef} />
              </div>
              
              
              <div className="form_group">
                <input type="password" placeholder="Password" required ref={signupPasswordRef} />
              </div>
              
              <button type="submit" className="addTOCart_btn">
                Sign Up
              </button>
              
              </form>
              
              <Link to='/login'>
              Already have an account? Login
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      
    </Helmet>
  )
}

export default Register