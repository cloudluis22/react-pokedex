import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState, useRef, useContext } from 'react'
import MenuNavbar from '../../components/Navbar/Navbar'
import useFetch from "../../hooks/useFetch";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { PokemonCard } from "../../components/PokemonCard.js/PokemonCard";
import Footer from "../../components/Footer/Footer";
import Context from "../../context";

const Visualizer = () => {

  const { language } = useContext(Context);

  const divFocus = useRef(null)
  const {id, s_id} = useParams();
  const [cardChangeL, setCardChangeL] = useState(false)
  const [cardChangeR, setCardChangeR] = useState(false)
  const [cardChangeUp, setCardChangeUp] = useState(false)
  const [cardChangeDown, setCardChangeDown] = useState(false)
  const {data, loading, error} = useFetch(`http://localhost:5000/api/pokemons/${s_id}`);
  const [currentEvolution, setCurrentEvolution] = useState(0)
  const [animation, setAnimation] = useState('animate__animated animate__fadeIn')
  const items = data && data[currentEvolution];

  const navigate = useNavigate();

  let type1;
  let type2;
  
  useEffect(() => {

    const checkButtons = () => {

        if (s_id === '1') {
          setCardChangeL(false);
        }
        else {
          setCardChangeL(true);
        }

        if(s_id === '79') {
          setCardChangeR(false);
        }
        else {
          setCardChangeR(true);
        }

    }

    const checkLength = () => {
      if(data) {
        
        if(currentEvolution === 0) {
          setCardChangeUp(false);
        }
        else {
          setCardChangeUp(true);
        }

        if(currentEvolution == (data.length - 1)) {
          setCardChangeDown(false);
        }
        else {
          setCardChangeDown(true);
        }

      }

    }

    const setFocus = () => {

      divFocus?.current.focus();
    }

    setFocus();
    checkButtons();
    checkLength();
  }, [s_id, id, data, currentEvolution])
  
  const handleKeyboard = (event) => {
    if(event.key === 'ArrowRight') {
      if(s_id !== '79') {
        changeSpecies();
        navigate(`/visualizer/${parseInt(s_id) + 1}`)
      }
    }

    if(event.key === 'ArrowLeft') {
      if(s_id !== '1') {
        changeSpecies();
        navigate(`/visualizer/${parseInt(s_id) - 1}`)
      }
    }

    if(event.key === 'ArrowUp') {
      if(currentEvolution !== 0) {
        involucionar();
      }
    }

    if(event.key === 'ArrowDown') {
      if(currentEvolution < data.length - 1) {
        evolucionar();
      }
    }
}



  const evolucionar = () => {
    setCurrentEvolution(currentEvolution + 1);
    setAnimation('')
    setTimeout(() => {
      setAnimation('animate__animated animate__flipInX animate__faster')
    }, 1);
  }

  const involucionar = () => {
    setCurrentEvolution(currentEvolution - 1);
    setAnimation('')

    setTimeout(() => {
      setAnimation('animate__animated animate__flipInX animate__faster')
    }, 1);
  }

  const changeSpecies = () => {

    setCurrentEvolution(0);
    setAnimation('')
    setTimeout(() => {
      setAnimation('animate__animated animate__fadeIn animate__faster')
    }, 1);
    
  }
  
  return (
    <div onKeyDownCapture={handleKeyboard} tabIndex={0} style={{outline: 'none'}} ref={divFocus}>
      <MenuNavbar selected={1} />

      <h2 className="text-center mt-2"> {language.visualizer_header_text} </h2>
      <h3 className="text-center"> {language.visualizer_description_text} </h3>
      
      <Container fluid={true} className="d-flex justify-content-center align-items-center" style={{height: '70vh'}}>
        { data && (
          <Container fluid className="d-flex flex-column justify-content-center align-items-center">
            <Row>
              <Col className="nav-btn">
                <Button variant="danger" className="mb-2" onClick={involucionar} disabled={cardChangeUp ? false : true} >
                   <i className="fa-solid fa-arrow-up-long fa-xl"></i> </Button>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <Button variant={!cardChangeL ? `danger disabled nav-btn` : 'danger nav-btn'} as={Link} to={`/visualizer/${(parseInt(s_id)) - 1}`}
                 onClick={changeSpecies} > <i className="fa-solid fa-arrow-left-long fa-2xl"></i> </Button>
              </Col>
              <Col className={animation}>
              <PokemonCard 
                attack={items.Attack} 
                defense={items.Defense} 
                hp={items.HP} 
                idPokemon={items.Id} 
                images={items.Image_Array} 
                name={items.Name} 
                special={items.Special} 
                speed={items.Speed} 
                type1={items.Type_1} 
                type2={items.Type_2}
                isLoading={loading}
                /> 
              </Col>
              <Col className="nav-btn d-flex justify-content-center align-items-center">
                <Button variant={!cardChangeR ? `danger disabled nav-btn` : 'danger nav-btn'} as={Link} to={`/visualizer/${(parseInt(s_id)) + 1}`}
                 onClick={changeSpecies} > <i className="fa-solid fa-arrow-right-long fa-2xl"></i> </Button>
              </Col>
            </Row>
            <Row className="nav-btn">
              <Col className="mt-4">
                <Button variant="danger" onClick={evolucionar} disabled={cardChangeDown ? false : true}>
                   <i className="fa-solid fa-arrow-down-long fa-xl"></i> </Button>
              </Col>
            </Row>
          </Container>
        )}
        
      </Container>
      <Footer />
    </div>
  )
}

export default Visualizer