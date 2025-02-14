import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import Options from './Options';


import './Questions.css';

const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestions]

    const onSelectOption = (option) => {
      dispatch({
        type: "CHECK_ANSWER",
        payload: {answer: currentQuestion.answer, option},
      })
    }

    console.log(quizState)

  return  <div id='questions'>
    <p>Pergunta {quizState.currentQuestions + 1} de {quizState.questions.length}</p>
    <h2>{currentQuestion.question}</h2>
    <div id="options-container">
        {currentQuestion.options.map((option) =>
        (
          <Options
           option={option} 
           key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            hide={quizState.optionToHide === option ?"hide" : null}
            />
        ))}
    </div>
    {!quizState.answerSelected && ! quizState.help &&(
      <>
      {currentQuestion.tip && (<button onClick={() => dispatch({type: "SHOW_TIP"})}>Dica</button>
      )}
    <button onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
            Excluir uma
          </button>
       </>
    )}
   {!quizState.answerSelected && quizState.help === "tip" && ( <p>{currentQuestion.tip}</p> )}
    {quizState.answerSelected && (
      <button onClick={()  => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
    )}
    </div>
 
  
}

export default Questions