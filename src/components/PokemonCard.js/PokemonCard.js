import React, { useEffect, useState, useContext } from 'react'
import './PokemonCard.css'
import missigno from '../../assets/missigno.png'
import { Col, Row } from 'react-bootstrap'
import Context from '../../context'

export const PokemonCard = ({idPokemon, name, type1, type2, hp, attack, defense, special, speed, images, isLoading}) => {
    
  const [imagesArray, setImagesArray] = useState([])
  const { language } = useContext(Context);

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

  const checkTypeLanguage = (type) => {
    if(language.current_lang === 'en') {
      return type;
    }

    if(language.current_lang === 'es') {
      switch (type) {

        case 'Grass':
          return 'Planta';
          
        case 'Fire':
          return 'Fuego';

        case 'Water':
          return 'Agua';

        case 'Poison':
          return 'Veneno';  
        
        case 'Bug':
          return 'Bicho';
          
        case 'Normal':
          return 'Normal';
          
        case 'Electric':
          return 'Eléctrico';
      
        case 'Ground':
          return 'Tierra';          

        case 'Flying':
          return 'Volador'
        
        case 'Psychic':
          return 'Psíquico';          

        case 'Ghost':
          return 'Fantasma';

        case 'Rock':
          return 'Roca';
          
        case 'Ice':
          return 'Hielo'

        case 'Dragon':
          return 'Dragón';
          
        case 'Fighting':
          return 'Lucha';

        default:
          return '';
      }
    }

    if(language.current_lang === 'fr') {
      switch (type) {

        case 'Grass':
          return 'Plante';
          
        case 'Fire':
          return 'Feu';

        case 'Water':
          return 'Eau';

        case 'Poison':
          return 'Poison';  
        
        case 'Bug':
          return 'Insecte';
          
        case 'Normal':
          return 'Normal';
          
        case 'Electric':
          return 'Électrik';
      
        case 'Ground':
          return 'Sol';          

        case 'Flying':
          return 'Vol'
        
        case 'Psychic':
          return 'Psy';          

        case 'Ghost':
          return 'Spectre';

        case 'Rock':
          return 'Roche';
          
        case 'Ice':
          return 'Glace'

        case 'Dragon':
          return 'Dragon';
          
        case 'Fighting':
          return 'Combat';

        default:
          return '';
      }
    }
  }

  return (<div className='flip-card'>  
        <div className='flip-card-inner border border-light border-3'>
            <div className='flip-card-front'>
             {!isLoading && ( <div>
                <h3 className='pokemon-font front'> {`${idPokemon}`} </h3>
                <h3 className='pokemon-font front'> {`${name}`} </h3>
              </div>) }
                <img src={!isLoading ? imagesArray[0] : missigno} className={!isLoading ? `pokemon-image` : `animate__animated animate__rotateIn animate__infinite missigno-image` } />
                { !isLoading && ( <div className='types-section'>
                  <p className={typeStyling(type1)} > {checkTypeLanguage(type1)} </p>
                  <p className={typeStyling(type2)} > {checkTypeLanguage(type2)} </p>
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
