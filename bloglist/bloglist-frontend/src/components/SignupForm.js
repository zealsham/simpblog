import React,{ useState } from 'react'
import { Container,Form,Button,Alert } from 'react-bootstrap'
import userService from '../services/user'

const Signup =() => {
  const [name,setName] = useState('')
  const [username, setUsername] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit =  (event) => {
    event.preventDefault()
    let obj = {
      name:name,
      username:username,
      password:password
    }
    userService.create(obj)
  }
  return (
    <Container>
      <Alert variant="primary">Sign up to be part of us,Refresh after signing up to login</Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(event) => {setName(event.target.value)}}  />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} onChange={(event) => {setUsername(event.target.value)}}  />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(event) => {setPassword(event.target.value)}}  />

        </Form.Group>




        <Button variant="primary" type="submit">
    Submit
        </Button>


      </Form>
    </Container>
  )

}
export default Signup