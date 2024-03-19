import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Category from "../image/category.svg"

import"./PickCategory.css"

const PickCategory = () => {
    const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="category">
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das linguagens abaixo</p>
       <div>
        {quizState.questions.map((question) => (
            <button onClick={() => thooseCategoryAndReorderQuestions(question.category)} key={question.category}>{question.category}</button>
        ))}
       </div>
        <img src={Category} alt="" />
    </div>
  )
}

export default PickCategory