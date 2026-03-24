const Header = ({ name }) => {
  return (
    <h2>{name}</h2>
  )
}
const Part = ({ part }) => {
  return (
    <li>{part.name} {part.exercises}</li>
  )
}
const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </ul>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p><strong>Total of {total} exercises</strong></p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
export default Course