
const Header = (props) => {
    return (
      <h1>{props.course.name}</h1>
    )
}


const Content = (props) => {
  return (
      <>
        {props.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
      </>
  )
}

const Total = ({parts}) => {
 let sum = parts.reduce((sum, part) => sum+part.exercises, 0)  
  return( 
   <p>
    <b>
      Number of exercises {sum}
    </b>    
  </p>
 )
}


const Course = ({ course }) => {

  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </>
  )
}

export default Course
