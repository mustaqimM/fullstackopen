import React from 'react'

const Notification = ({ message }) => {
  const boxStyle = {
    background: 'grey',
    borderRadius: 5,
    borderStyle: 'solid',
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
  }
  const successStyle = {
    color: 'green',
  }
  const updateStyle = {
    color: 'yellow',
  }
  const errorStyle = {
    color: 'red',
  }

  if (message === '') {
    return null
  }

  if (message.includes('Added')) {
    return (
      <div style={boxStyle}>
        <div style={successStyle}>{message}</div>
      </div>
    )
  }
  if (message.includes('Error')) {
    return (
      <div style={boxStyle}>
        <div style={errorStyle}>{message}</div>
      </div>
    )
  }
  if (message.includes('Updated')) {
    return (
      <div style={boxStyle}>
        UP
        <div style={updateStyle}>{message}</div>
      </div>
    )
  }

  return (
    <div style={boxStyle}>
      <div>{message}</div>
    </div>
  )
}

export default Notification
