// * Imports
// React
import { useState } from "react"
import { sendForm } from '../utils/actions'

// Styling

// Images

// Question set
const questions = [
  { id: 1, question: "Question 1"},
  { id: 2, question: "Question 2"},
  { id: 3, question: "Question 3"},
  { id: 4, question: "Question 4"},
  { id: 5, question: "Question 5"},
]

// * Default function
export default function Form(){

  //  * State
  const [ formData, setFormData ] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    // 5: '',
  })

  let [ currentQ, setCurrentQ ] = useState(0)

  // * Functions
  function answerSubmitted (value){
    const nextQuestion = currentQ + 1
    setFormData({...formData, [questions[currentQ].id]: value})
  
  // Proceed to next question unless final question
  nextQuestion < questions.length ? setCurrentQ(nextQuestion) : formFinished()

  }

  // Form submitted
  // Have made this async to represent an actual API request required instead of just console.log()
  async function formFinished() {
    try {
      await sendForm(formData) 
    } catch (error) {
      console.log(error)
    }
  }


  // * JSX
  return (
    <>
      <h1>Genovian Pear Allergy Consultation</h1>

      { !formData[5]
      ?
      <div className="questionContainer">
        <p>{questions[currentQ].question}</p>
        <button onClick = {() => answerSubmitted('Yes')}>Yes</button>
        <button onClick = {() => answerSubmitted('No')}>No</button>
      </div>
      :
      <h2>Thank you for submitting your answers.</h2>
      }
    </>
  )
}
