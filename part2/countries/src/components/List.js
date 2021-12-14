import React from 'react'
import Country from './Country'

const List = ({ countriesToShow }) => {
  if (countriesToShow.length == 1) {
    return <Country country={countriesToShow[0]} />
  }
  if (countriesToShow.length > 10) {
    return <p>Too many!</p>
  }
  return (
    <ul>
      {countriesToShow.map((country) => (
        <li key={country.name.common}>{country.name.common}</li>
      ))}
    </ul>
  )
}

export default List
