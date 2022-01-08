import React,{ useState } from 'react'
import PropTypes from 'prop-types'
import { Container,Form,Button,Alert } from 'react-bootstrap'
import Signup from './SignupForm'

const LoginForm=({ username,password,onSubmit,usernameSetter,passwordSetter }) => {
  const [signupClick, setSingupClick] = useState(false)
  if(signupClick){
    return (
      <Signup/>
    )
  }
  return (
    <Container>
      <Alert variant="primary">Sign in to start blogging or <Button onClick={() => {setSingupClick(!signupClick)}}>Sign up</Button></Alert>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} onChange={(event) => {usernameSetter(event.target.value)}}  />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(event) => {passwordSetter(event.target.value)}}  />

        </Form.Group>


        <Button variant="primary" type="submit">
    Submit
        </Button>


      </Form>
    </Container>

  )
}
LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordSetter: PropTypes.func.isRequired,
  usernameSetter: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm