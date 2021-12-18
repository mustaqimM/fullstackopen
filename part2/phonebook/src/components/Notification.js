import React from 'react'

const Notification = ({ message }) => {
  const boxStyle = {
    background: 'grey',
    borderRadius: 5,
    borderStyle: 'solid',
    padding: 10,
    marginBottom: 10,
  }
  const successStyle = {
    color: 'green',
    fontSize: 20,
  }

  if (message === null) {
    return null
  }

  return (
    <div style={boxStyle}>
      <div style={successStyle}>{message}</div>
    </div>
  )
}

export default Notification
