import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>


const MostVotes = ({votes, anecdotes}) => {
  const biggest = Math.max(...votes)
  const biggestIndex = votes.indexOf(biggest)
  const mostVotes = anecdotes[biggestIndex]
  
  if (biggest === 0) {
 
    return <p>Nothing yet</p>
  
  }
 
  else return (
    <>
    <p>{mostVotes}</p>
    <p>has {votes[biggestIndex]} votes</p>
    </>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  

  const anecdoteClick = () => {
    const RandomFunction = Math.round(Math.random()*(anecdotes.length-1))
    setSelected(RandomFunction)
  }

  const voteClick = () => {
    const newVotes = votes.slice()
    newVotes[selected]+=1 
    setVotes(newVotes)
  }


  return (
    <div>
      <Header text="Anecdote of the day"/>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p> 
      <button onClick={anecdoteClick}>next anecdote</button>
      <button onClick={voteClick}>vote</button>

      <Header text="Anecdote with most votes" />
      <MostVotes anecdotes={anecdotes} votes={votes}/> 
    </div>
  )
}

export default App
