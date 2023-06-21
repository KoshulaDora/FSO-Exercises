
const App = () => {
// const stuff = [
//          {header: 'Fundamentals of React', exercises:10},
//          {header: 'Using props to pass data', exercises:7},
//          {header: 'State of a component', exercises:14},
//        ]


const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

const Header = (props) => {
    return (
      <h1>{props.course.name}</h1>
      
    )
}

const Part = (props) => {
  return (
      <p> {props.number.name} {props.number.exercises} </p>
  )
}

const Content = (props) => {
  return (
      <>
       <Part number={props.parts[0]} />
       <Part number={props.parts[1]} />
       <Part number={props.parts[2]} />
      
      </>
  )
}

const Total = (props) => {
 return( 
   <p>
    Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}    
  </p>
 )
}
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
    
    
  )
}

export default App
