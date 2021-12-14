import { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState([])
  // const [icon_url, setIconUrl] = useState('')

  const api = process.env.REACT_APP_WEATHER_API

  const hook = () => {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        capital +
        '&appid=' +
        api +
        '&units=metric',
      )
      .then((response) => {
        setWeather(response.data)
      })
      .catch((error) => console.log(error))
  }
  useEffect(hook, [api, capital])

  if (Object.keys(weather).length !== 0) {
    const desc = weather.weather[0].main
    const temp = weather.main.temp
    const icon = weather.weather[0].icon
    const icon_url = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'

    return (
      <div>
        <h2>Weather in {capital[0]}</h2>
        <div>
          <h3>{desc}</h3>
          <img alt={icon} src={icon_url} />
        </div>
        <h3>{temp}° Celsius</h3>
      </div>
    )
  }

  return (
    <div>
      <h2>Temperature</h2>
    </div>
  )
}

export default Weather
