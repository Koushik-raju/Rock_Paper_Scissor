import { useEffect, useState } from 'react'
import './App.css'
//import img1 from "./images/paper.jpg";

const App = () => {
  const [userChoice, setUserChoice] = useState('default')
  const [computerChoice, setComputerChoice] = useState('default')
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState('Let\'s see who wins')
  const [gameOver, setGameOver] = useState(false)
  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) => {
    setUserChoice(value)    
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if (userPoints <= 4 && computerPoints <= 4) {
      let totalCount = 0 ;
      

      
      if (comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock') {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User gets the point!')
        if (updatedUserPoints === 2){
          setResult('User Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }
    
      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        console.log(totalCount);
        totalCount ++ ;
        
        if (updatedComputerPoints === 2) {
          setResult('Computer Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      

      if (comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors') {
        setTurnResult('No one gets a point!')
      }

    }
    }
}, [computerChoice, userChoice])

  return (
    <div className="App">
      <h1 className='heading'>Rock-Paper-Scissors</h1>
      <br/>
      <h3>Whoever wins twice out of three times will be declared the winner, Draw matches are not counted</h3>
      <div className='score'>
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
      </div>

      <div className='choice'>
        <div className='choice-user'>
          <h2>User Choice</h2>
          <img className='user-hand' src={`./images/${userChoice}.jpg`} alt='not found' width="50px" height="100px" border="2px solid"></img>
        </div>
        <div className='choice-computer'>
        <h2>Computer Choice</h2>
          <img className='computer-hand' src={`../images/${computerChoice}.jpg`} alt='Image not present' width="50px" height="100px" border="2px solid" padding="20px"></img>
        </div>
      </div>
      
      <div className='button-div'>
        {choices.map((choice, index) =>
          <button className='button' key={index} onClick={() => handleClick(choice)} disabled={gameOver}>
            {choice} 
          </button>
        )}
      </div>
      
      <div className='result'>
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>
      
      <div className='button-div'>
        {gameOver && 
          <button className='button' onClick={() => reset()}>Restart Game?</button>
        }
      </div>
    </div>
  )
}

export default App