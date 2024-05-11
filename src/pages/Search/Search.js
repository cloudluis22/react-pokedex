import {useState, useContext} from 'react'
import MenuNavbar from '../../components/Navbar/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Footer from '../../components/Footer/Footer';
import Context from '../../context';
import './Search.css'

export const Search = () => {

  const { language } = useContext(Context);
  const [search, setSearch] = useState('')
  
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
      <Footer />
    </div>
  )
}

export default Search;
