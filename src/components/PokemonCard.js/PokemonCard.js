import React, { useEffect, useState } from 'react'
import './PokemonCard.css'
import missigno from '../../assets/missigno.png'
import { Col, Row } from 'react-bootstrap'

export const PokemonCard = ({idPokemon, name, type1, type2, hp, attack, defense, special, speed, images, isLoading}) => {
    
  const [imagesArray, setImagesArray] = useState([])

  useEffect(() => {

   const splitImages = () => {

    const imageArray = images.split("\\")
    return imageArray;
    
   }

   setImagesArray(splitImages());
   console.log(imagesArray[1])

  }, [images, isLoading])

  const typeStyling = (type) => {

    if (type === 'Grass') return 'grass-style';
    if (type === 'Fire') return 'fire-style';
    if (type === 'Water') return 'water-style';
    if (type === 'Poison') return 'poison-style';
    if (type === 'Bug') return 'bug-style';
    if (type === 'Normal') return 'normal-style';;
    if (type === 'Electric') return 'electric-style';
    if (type === 'Ground') return 'ground-style';
    if (type === 'Flying') return 'flying-style';
    if (type === 'Psychic') return 'psychic-style';
    if (type === 'Ghost') return 'ghost-style';
    if (type === 'Rock') return 'rock-style';
    if (type === 'Ice') return 'ice-style';
    if (type === 'Dragon') return 'poison-style';
    if (type === 'Fighting') return 'fighting-style';

  }
  
  return (<div className='flip-card'>  
        <div className='flip-card-inner'>
            <div className='flip-card-front'>
             {!isLoading && ( <div>
                <h3 className='pokemon-font front'> {`${idPokemon}`} </h3>
                <h3 className='pokemon-font front'> {`${name}`} </h3>
              </div>) }
                <img src={!isLoading ? imagesArray[0] : missigno} className={!isLoading ? `pokemon-image` : `animate__animated animate__rotateIn animate__infinite missigno-image` } />
                { !isLoading && ( <div className='types-section'>
                  <p className={typeStyling(type1)} > {type1} </p>
                  <p className={typeStyling(type2)} > {type2} </p>
                </div>) }
            </div>
            <div className='flip-card-back'>
              <img src={imagesArray[1]} className='pokemon-back-image' />
              <Row>
                <Col>
                  <span className='pokemon-font stats'> HP: {hp} </span>
                </Col>
                <Col>
                  <span className='pokemon-font stats'> ATK: {attack} </span>
                </Col>                
              </Row>
              <Row className='mt-2'>
                <Col>
                  <span className='pokemon-font stats'> DEF: {defense} </span>
                </Col>
                <Col>
                  <span className='pokemon-font stats'> SP: {special} </span>
                </Col>                
              </Row>
              <Row className='mt-2'>
                <Col>
                  <span className='pokemon-font stats'> SPE: {speed} </span>
                </Col>
              </Row>
            </div>
        </div>
    </div> )
  
}
