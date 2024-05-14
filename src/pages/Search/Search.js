import { useState, useContext, useEffect } from 'react'
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
import Dropdown from 'react-bootstrap/Dropdown';

export const Search = () => {

  const { language } = useContext(Context);
  const [search, setSearch] = useState('')
  const {data, loading, error, setData} = useFetch(`http://localhost:5000/api/search/${search}`);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const clearSearch = () => {
    setSearch('');
  }

  const sortIdAsc = () => {
    if(data) {
      const sortedContent = [...data].sort((a, b) => {
        if (a.Id < b.Id) {
          return 1;
        }
        if (a.Id > b.Id) {
          return -1;
        }
        return 0;
      }) 
      setData(sortedContent)
    }
  }

  const sortIdDesc = () => {
    if(data) {
      const sortedContent = [...data].sort((a, b) => {
        if (a.Id < b.Id) {
          return -1;
        }
        if (a.Id > b.Id) {
          return 1;
        }
        return 0;
      }) 
      setData(sortedContent)
    }
  }

  const sortNameAsc = () => {
    if(data) {
      const sortedContent = [...data].sort((a, b) => {
        if (a.Name < b.Name) {
          return -1;
        }
        if (a.Name > b.Name) {
          return 1;
        }
        return 0;
      }) 
      setData(sortedContent)
    }
  }

  const sortNameDesc = () => {
    if(data) {
      const sortedContent = [...data].sort((a, b) => {
        if (a.Name < b.Name) {
          return 1;
        }
        if (a.Name > b.Name) {
          return -1;
        }
        return 0;
      }) 
      setData(sortedContent)
    }
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

      <Container fluid={true} className='px-5'>
        <Dropdown className='mb-5'>
          <Dropdown.Toggle variant='secondary' id='sort-dropdown'>
            {language.sort} 
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={sortIdAsc}>  {language.descending}  </Dropdown.Item>
            <Dropdown.Item onClick={sortIdDesc}> {language.ascending}  </Dropdown.Item>
            <Dropdown.Item onClick={sortNameAsc}>  A-Z  </Dropdown.Item>
            <Dropdown.Item onClick={sortNameDesc}>  Z-A  </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

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
