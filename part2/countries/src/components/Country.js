import React from 'react'
import Weather from './Weather'

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>

      <h3>Capital: </h3>
      <h4>{country.capital.map((cap) => cap).join(', ')}</h4>

      <h3>Population: {country.population}</h3>

      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}> {lang} </li>
        ))}
      </ul>

      <img alt={country.flags.svg} src={country.flags.svg} width="200" />

      <Weather capital={country.capital} />
    </div>
  )
}

export default Country
