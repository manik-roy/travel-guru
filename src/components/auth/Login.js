import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import InputItem from '../Input/InputItem';

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: {}
  });
  const onChangeHandler = e => {
    setUser(previousState => ({ ...previousState, [e.target.name]: e.target.value }))
    e.persist()
  }

  return (
    <Container className="pr-0 mt-5 pt-5">
      <Row>
        <Col sm={8} className="m-auto" xl={6} md="8">
          <Card>

            <Card.Body>
              <h2 className="py-1">Create an account </h2>
              <Form autoComplete="off">
                <InputItem value={user.firstName}
                  onChangeHandler={onChangeHandler}
                  name="firstName"
                  customClass="loginInput" autoFocus
                  placeholder="First Name" />
                <InputItem value={user.lastName}
                  onChangeHandler={onChangeHandler}
                  name="lastName"
                  customClass="loginInput"
                  placeholder="Last Name" />
                <InputItem value={user.email}
                  onChangeHandler={onChangeHandler}
                  name="email"
                  customClass="loginInput"
                  type="email"
                  placeholder="Email" />
                <InputItem value={user.password}
                  onChangeHandler={onChangeHandler}
                  name="password"
                  type="password"
                  customClass="loginInput"
                  placeholder="Password" />
                <InputItem value={user.confirmPassword}
                  onChangeHandler={onChangeHandler}
                  type="password"
                  name="confirmPassword"
                  customClass="loginInput"
                  placeholder="Confirm Password" />
                <Button className="w-100" variant="warning" type="submit">Create an Account</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;