import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import locations from '../../fakeData';
import HotelItem from './HotelItem';

const Search = () => {
  const { id } = useParams();
  const { bookingInfo } = useContext(UserContext)
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const bookingLocation = locations.find(location => location.id.toString() === id)
    setHotels(previousState => ([...previousState, ...bookingLocation.hotels]))
  }, [id])

  return (
    <Container className="pt-5">
      <Row>
        <Col sm={6} xl={7}>
          <p>252 stays
            {"  " + new Date(bookingInfo.formDate).toLocaleString('default', { month: 'long' })}

            {"  " + new Date(bookingInfo.formDate).getDate()}
             -
            {"  " + new Date(bookingInfo.toDate).toLocaleString('default', { month: 'long' })}
            {"  " + new Date(bookingInfo.toDate).getDate() + "  "}
               guests(3)</p>
          <h4>Stay in {bookingInfo.destination}</h4>
          {hotels.map(hotel => <HotelItem key={hotel.id} hotel={hotel} />)}
        </Col>
        <Col sm={6} xl={5} className="mt-4">
          <Card className="mt-5">
            <Card.Body>
              <h2>Maps here</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;