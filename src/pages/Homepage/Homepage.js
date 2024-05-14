import React, { useContext } from 'react'
import MenuNavbar from '../../components/Navbar/Navbar';
import Context from '../../context';
import pokeLogo from '../../assets/pokemon-logo.png'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import pokemons from '../../assets/pokemons.png'
import Footer from '../../components/Footer/Footer';
import reactLogo from '../../assets/React-icon.png';
import expressLogo from '../../assets/express-js.png';

const Homepage = () => {
  const { language } = useContext(Context);

  return (
    <div className='overflow-auto'>
      <MenuNavbar selected={0} />
      <div className='text-center mt-4 px-5  animate__animated animate__fadeIn'>
        <img src={pokeLogo} alt='pokemon-logo' className='img-fluid' style={{height: '15vh'}} />
        <br />
        <img src={pokemons} className='img-fluid mt-3' alt='all pokemons'  />
        <h2> {language.homepage_credits} </h2>
        <h2 className='mt-2'> {language.home_page_3} </h2>
        <Container className='d-flex justify-content-center mt-3'>
          <Row>
            <Col>
              <img src={reactLogo} alt='react' className='img-fluid mx-2' style={{height: '15vh'}} />
              <img src={expressLogo} alt='express' className='img-fluid' style={{height: '15vh'}} />  
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage