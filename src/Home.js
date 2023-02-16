import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import js from './imagenes/js.png'
import react from './imagenes/react.png'
import reactB from './imagenes/ReactBootstrap.png'
import sweet from './imagenes/0_jP91pTtmRCGfWUE5.png'
import bootstrap from './imagenes/Bootstrap-descargar-instalar.png'
import reactR from './imagenes/reactRouter.jpg'


function Home() {
    return (
        <Fragment>
            <Card className="text-center">
                <CardHeader><h4>Bienvenido</h4></CardHeader>
                <Card.Body className="mx-auto" style={{ maxWidth: '60rem' }}>
                    <Card.Title><h1>Este es el Index de la Simulacion</h1></Card.Title>
                    <Card.Text>
                        <p>
                            Este es el Index de la Simulación
                            La simulación consiste en realizar una conexión con una Api pública de Platzi que devuelve datos random de artículos con imágenes que mostraremos
                            de manera ordenada y responsive.
                        </p>
                        <p>
                            La conexión con la api se hizo con la promesa fetch.
                        </p>
                        <p>
                            Usamos varias librerías y frameworks de Js para la renderización de los elementos y los estilos del contenido, entre ellas tenemos React,
                            Bootstrap, Sweetalert2, y React Router para el redireccionamiento sin recargar la página.
                        </p>
                        <p>
                            En la simulación tenemos varios componentes, el index que es el que vemos actualmente y aparece al iniciar la aplicación. Categorías que
                            nos muestra categorías que nos trae la Api. Todos los artículos donde podemos ver hasta 15 artículos que nos trae la Api. Y usuarios que nos
                            muestra algunos usuarios también importados de la Api.
                        </p>
                    </Card.Text>
                    <Button variant="primary" href='/Categorias' size="sm">
                        Categorias
                    </Button>{' '}
                    <Button variant="primary" href='/Todos' size="sm">
                        Todos los Articulos
                    </Button>{' '}
                    <Button variant="primary" href='/Usuarios' size="sm">
                        Usuarios
                    </Button>
                </Card.Body>
                <hr />
                <Row style={{ margin: '0.01rem' }}>
                    <Col sm={2}>
                        <Image src={js} alt=" " className='img-fluid'></Image>
                        <Card.Body>
                            <Card.Text>
                                <h4>
                                    JavaScript
                                </h4>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col sm={2}>
                        <Image src={react} alt=" " className='img-fluid'></Image>
                        <Card.Body>
                            <Card.Text>
                                <h4>
                                    React
                                </h4>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col sm={2}>
                        <Image src={reactB} alt=" " className='img-fluid'></Image>
                        <Card.Body>
                            <Card.Text>
                                <h4>
                                    React-Bootstrap
                                </h4>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col sm={2}>
                        <Image src={sweet} alt=" " className='img-fluid'></Image>
                        <Card.Body>
                            <Card.Text>
                                <h4>
                                    SweetAlert
                                </h4>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col sm={2}>
                        <Image src={bootstrap} alt=" " className='img-fluid'></Image>
                        <Card.Body>
                            <Card.Text>
                                <h4>
                                    Bootstrap
                                </h4>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col sm={2}>
                        <Image src={reactR} alt=" " className='img-fluid'></Image>
                        <Card.Body>
                            <Card.Text>
                                <h4>
                                    React Router
                                </h4>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Fragment>
    );
}

export default Home;