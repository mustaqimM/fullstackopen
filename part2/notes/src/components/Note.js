import React from 'react'
import PropTypes from 'prop-types'

const Note = ({ content }) => <li>{content}</li>
Note.propTypes = {
  content: PropTypes.string.isRequired
}

export default Note
