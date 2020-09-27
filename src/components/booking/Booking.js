import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import locations from '../../fakeData';
import InputDate from './InputDate';
import InputItem from './InputItem';

const Booking = () => {
  const { id } = useParams();
  const [formDate, setFormDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date(Date.now() + 5 * 24*60*60*1000));

  const [bookingInfo, setBookingInfo] = useState({
    location: {},
    origin: '',
    destination: ''
  });
  useEffect(() => {
    const bookingLocation = locations.find(location => location.id.toString() === id)
    setBookingInfo(previousState => ({ ...previousState, location: bookingLocation, destination: bookingLocation.name }))

  }, [id])

  const onChangeHandler = e => {
    setBookingInfo(previousState => ({ ...previousState, [e.target.name]: e.target.value }))
    e.persist()
  }

  const submitHandler = e => {


    e.preventDefault();
  }

  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col sm={6} xl={6}>
          <Jumbotron className="bg-transparent px-0">
            <h1 className="font-weight-bold">{bookingInfo.location.name}</h1>
            <p>{bookingInfo.location.description}</p>
          </Jumbotron>
        </Col>
        <Col xl={1} />
        <Col sm={6} xl={5}>
          <Card>
            <Card.Body>
              <Form onSubmit={submitHandler} autoComplete="off">
                <InputItem value={bookingInfo.origin}
                  onChangeHandler={onChangeHandler} name="origin" label="Origin" />
                <InputItem value={bookingInfo.destination}
                  onChangeHandler={onChangeHandler} name="destination" label="Destination" />

                <Form.Row>
                  <InputDate label='Form' date={formDate} setDate={setFormDate} />
                  <InputDate label='To' date={toDate} setDate={setToDate} />
                </Form.Row>
                <Button className="w-100" variant="warning" type="submit">Start Booking</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;