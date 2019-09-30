import React, { useState } from 'react'
import { Form, Field } from 'components/Form'
import SubmitButton from 'components/Form/SubmitButton'

const formInitialState = {
  username: '',
  password: '',
  email: ''
}

const SignupForm = () => {
  const [values, setValue] = useState(formInitialState)
  const { username, password, email } = values

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
    console.log('submit', values)
    const { username, password, email } = values

    try {
      const results = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
          email
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
      <Field
        name='email'
        placeholder='Email'
        type='email'
        value={email}
        onChange={handleInputChange}
      />
      <SubmitButton onClick={handleFormSubmit} />
    </Form>
  )
}

export default SignupForm