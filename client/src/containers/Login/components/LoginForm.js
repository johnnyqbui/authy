import React, { useState, useEffect } from 'react'
import { Form, Field } from 'components/Form'
import SubmitButton from 'components/Form/SubmitButton'
import axios from 'axios'

const formInitialState = {
  username: '',
  password: '',
}

const LoginForm = () => {
  const [values, setValue] = useState(formInitialState)

  const { username, password } = values

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const newValue = {
      ...values,
      [name]: value
    }

    setValue(newValue)
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    console.warn('submit', values)
    // Log user in

    try {
      const results = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userInput: values
        })
      })
      const { data } = results
      console.log({ results, data })

    } catch {
      return console.error(e)
    }
  }

  return (
    <Form>
      <Field
        name='username'
        placeholder='Username'
        type='text'
        value={username}
        onChange={handleInputChange}
      />
      <Field
        name='password'
        placeholder='Password'
        type='password'
        value={password}
        onChange={handleInputChange}
      />
      <SubmitButton onClick={handleFormSubmit} />
    </Form>
  )
}

export default LoginForm
