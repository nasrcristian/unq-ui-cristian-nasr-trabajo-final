import { useState } from 'react'
import './App.css'
import MainGame from './components/MainGame/MainGame'
import OptionsModal from './components/Modal/OptionsModal/OptionsModal.jsx'
import {OPTIONS, GAME, END} from './helpers/states.js'
import PostGameModal from './components/Modal/PostGameModal/PostGameModal.jsx'

function App() {
  const [gameOptions, setGameOptions] = useState({})
  const [gamestate, setGameState] = useState(OPTIONS)
  const [displayMsg, setDisplayMsg] = useState("")

  const startGame = (options) => {
    setGameOptions(options)
    setGameState(GAME)
  }

  const endGame = (displayMsg) => {
    setDisplayMsg(displayMsg)
    setGameState(END)
  }

  const resetGame = () => {
    setGameState(GAME)
  }

  const goToOptions = () => {
    setGameState(OPTIONS)
  }


  if (gamestate === OPTIONS){
    return <OptionsModal startGame={startGame}/>
  } else if (gamestate === GAME) {
    return <MainGame options={gameOptions} endGame={endGame}/>
  } else {
    return <PostGameModal resetGame={resetGame} goToOptions={goToOptions} displayMsg={displayMsg}/>
  }



}

export default App
