import React from 'react';
import {Button, Card, Image, Row, Col, Container} from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'
import src from '../assets/img/1.jpg'
const DevisePage = () => {
  const device = {id: 1, name: 'Amethyst', price: 2500, rating: 5, img: src}
  const description = [
    {id:1,title: 'Size', description: '17'},
    {id:2,title: 'Rock', description: 'Amethyst'},
    {id:3,title: 'Made', description: 'Brazil'},
    {id:4,title: 'Size Rocks', description: '1'},
    {id:5,title: 'weight', description: '7'},

  ]
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img}/>
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2>{device.name}</h2>
            <div 
              className="d-flex align-items-center justify-content-center"
              style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>От: {device.price} руб</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Характеристики</h1>
        {description.map((info, index) =>
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}}>
            {info.title}: {info.description}
          </Row>  
        )}
      </Row>
    </Container>
  );
};

export default DevisePage;