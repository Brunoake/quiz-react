import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import Options from './Options';


import './Questions.css';

const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestions]

  return  <div id='questions'>
    <p>Pergunta {quizState.currentQuestions + 1} de {quizState.questions.length}</p>
    <h2>{currentQuestion.question}</h2>
    <div id="options-container">
        {currentQuestion.options.map((option) =>
        (
          <Options option={option} key={option}/>
        ))}
    </div>
    <button onClick={()  => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
    </div>
 
  
}

export default Questions