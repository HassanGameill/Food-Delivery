import React from 'react'
import '../../../Styles/category.css';

import {Container, Row, Col} from 'reactstrap';

import categoryImg01 from '../../../Assets/images/category-01.png';
import categoryImg02 from '../../../Assets/images/category-02.png';
import categoryImg03 from '../../../Assets/images/category-03.png';
import categoryImg04 from '../../../Assets/images/category-04.png';


const categoryData = [
    {
      display: 'Fast Food',
      imgUrl: categoryImg01,
    },
    
    {
      display: 'Pizza',
      imgUrl: categoryImg02,
    },
    
    {
      display: 'Asian Food',
      imgUrl: categoryImg03,
    },
    
    {
      display: 'Row Meat',
      imgUrl: categoryImg04,
    },
    
    
  ]

const Category = () => {
  return (
    <Container>
      <Row>
        {
          categoryData.length >= 1 ? (categoryData.map((item, index) => (
              <Col className="mb-3" lg='3' md='4' sm='6' xs='6'>
                <div className="category_item d-flex align-items-center gap-3" key={index}>
                  <div className="category_img">
                    <img src={item.imgUrl} alt="category_item" />
                  </div>
                  <h6>{item.display}</h6>
                  
                </div>
              </Col>
            ))) : (<h4>No Data</h4>)
        }
      
        <Col lg='3' md='4'></Col>
      </Row>
    </Container>
  )
}

export default Category