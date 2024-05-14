import React, {useEffect, useState} from 'react'
import './SearchCard.css'
import { useNavigate } from "react-router-dom";

const SearchCard = ({idPokemon, name, images, speciesId}) => {

  const navigate = useNavigate();

  const [imagesArray, setImagesArray, isLoading] = useState([]);
  useEffect(() => {

    const splitImages = () => {
 
     const imageArray = images.split("\\")
     return imageArray;
     
    }
 
    setImagesArray(splitImages());
 
   }, [images, isLoading])

  return (
    <div className='bg-body-secondary search-card mb-5' onClick={() => navigate(`/visualizer/${speciesId}`)}>
      <h3> {idPokemon} </h3>
      <h3> {name} </h3>
      {!isLoading && (<img src={imagesArray[0]} style={{height: '120px'}} />)}
    </div>
  )
}

export default SearchCard