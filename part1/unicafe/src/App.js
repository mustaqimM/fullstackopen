import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <h3>{text} {value}</h3>
  )
}

const Statistics = ({ good, neutral, bad, sum, positive, average }) => {
  if (sum === 0) {
    return (
      <div>
        <h3>No feedback given</h3>
      </div>)
  }
  return (
    <div>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Sum" value={sum} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={positive + "%"} />
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

  const statProps = {
    good, neutral, bad, sum, positive, average
  }

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

      <Statistics {...statProps} />
    </div >
  )
}
export default App
