import { useState } from 'react'

  const Button = ({handleClick, text}) => (
        <button onClick={handleClick}>
        {text}
        </button>
)

  const StiatisticLine = (props) => {
    return (<tr><td>{props.text}</td><td>{props.value}</td></tr>)
  }

  const Statistics = (props) => {

    const total = props.good + props.neutral + props.bad

    if (total === 0)
      return (
        <>
        <h2>statistics</h2>
        <p>No feedback given</p>
        </>
      )
    else return (
        <>
         <h2>statistics</h2>
         <table>
          <tbody> 
            <StiatisticLine text="good" value={props.good} />
            <StiatisticLine text="neutral" value={props.neutral} />
            <StiatisticLine text="bad" value={props.bad} />
            <StiatisticLine text="all" value={total}/>
            <StiatisticLine text="average" value={(props.good + (-props.bad))/total}/>
            <StiatisticLine text="positive"  value={(props.good * 100)/(total) + "%"}/>
          </tbody> 
         </table>
        </>
      ) 
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)      } text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)        } text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
