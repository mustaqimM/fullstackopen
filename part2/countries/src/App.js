import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import List from './components/List'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data)
    })
  }
  useEffect(hook, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countriesToShow =
    filter === ''
      ? countries
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(filter),
        )

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <List countriesToShow={countriesToShow} setFilter={setFilter} />
    </div>
  )
}

export default App
