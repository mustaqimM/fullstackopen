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

const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map(course =>
        <Course key={course.id} {...course} />
      )}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
  ]

  return <Courses courses={courses} />
}

export default App;
