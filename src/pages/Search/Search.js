import { useState, useContext } from 'react'
import MenuNavbar from '../../components/Navbar/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Footer from '../../components/Footer/Footer';
import Context from '../../context';
import './Search.css'
import useFetch from '../../hooks/useFetch';
import SearchCard from '../../components/SearchCard/SearchCard';

export const Search = () => {

  const { language } = useContext(Context);
  const [search, setSearch] = useState('')
  const {data, loading, error} = useFetch(`http://localhost:5000/api/search/${search}`);
  const [content, setContent] = useState([{name: 'hola'}])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const clearSearch = () => {
    setSearch('');
  }

  
  return (
    <div>
      <MenuNavbar selected={2} />
      <Container fluid={true} className='d-flex justify-content-center' >
          <Form className='w-75 mt-3' onSubmit={handleSubmit}>
            <Form.Control type='text' size='lg' className='ps-5 pe-5' placeholder={language.search_placeholder}
             value={search} onChange={(e) => setSearch(e.target.value)} />
            <i className="fa-solid fa-magnifying-glass fa-lg input-icon" ></i>
            <i className="fa-solid fa-xmark link-danger fa-lg input-clear" onClick={clearSearch}></i>
          </Form>
      </Container>

      <Container fluid={true}>
        <Row xs={1} md={2} lg={4}>
        {data?.map((pokemon) => {
          return(
            <Col key={ pokemon.Id }>
              <SearchCard key={pokemon.Id} idPokemon={pokemon.Id} name={pokemon.Name} images={pokemon.Image_Array} speciesId={pokemon.Id_Species}  />
            </Col>
          )
        })}

        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Search;
