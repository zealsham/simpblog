import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorNotification= ({ msg }) => {
  return (
    <Alert variant="danger">
      <p className="error">{msg}</p>
    </Alert>
  )
}

export default ErrorNotification