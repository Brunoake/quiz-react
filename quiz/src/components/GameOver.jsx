import { useContext } from "react"
import { QuizContext } from "react"
import './GameOver.css'

import WellDone from '../image/welldone.svg';

const GameOver = () => {
  return (
    <div id="game-over">
     <h2>Fim de jogo</h2>
     <p>Pontuação: <span>x</span></p>
     <p>Você acertou <span>Y</span> de <span>z</span> perguntas</p>
     <img src={WellDone} alt="" />
     <button>Reiniciar</button>
    </div>
  )
}

export default GameOver