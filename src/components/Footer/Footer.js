import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
        <Container fluid className='fixed-bottom d-flex flex-column align-items-center bg-body-tertiary'>
            <Row>
              <Col>
                <a href='https://www.pokemon.com/el/pokedex' target='_blank' > <i className="fa-solid fa-database fa-lg link-secondary"></i> </a>
              </Col>
              <Col>
                <a href='https://github.com/cloudluis22/react-pokedex' target='_blank' > <i className="fa-brands fa-github fa-lg link-secondary"></i> </a>
              </Col>
            </Row>
            <Row>
                <div> <b> MMXXIV - Ávila & Gordillo™ Productions </b>  </div>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer