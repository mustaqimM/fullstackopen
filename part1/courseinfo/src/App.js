import React from 'react'

const Header = (props) => (
  <>
    <h1>{props.course}</h1>
  </>
)

function Content(props) {
  return (
    <div>
      {props.parts.map(part => <Part key={part.num} {...part} />)}
    </div>
  )
}

const Part = (props) => (
  <p>
    {props.name} {props.num}
  </p>
)

const Total = props => (
  <p> Number of exercises:
    {props.parts.reduce((acc, it) => acc + it.num, 0)}
  </p>
);

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      num: 10
    },
    {
      name: 'Using props to pass data',
      num: 7
    },
    {
      name: 'State of a component',
      num: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App;
