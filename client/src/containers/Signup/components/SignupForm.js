import React, { useState } from 'react'
import { Form, Field } from 'components/Form'
import SubmitButton from 'components/Form/SubmitButton'

const formInitialState = {
  username: '',
  password: '',
  email: ''
}

export default () => {
  const [values, setValue] = useState(formInitialState)
  const { username, password, email } = values;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = {
      ...values,
      [name]: value
    }

    setValue(newValue)
  }

  const handleFormSubmit = (e) => {
    console.log('submit', values)

    e.preventDefault()
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
  );
}
