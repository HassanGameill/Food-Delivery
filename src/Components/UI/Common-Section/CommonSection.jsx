import React from 'react'
import '../../../Styles/common-section.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';


const CommonSection = (props) => {
  return (
    <section className="common_section">
      <Container>
        <h2 className="text-white">{props.title}</h2>
      </Container>
    </section>
  )
}

export default CommonSection