const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Content = (props) => {
  return (
    <>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </>
  )
}
const Total = ({ part1, part2, part3 }) => {
  return (
    <p>
      Number of exercises {part1.exercises + part2.exercises + part3.exercises}
    </p>
  )
}
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}
const App = () => {

  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}
      />
      <Total part1={part1} part2={part2} part3={part3} />
    </>
  )
}

export default App