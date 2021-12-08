import React, { useState } from 'react'

const Quote = ({ anecdotes, votes }) => {
  const index = votes.reduce((prevVal, currVal, currIndex, votes) => currVal > votes[prevVal] ? currIndex : prevVal, 0);
  return (
    <h1>{anecdotes[index]}</h1>
  )
}

const Votes = ({ votes, selected }) => {
  return (
    <h3>has {votes[selected]}</h3>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const getRandInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const handleNextQuote = () => {
    setSelected(getRandInt(0, 6))
  }

  const handleVoteClick = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <Quote anecdotes={anecdotes} votes={votes} />
      <button onClick={handleNextQuote}>Next quote</button>
      <button onClick={handleVoteClick}>Vote</button>

      <p> {anecdotes[selected]} </p>
      <Votes votes={votes} selected={selected} />
    </div >
  )
}

export default App
