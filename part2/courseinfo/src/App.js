import React from 'react'

const Header = ({ name }) => (
  <>
    <h1>{name}</h1>
  </>
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
  <p> Number of exercises:
    {parts.reduce((acc, it) => acc + it.exercises, 0)}
  </p>
)

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App;
