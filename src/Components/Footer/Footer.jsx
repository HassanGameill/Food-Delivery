import React from 'react'
import {Link} from 'react-router-dom';
import  '../../Styles/footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../Assets/images/res-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
        
          <Col lg='3' md='4' sm='6'>
            <div className="logo footer_logo text-start ">
            <img src={logo} alt="logo" />
            <h5 className="footer_title mt-2">Testy Treat</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam placeat.
            </p>
          </div>
          </Col>
          
          <Col lg='3' md='4' sm='6'>
            <h5 className="footer_title">Delivery Time</h5>
            <ListGroup className="delivery_time_list">
              <ListGroupItem className="delivery_time_item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              
              <ListGroupItem  className="delivery_time_item border-0 ps-0">
                <span>Friday - Saterday</span>
                <p>Off Day</p>
              </ListGroupItem>
              
            </ListGroup>
          </Col>
          
          
          <Col lg='3' md='4' sm='6'>
            <h5 className="footer_title">Contact</h5>
            <ListGroup className="delivery_time_list">
              <ListGroupItem className="delivery_time_item border-0 ps-0">
                <p>Location: Jiza Egypt , Elwraq Street </p>
              </ListGroupItem>
              
              <ListGroupItem className="delivery_time_item border-0 ps-0">
                <span>Phone: +21021432599</span>
              
              </ListGroupItem>
              
              <ListGroupItem  className="delivery_time_item border-0 ps-0">
                <span>Email: hasanaboalion@gmail.com</span>
              </ListGroupItem>
            
            </ListGroup>
          </Col>
          
          <Col lg='3' md='4' sm='6'>
            <h5 className="footer_title">Newsletter</h5>
      
            <p>Subscribe our newslater</p>
            
            <div className="newsletter mb-4">
            
              <div className="newsletter-t">
                <input type="email" placeholder="Enter your email"/>
                 <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
              
          </Col>
        </Row>
        
        <Row className="mt-5">
        
          <Col lg='6' md='6'>
            <p className="copywrite_text">Copywrite - 2022 , website made by Muhibur Rahman . All Rights Reserved.</p>
          </Col>
          
          <Col lg='6' md='6'>
            <div className="social_links d-flex align-items-center justify-content-end gap-4">
              <p className="m-0">Follow: </p>
               
              <span>
                <Link to='https://www.linkedin.com/in/hassan-gameil-413251244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </span>
              
              <span>
                <Link to='https://github.com/HassanGameill'>
                  <i className="ri-github-fill"></i>
                </Link>
              </span>
              
              <span>
                <Link to='https://github.com/HassanGameill'>
                  <i className="ri-github-fill"></i>
                </Link>
              </span>
              
              
            </div>
          </Col>
          
        </Row>
        
        
      </Container>
    </footer>
  )
}

export default Footer