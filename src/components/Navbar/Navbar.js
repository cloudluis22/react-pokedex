import { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mx from '../../assets/mexico.svg'
import usa from '../../assets/usa.svg'
import fr from '../../assets/france.svg'
import Context from '../../context';

const MenuNavbar = (props) => {
  
  const {language, setLanguage} = useContext(Context);
  
  const [selected] = useState(props.selected)

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand> {language.main_page_title} </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={'/'} active={selected === 0 ? true : false} > {language.main_page} </Nav.Link>
          <Nav.Link as={Link} to={'/visualizer/1'} active={selected === 1 ? true : false} > {language.visualizer} </Nav.Link>
          <Nav.Link as={Link} to={'/search'} active={selected === 2 ? true : false} > {language.pokemon_searcher} </Nav.Link>
          <NavDropdown title={ <span> {language.language} <i className="fa-solid fa-language fa-lg"></i> </span> }>
            <NavDropdown.Item onClick={() => setLanguage('es')}> {language.es} <img src={mx} /> </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setLanguage('en')}> {language.en} <img src={usa} /> </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setLanguage('fr')}> {language.fr} <img src={fr} /> </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default MenuNavbar