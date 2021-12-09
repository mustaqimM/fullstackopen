import React from 'react'

const Header = ({ name }) => (
  <div>
    <h1>{name}</h1>
  </div>
)

function Content({ parts }) {
  return (
    <div>
      {parts.map(part => <Part key={part.id} {...part} />)}
    </div>
  )
}

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Total = ({ parts }) => (
  <h3> Number of exercises:
    {parts.reduce((acc, it) => acc + it.exercises, 0)}
  </h3>
)

const Course = ({ name, parts }) => {
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default Course
