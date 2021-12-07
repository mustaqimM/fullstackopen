import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({ sum, positive, average }) => {
  return (
    <div>
      <h3>all {sum}</h3>
      <h3>average {average}</h3>
      <h3>postive {positive}%</h3>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const sum = good + neutral + bad
  const positive = good / (sum) * 100
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / (sum)

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

      <Statistics sum={sum} positive={positive} average={average} />

    </div >
  )
}
export default App
