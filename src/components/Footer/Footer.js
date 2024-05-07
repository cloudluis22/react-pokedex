import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
        <Container fluid className='fixed-bottom d-flex flex-column align-items-center bg-body-tertiary'>
            <Row>
              <Col md='auto'>
                <a href='https://www.pokemon.com/el/pokedex' target='_blank' style={{color: 'white'}}> <i className="fa-solid fa-database fa-lg"></i> </a>
              </Col>
              <Col md='auto'>
                <a href='https://github.com/cloudluis22/react-pokedex' target='_blank' style={{color: 'white'}}> <i className="fa-brands fa-github fa-lg"></i> </a>
              </Col>
            </Row>
            <Row>
                <div> MMXXIV - Ávila & Gordillo™ Productions </div>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer