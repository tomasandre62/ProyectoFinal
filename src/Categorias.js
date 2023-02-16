import React, { useState, useEffect, Fragment, } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const Categorias = () => {
  function clicka() {
    Swal.fire(
      'Proximamente!!',
      'Disculpe la molestia',
      'info'
    )
  };

  //setear los hooks useState
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")


  //función para traer los datos de la API
  const URL = 'https://api.escuelajs.co/api/v1/categories?0&limit=5'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setUsers(data)
  }
  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value)
  }

  //metodo de filtrado    
  const results = !search ? users : users.filter((dato) => dato.title.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect(() => {
    showData()
  }, [])

  //renderizamos la vista
  return (
    <Fragment>
      <input style={{ display: 'none' }} value={search} onChange={searcher} type="text" placeholder='Buscar' className='form-control' />
      <Card className="text-center">
        <CardHeader><h4>Categorías</h4></CardHeader>
        <Card.Body className="mx-auto" style={{ maxWidth: '60rem' }}>
          <Card.Title><h1>Aca se Muestran Todas las Categorías</h1></Card.Title>
          <Card.Text>
            <p>
              Las categorías que se muestran acontinuación son recibidas de una Api pública con la promesa fetch,
              la Api nos envía datos ramdon y en inglés, asi que quizás no tenga mucho sentido las imágenes con los títulos de las mismas.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Row className='App' style={{ margin: '0.01rem' }}>
        {results.map((res) => (
          <Col key={res.id}>
            <Card style={{ width: '17rem',  marginTop: '1rem' }}>
              <Card.Img variant="top" src={res.image} />
              <Card.Body>
                <Card.Title>{res.name}</Card.Title>
                <Button onClick={clicka} id="boton" variant="primary">Ver Categoria</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <hr className='hidden' />
    </Fragment>
  )
};
export default Categorias