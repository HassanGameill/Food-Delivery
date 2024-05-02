import React from 'react'
import  '../../Styles/product-details.css';
import products from '../../Assets/fake-data/products.js';
import ProductCart from '../../Components/UI/Product-Cart/ProductCart.jsx';
import Helmet from '../../Components/Helmet/Helmet.js';
import CommonSection from '../../Components/UI/Common-Section/CommonSection.jsx';

import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../RTK-STORE/shopping-cart/cartSlice.js';
import {useParams} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';



const FoodDetails = () => {
  
  const [tab, setTab] = useState('desc')
  const {id} = useParams();
  const dispatch = useDispatch()
  
  // ==== Form logic ======
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')
  
  //  ==== End logic form ==== //
  
  const product = products.find((product) => product.id === id)
  
  const [previewImg, setPreviewImg] = useState(product.image01)
  
  const {title, price, category, desc, image01} = product;
  
  const relatedProduct = products.filter((item) => category === item.category)
  
  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])

  useEffect(() => {
    window.scrollTo(0,0)
  }, [product])
  
  const addItemToCart = () => {
    dispatch(cartActions.addItem({
      id, title, price, image01
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    
    
    console.log(enteredName, enteredEmail, reviewMsg)
    
  }

  return (
    <Helmet title='Product-details'>
      <CommonSection title={title}/>
      
      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className="product_images text-center">
              
                <div className="img_item mb-3" onClick={() => setPreviewImg(product.image01)}>
                  <img src={product.image01} alt="" className="w-50"/>
                </div>
                
                <div className="img_item mb-3" onClick={() => setPreviewImg(product.image02)}>
                  <img src={product.image02} alt="" className="w-50"/>
                </div>
                
                <div className="img_item" onClick={() => setPreviewImg(product.image03)}>
                  <img src={product.image03} alt="" className="w-50"/>
                </div>
                
                
              </div>
            </Col>
            
            <Col lg='4' md='4'>
              <div className="product_main_img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>
            
            
            <Col lg='6' md='6'>
              <div className="single_product_content">
                <h2 className="product_title mb-3">
                  {title}
                </h2>
                <p className="product_price">
                  {" "}
                 Price: <span>${price}</span>
                </p>
                <p className="category mb-5">
                Category: 
                  <span>{category}</span>
                </p>
                
                <button onClick={addItemToCart} className=" addTOCart_btn">
                  Add to Cart
                </button>
              </div>
            </Col>
            
            <Col lg='12'>
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6 className={`${tab === 'desc' ? 'tab_active' : ''} `}  onClick={() => setTab('desc')} >Description</h6>
                
                <h6 onClick={() => setTab('rev')} className={`${tab === 'rev' ? 'tab_active' : ''} `}>Review</h6>
              </div>
              
              {
                tab === 'desc' ? <div className="tab_content">
                <p className="">
                  {desc}
                </p>
              </div> : <div className="tab_form mb-3">
              
                <div className="review pt-5">
                  <p className="user_name mb-0">
                    Jhon Doe
                  </p>
                  
                  <p className="user_email ">
                    hasanaboalion@gmail.com
                  </p>
                  
                  <p className="feedback_text">great products</p>
                </div>
              
                <div className="review">
                  <p className="user_name mb-0">
                    Jhon Doe
                  </p>
                  
                  <p className="user_email ">
                    hasanaboalion@gmail.com
                  </p>
                  
                  <p className="feedback_text">great products</p>
                </div>
              
                <div className="review">
                  <p className="user_name mb-0">
                    Jhon Doe
                  </p>
                  
                  <p className="user_email ">
                    hasanaboalion@gmail.com
                  </p>
                  
                  <p className="feedback_text">great products</p>
                </div>
              
              
                <form className="form" onSubmit={submitHandler}>
                
                  <div className="form_group">
                    <input type="text" placeholder="Enter Your Name"  onChange={(e) => setEnteredName(e.target.value)} required />
                  </div>
                  
                  <div className="form_group">
                    <input type="text" placeholder="Enter Your Name" onChange={(e) => setEnteredEmail(e.target.value)} required />
                  </div>
                  
                  <div className="form_group">
                    <textarea type="text" rows={5} placeholder="Enter Your Message"  onChange={(e) => setReviewMsg(e.target.value)} required />
                  </div>
                  
                  <button type="submit" className="addTOCart_btn">
                    Submit
                  </button>
                </form>
              </div>
              
              }
              
            </Col>
            
            <Col lg='12' className="mb-5 mt-4">
              <h2 className="related_product_title">You might also like</h2>
            </Col>
            
            {
              relatedProduct.map((item) => (
                  <Col className="mb-4" lg='3' md='4' sm='6' xs='6' key={item.id}>
                    <ProductCart item={item} />
                  </Col>
                )) 
            }
            
          </Row>
        </Container>
      </section>
      
    </Helmet>
  )
}

export default FoodDetails