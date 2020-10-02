import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import handleError from '../Input/ErrorHandler';
import InputItem from '../Input/InputItem';

const Login = () => {
  const history = useHistory();
  const [newUser, setNewUser] = useState(true)
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {}
  });

  const onChangeHandler = e => {
    setUser(previousState => ({ ...previousState, [e.target.name]: e.target.value }))
    e.persist()
  }

  const submitHandler = e => {
    const errors = handleError(user);
    setUser({ ...user, errors })
    if (Object.keys(errors).length === 0) {
      console.log('user Created successfully');
    }
    e.preventDefault();
  }

  const { firstName, lastName, email, password, confirmPassword, errors } = user;
  return (
    <Container className="pr-0 pt-5">
      <Row>
        <Col sm={8} className="m-auto" xl={6} md="8">
          <Card>
            <Card.Body>
              <h2 className="py-1">{newUser ? 'Create an account' : 'Login'}</h2>
              <Form autoComplete="off" onSubmit={submitHandler}>
                {newUser && (
                  <InputItem value={firstName}
                    onChangeHandler={onChangeHandler}
                    error={errors.firstName}
                    name="firstName"
                    customClass="loginInput" autoFocus
                    placeholder="First Name" />
                )}
                {newUser && (
                  <InputItem value={lastName}
                    onChangeHandler={onChangeHandler}
                    error={errors.lastName}
                    name="lastName"
                    customClass="loginInput"
                    placeholder="Last Name" />
                )}
                <InputItem value={email}
                  onChangeHandler={onChangeHandler}
                  error={errors.email}
                  name="email"
                  customClass="loginInput"
                  type="email"
                  placeholder="Email" />
                <InputItem value={password}
                  onChangeHandler={onChangeHandler}
                  error={errors.password}
                  name="password"
                  type="password"
                  customClass="loginInput"
                  placeholder="Password" />
                {newUser && (
                  <InputItem value={confirmPassword}
                    onChangeHandler={onChangeHandler}
                    type="password"
                    error={errors.confirmPassword}
                    name="confirmPassword"
                    customClass="loginInput"
                    placeholder="Confirm Password" />
                )}
                <Button className="w-100" variant="warning" type="submit">
                  {newUser ? 'Create an Account' : 'Login'}
                </Button>
              </Form>
              <p className="text-center pt-2">
                {newUser ? 'Already have an account' : 'Don’t have an account'} ?
                 <span onClick={() => setNewUser(!newUser)} className="text-warning login">
                  {newUser ? ' Login' : ' Create an account'}
                </span>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;