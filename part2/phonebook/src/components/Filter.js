import React from 'react'

const Filter = ({ findPerson, handleFindPerson }) => {
  return (
    <div>
      filter shown with <input value={findPerson} onChange={handleFindPerson} />
    </div>
  )
}

export default Filter
