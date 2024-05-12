import { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mx from '../../assets/mexico.svg'
import usa from '../../assets/usa.svg'
import fr from '../../assets/france.svg'
import Context from '../../context';
import PokeballTitle from '../../assets/pokeball-title.svg'
import './Navbar.css'

const MenuNavbar = (props) => {
  
  const mode = document.documentElement.getAttribute('data-bs-theme');
  const [lightModeChecked, setLightModeChecked] = useState(mode === 'light' ? true : false);
  const {language, setLanguage} = useContext(Context);
  const [selected] = useState(props.selected);

  const handleLightModeCheck = (e) => {
    setLightModeChecked(e.target.checked);
    if(!lightModeChecked) {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
    else {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
  };


  return (
    <Navbar expand="sm" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand> {<span> <img src={PokeballTitle} style={{width: '50px', height: '50px'}} className='pokeball-anim' /> {language.main_page_title} </span>} </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={'/'} active={selected === 0 ? true : false} > {<span> <i className="fa-solid fa-house"></i> {language.main_page} </span>} </Nav.Link>
          <Nav.Link as={Link} to={'/visualizer/1'} active={selected === 1 ? true : false} > {<span> <i className="fa-solid fa-tv"></i> {language.visualizer} </span>}  </Nav.Link>
          <Nav.Link as={Link} to={'/search'} active={selected === 2 ? true : false} > {<span> <i className="fa-solid fa-magnifying-glass"></i> {language.pokemon_searcher} </span>} </Nav.Link>
          <NavDropdown title={ <span> <i className="fa-solid fa-language fa-lg"></i> {language.language} </span> }>
            <NavDropdown.Item onClick={() => setLanguage('es')}> {language.es} <img src={mx} /> </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setLanguage('en')}> {language.en} <img src={usa} /> </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setLanguage('fr')}> {language.fr} <img src={fr} /> </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className='ms-auto'>
          <Form className='d-flex align-items-center'>
              <Form.Check
               type='switch'
               label={<span> <i className="fa-solid fa-sun"></i> { language.light_mode } </span>}
               checked={lightModeChecked}
               onChange={handleLightModeCheck}
               />
            </Form>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default MenuNavbar