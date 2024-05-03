import React from 'react'
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
        <Container fluid className='fixed-bottom'>
            <Row className='bg-body-tertiary text-center'>
                <div> 2024 - Todos los derechos reservados </div>
                <div> Ávila & Gordillo Productions </div>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer