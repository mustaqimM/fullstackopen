import React from 'react'
import Country from './Country'

const List = ({ countriesToShow, setFilter }) => {
  if (countriesToShow.length == 1) {
    return <Country country={countriesToShow[0]} />
  }
  if (countriesToShow.length > 10) {
    return <p>Too many!</p>
  }
  return (
    <div>
      <ul>
        {countriesToShow.map((country) => (
          <li key={country.name.common}>
            {country.name.common}{' '}
            <button
              onClick={() => setFilter(country.name.common.toLowerCase())}
            >
              Show
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
