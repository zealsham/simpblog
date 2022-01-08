import React from 'react'
import { Alert } from 'react-bootstrap'

const SucessNotification=({ msg }) => {
  return (
    <Alert variant="success">
      <p className="sucess">{msg}</p>
    </Alert>
  )
}

export default SucessNotification