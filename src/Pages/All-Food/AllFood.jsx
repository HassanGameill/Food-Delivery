import React from 'react'
import '../../Styles/all-foods.css';
import '../../Styles/pagination.css';
import Helmet from '../../Components/Helmet/Helmet.js';
import products from '../../Assets/fake-data/products.js';
import ProductCart from '../../Components/UI/Product-Cart/ProductCart.jsx';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { useState, UseEffect } from 'react';

import ReactPaginate from 'react-paginate';

import CommonSection from "../../Components/UI/Common-Section/CommonSection.jsx";


const AllFood = () => {
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // === Pagination ====
  const [pageNumber, setPageNumber] = useState(0);
  
  const productPerPage = 12;
  
  const visitedPage = pageNumber * productPerPage;
  
  const displayPage = filteredProducts.slice(visitedPage, visitedPage + productPerPage)
  
  const pageCount = Math.ceil(filteredProducts.length / productPerPage)
  
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }


  // === Handel Research ===
  const handleSearch = (e) => {
    const word = e.target.value.toLowerCase();
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(word) ||
      product.title.toLowerCase().includes(word)
    );
    setFilteredProducts(filtered);
  };
  
  
  
  
  return (
    <Helmet title='All-Foods'>
      <CommonSection title='All Foods'/>
      
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6' xs='12'>
              <div className="search_widget d-flex align-items-center justify-content-between">
                <input type="search" placeholder="I'm Looking for ...."  onChange={handleSearch} />
              
                <span  >
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            
            <Col className="mb-5" lg='6' md='6' sm='6' xs='12'>
              <div className="sorting_widget text-end">
                <select className="w-50">
                  <option>default</option>
                  <option value="ascending">Alphabetically, A-Z"</option>
                  <option value="decending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            
            {
              displayPage.length >= 1 ? (displayPage.map((item) => (
                  <Col lg='3' md='4' sm='6' xs='6'>
                  <div className="text-center mt-3">
                    <ProductCart  item={item} key={item.id}  />
                  </div>
                    
                  </Col>
                ))) : (<h4>There Is No Producs Data</h4>)
            }
            {/* ==== Pagination ===== */}
            <div className="">
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previouseLabel= 'Prev'
                nextLabel= 'Next'
                containerClassName= "paginationBtn"
                
              />
            </div>
          </Row>
        </Container>
      </section>
      
    </Helmet>
  )
}

export default AllFood