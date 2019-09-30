import React, { useState, useEffect } from 'react'
import { Form, Field } from 'components/Form'
import SubmitButton from 'components/Form/SubmitButton'
import axios from 'axios'

const formInitialState = {
  email: '',
  password: '',
}

const LoginForm = () => {
  const [values, setValue] = useState(formInitialState)

  const { email, password } = values

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const newValue = {
      ...values,
      [name]: value
    }

    setValue(newValue)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    console.warn('submit', values)
    const { email, password } = values
    try {
      const results = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      const { body } = results
      console.log({ results, body })

    } catch {
      return console.error(e)
    }
  }

  return (
    <Form>
      <Field
        name='email'
        placeholder='email'
        type='text'
        value={email}
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
