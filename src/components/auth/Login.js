import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import handleError from '../Input/ErrorHandler';
import InputItem from '../Input/InputItem';
import g from './g.svg';
import { createUserWithEmailAndPassword, initializeFirebase, signInWithEmailAndPassword } from './HandleLogin';
initializeFirebase()
const initUser = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {}
}

const Login = () => {
  const { user, setUser } = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(true)
  const [userInfo, setUserInfo] = useState({ ...initUser });

  const onChangeHandler = e => {
    setUserInfo(previousState => ({ ...previousState, [e.target.name]: e.target.value }))
    e.persist()
  }

  const submitHandler = e => {
    const errors = handleError(userInfo);
    setUserInfo({ ...userInfo, errors })
    if (Object.keys(errors).length === 0 && newUser) {
      createUserWithEmailAndPassword({ firstName, lastName, email, password })
        .then(res => {
          if (res.error) {
            setUserInfo({ ...userInfo, errors: res })
          } else {
            setUser({ ...res })
            history.replace(from)
          }
        })
    }
    if (!errors.email && !errors.password) {
      if (userInfo.password && userInfo.email && !newUser) {
        signInWithEmailAndPassword({ email, password })
          .then(res => {
            if (res.error) {
              setUserInfo({ ...userInfo, errors: res })
            } else {
              setUser({ ...res })
              history.replace(from)
            }
          })
      }
    }
    e.preventDefault();
  }

  useEffect(() => {
    setUserInfo({ ...initUser })
  }, [newUser])

  const { firstName, lastName, email, password, confirmPassword, errors } = userInfo;

  if (user) {
    return <Redirect to='/' />
  }
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
                {errors.error && (
                  <p className="text-danger text-center  py-2">
                    {errors.error}
                  </p>
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
          <div className="orr mt-2 w-75">Or</div>
          <div className="google-sign-in mt-2 w-75">
            <span> Continue with google <img src={g} alt="google" /></span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;