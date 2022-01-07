import React from 'react'
import PropTypes from 'prop-types'

const LoginForm=({ username,password,onSubmit,usernameSetter,passwordSetter }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
                username: <input value={username} name="username" onChange={(event) => {usernameSetter(event.target.value)}} />
      </div>
      <div>
                passowrd: <input value={password} name="password" onChange={(event) => {passwordSetter(event.target.value)}} />
      </div>

      <button type="submit">Login</button>


    </form>
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