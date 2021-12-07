import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const submitChoice = (choice) => {
    switch (choice) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        alert("Error")
    }
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => submitChoice("good")} text="Good" />
      <Button handleClick={() => submitChoice("neutral")} text="Neutral" />
      <Button handleClick={() => submitChoice("bad")} text="Bad" />

      <h2>good {good}</h2>
      <h2>neutral {neutral}</h2>
      <h2>bad {bad}</h2>
    </div>
  )
}
export default App
