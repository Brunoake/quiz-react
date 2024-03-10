import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestions]

  return  <div id='questions'>
    <p>Pergunta {quizState.currentQuestions + 1} de {quizState.questions.length}</p>
    <h2>{currentQuestion.question}</h2>
    <div id="options-container">
        <p>Opções</p>
    </div>
    <button>Continuar</button>
    </div>
 
  
}

export default Questions