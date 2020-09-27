import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const LocationItem = ({ location }) => {
  const history = useHistory();
  const { name, image, id } = location;
  return (
    <Col sm={4}>
      <Card className="bg-transparent">
        <Card.Img variant="top" className="img-fluid" src={image} />
        <Button className="bg-transparent booking" onClick={() => history.push(`/booking/${id}`)} >{name}</Button>
      </Card>
    </Col>
  );
};

export default LocationItem;