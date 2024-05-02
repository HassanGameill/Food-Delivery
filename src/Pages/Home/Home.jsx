import React from 'react';
import {useState, useEffect} from 'react';
// import {useSelector} from 'react-redux';
import '../../Styles/home-page.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';

import Helmet from '../../Components/Helmet/Helmet.js';
import Category from '../../Components/UI/Category/Category.jsx';
import ProductCart from '../../Components/UI/Product-Cart/ProductCart.jsx';

import Testimonial from '../../Components/UI/Slider/TestimonialSlider.jsx';

import products from '../../Assets/fake-data/products.js';

import HeroImg from '../../Assets/images/hero.png';

import featureImg01 from '../../Assets/images/service-01.png'
import featureImg02 from '../../Assets/images/service-02.png'
import featureImg03 from '../../Assets/images/service-03.png'


import foodCategoryImg01 from "../../Assets/images/hamburger.png";
import foodCategoryImg02 from "../../Assets/images/pizza.png";
import foodCategoryImg03 from "../../Assets/images/bread.png";

import whyImg from "../../Assets/images/location.png";

import networkImg from "../../Assets/images/network.png";


const featureData = [
  {
    title: 'Quick Delivery',
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, voluptas.",
    imgUrl: featureImg01,
  },
  
  {
    title: 'Super Dine In',
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, voluptas.",
    imgUrl: featureImg02,
  },
  
  {
    title: 'Easy Pick Up',
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, voluptas.",
    imgUrl: featureImg03,
  },
  
]



const Home = () => {
  const [category, setCategory] = useState('ALL')
  const [allProducts, setAllProducts] = useState(products)
  
  const [hotPizza, setHotPizza] = useState([])
  
  useEffect(() => {
    const filterdPizza = products.filter((item) => item.category === 'Pizza')
    const slicePizza = filterdPizza.slice(0,4)
    setHotPizza(slicePizza)
  }, [])
  
  
  useEffect(() => {
    if(category === 'ALL') {
      setAllProducts(products)
    }
    
    if(category === 'BURGER') {
      const filteredProducts = products.filter((item) => item.category === 'Burger')
      setAllProducts(filteredProducts);
    }
    
    if(category === 'PIZZA') {
      const filteredProducts = products.filter((item) => item.category === 'Pizza')
      setAllProducts(filteredProducts);
    }
    
    if(category === 'BREAD') {
      const filteredProducts = products.filter((item) => item.category === 'Bread')
      setAllProducts(filteredProducts);
    }
    
    
  }, [category])

// ==== Get All Unique Category ==== //

  return (
    <Helmet title="Home">
      {/* ===== START Hero Content ===== */}
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero_content">
                <h5 className="mb-3">Easy way to make an order
                </h5>
                <h1 className="hero_title mb-4">
                  <span>HUNGRY?</span> just wait <br /> food at <span>your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint molestiae ipsa optio eum nam, voluptatem.
                </p>
                
                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                  <button className="order_btn d-flex align-items-center justify-content-between">
                  Order now
                  <i className="ri-arrow-right-s-line"></i>
                  </button>
                  
                  <button className="all_food_btn">
                    <Link to='/foods'>
                      See All Foods
                    </Link>
                  </button>
                </div>
                
                <div className="hero_service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No Shipping charge
                  </p>
                  
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkedout
                  </p>
                </div>
              </div>
            </Col>
            
            <Col lg='6' md='6'>
              <div className="hero_img">
                <img src={HeroImg} alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===== END Hero Content ===== */}
      
      {/* ==== START Category Section ==== */}
      <section className='pt-0'>
       <Category />
      </section>
      {/* ==== END Category Section ==== */}
      
      {/* ==== START Feature Section ===== */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h5 className="feature_subtitle mt-4">What we serve</h5>
              <h2 className="feature_title">Just sit back at home</h2>
              <h2 className="feature_title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, corporis!
              </p>
              
              <p className="feature_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, corporis.{" "}
              </p>
            </Col>
            
            {
              featureData.length >= 1 ? (featureData.map((item, index) => (
                <Col lg='4' md='4' sm='6' key={index} className="mt-5">
                 <div className="feature_item flex-wrap text-center px-5 py-3">
                  <img src={item.imgUrl} alt="feature_img" className="w-25 mb-3" />
                  <h5 className="fw-bold ">{item.title}</h5>
                  <p>{item.desc}</p>
                 </div>
                </Col>
                  
                ))) : (<h4>No Data</h4>)
            }
          </Row>
        </Container>
      </section>
      {/* ===== END Feature Section ===== */}
      
      {/* ===== START Product Cart ===== */}
      <section>
        <Container>
          <Row>
        
            <Col lg="12">
              <div className="food_category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all_btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {
              allProducts.length >= 1 ? (allProducts.map((item) => (
                <Col lg='3' md='4' key={item.id} className="mt-5" >
                 <ProductCart item={item} />
                </Col>
                  
                ))) : (<h4>No Data</h4>)
            }
          </Row>
        </Container>
      </section>
      {/* ===== END Product Cart ===== */}
      
      {/* ===== START Why Foods ===== */}
      <section className="why-choose-us">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt="why-test-treat" className="w-100"/>
            </Col>
            
            <Col lg='6' md='6'>
              <div className="why_testy_treat">
                <h2 className="testy_treat_title mb-4">
                  Why <span>Testy Treat?</span>
                </h2>
                <p className="testy_treat_desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil fuga enim nisi eum, aliquam pariatur!
                </p>
                
                <ListGroup className="mt-4">
                  <ListGroupItem className=" border-0 ps-0">
                    <p className="choose_us_title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Fresh and teasty Foods
                    </p>
                    <p className="choose_us_desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, id.
                    </p>
                  </ListGroupItem>
                  
                  <ListGroupItem className=" border-0 ps-0">
                    <p className="choose_us_title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Quality Support
                    </p>
                    <p className="choose_us_desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, id.
                    </p>
                  </ListGroupItem>
                  
                  <ListGroupItem className=" border-0 ps-0">
                    <p className="choose_us_title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Order From any Locations
                    </p>
                    <p className="choose_us_desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, id.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===== END Why Foods ===== */}
      {/* ===== START HOOT PIZZA ===== */}
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2>Hot Pizza</h2>
            </Col>
            {
              hotPizza.length >= 1 ? (hotPizza.map((item) => (
                <Col lg='3' md='4' key={item.id}>
                  <ProductCart item={item}/>
                </Col>
                ))) : (<h4>No Data</h4>)
            }
          </Row>
        </Container>
      </section>
      {/* ===== END HOOT PIZZA ===== */}
      {/* ===== END Testimonial ===== */}
      <section>
        <Container>
          <Row>
            
            <Col lg='6' md='6'>
              <div className="testimonial mb-4">
                <h5 className="testimonial_subtitle">Testimonial
                </h5>
                <h2 className="testimonial_title mb-4">
                What our <span>customers</span> are saying
                </h2>
                <p className="testimonial_desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque magnam hic delectus minima fugit obcaecati, omnis velit dolorem. Inventore, odio.
                </p>
                
                <div className="">
                  <Testimonial />
                </div>
              </div>
            </Col>
            
            <Col lg='6' md='6'>
              <img src={networkImg} alt="testimonial-img" className="w-100"/>
            </Col>
            
          </Row>
        </Container>
      </section>
      
      
    </Helmet>
  )
}

export default Home