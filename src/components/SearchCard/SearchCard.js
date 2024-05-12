import React, {useEffect, useState} from 'react'

const SearchCard = ({idPokemon, name, images}) => {

  const [imagesArray, setImagesArray, isLoading] = useState([]);
  useEffect(() => {

    const splitImages = () => {
 
     const imageArray = images.split("\\")
     return imageArray;
     
    }
 
    setImagesArray(splitImages());
 
   }, [images, isLoading])

  return (
    <div className='bg-body-secondary'>
      <h3> {idPokemon} </h3>
      <h3> {name} </h3>
      {!isLoading && (<img src={imagesArray[0]} />)}
    </div>
  )
}

export default SearchCard