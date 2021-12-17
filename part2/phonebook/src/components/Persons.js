import React from 'react'

const Persons = ({ personsToShow, handleDelete }) => {
  return (
    <div>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>
            {person.name} - {person.number}
            <button onClick={() => handleDelete(person.id, person.name)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Persons
