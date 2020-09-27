import React from 'react';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './home.css';
import LocationItem from './LocationItem';
import locations from '../../fakeData';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  return (
    <Container className="pr-0 mt-5 pt-5">
      <Row>
        <Col sm={4} xl={4}>
          <Jumbotron className="bg-transparent px-0">
            <h1 className="font-weight-bold">Cox's bazar</h1>
            <p>
              Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it</p>
            <Button variant="warning" onClick={() => history.push("/booking?location=1")}>Booking</Button>
          </Jumbotron>
        </Col>
        <Col sm={8} xl={8}>
          <Row className="location">
            {locations.map(location => <LocationItem key={location.id} location={location} />)}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;