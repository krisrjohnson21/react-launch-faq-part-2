import React, { useState } from 'react'
import { Link } from "react-router-dom"
import _ from 'lodash'

import TextField from './TextField'
import ErrorList from './ErrorList'

const QuestionForm = (props) => {
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: ""
  })

  const [errors, setErrors] = useState({})

  const clearForm = (event) => {
    setNewQuestion({
      question: "",
      answer: ""
    })
    setErrors({})
  }

  const handleQuestionFieldChange = (event) => {
    setNewQuestion({
      ...newQuestion,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
      const requiredFields = ["question", "answer"]
      requiredFields.forEach((reqField) => {
        if (newQuestion[reqField].trim() === "") {
          submitErrors = {
            ...submitErrors,
            [reqField]: "cannot be blank"
          }
        }
      })

      setErrors(submitErrors)
      return _.isEmpty(submitErrors)
    }

  const handleQuestionSubmit = (event) => {
    event.preventDefault()
    if (validForSubmission()) {
      props.addNewQuestion(newQuestion)
      clearForm()
    }
  }

  return(
    <div className="newQuestionForm">
      <h3>Add A New Question</h3>
      <form onSubmit={handleQuestionSubmit}>
        <ErrorList errors={errors} />
        <label className="newFormLabel"> Question: </label>
        <TextField
          fieldName="question"
          id="question"
          content={newQuestion.question}
          handleChange={handleQuestionFieldChange}
        />

        <label className="newFormLabel"> Answer: </label>
        <TextField
          fieldName="answer"
          id="answer"
          content={newQuestion.answer}
          handleChange={handleQuestionFieldChange}
        />
        <input
          className="button"
          type="submit"
          value="Add Question"
        />
      </form>

      <h3>
        <Link to="/launchers">Click here to view a list of famous launchers!</Link>
      </h3>
    </div>
  )
}

export default QuestionForm
