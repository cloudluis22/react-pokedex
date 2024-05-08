import React from 'react'
import MenuNavbar from '../../components/Navbar/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

export const Search = () => {
  return (
    <div>
      <MenuNavbar selected={2} />
      <Container fluid={true} className='d-flex justify-content-center' >
        <Form className='w-75 mt-3'>
          <Form.Control type='text' size='md' placeholder='loren ipsun' />
        </Form>
      </Container>
    </div>
  )
}

export default Search;
