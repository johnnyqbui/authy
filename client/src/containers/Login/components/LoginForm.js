import React, { useState, useEffect } from 'react'
import { Form, Field } from 'components/Form'
import SubmitButton from 'components/Form/SubmitButton'
import axios from 'axios';

const formInitialState = {
  username: '',
  password: '',
}

const userInitialState = {
  user: {}
}

export default () => {
  const [values, setValue] = useState(formInitialState)

  const { username, password } = values;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = {
      ...values,
      [name]: value
    }

    setValue(newValue)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    console.log('submit', values)
    // Log user in

    try {
      const results = await axios.get('http://localhost:3001/')
      const data = await results.json()
      console.log({ data })

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
  );
}
