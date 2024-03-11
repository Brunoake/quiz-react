import { useContext } from "react"

import { QuizContext } from "../context/quiz"
import './GameOver.css'

import WellDone from '../image/welldone.svg';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="game-over">
     <h2>Fim de jogo</h2>
      <p>Pontuação: <span>{quizState.score}</span></p>
     <p>Você acertou <span>{quizState.score}</span> de <span>{quizState.questions.length}{""}</span> perguntas</p>
     <img src={WellDone} alt="" />
     <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver