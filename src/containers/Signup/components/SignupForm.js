import React, { useState } from 'react'
import { Form, Field } from 'components/Form'
import SubmitButton from 'components/Form/SubmitButton'

const onChange = (e, setValue) => {
  const newValue = {
    [e.target.name]: e.target.value
  }

  setValue(newValue)
}

const onSubmit = (e) => {
  console.log('submit')
  e.preventDefault()
}

const formInitialState = {
  username: '',
  password: '',
  email: ''
}

export default () => {
  const [value, setValue] = useState(formInitialState)
  const {
    username,
    password,
    email
  } = value;

  return (
    <Form>
      <Field
        name='username'
        placeholder='Username'
        type='text'
        value={username}
        onChange={(e) => onChange(e, setValue)}
      />
      <Field
        name='password'
        placeholder='Password'
        type='password'
        value={password}
        onChange={(e) => onChange(e, setValue)}
      />
      <Field
        name='email'
        placeholder='Email'
        type='email'
        value={email}
        onChange={(e) => onChange(e, setValue)}
      />
      <SubmitButton onClick={onSubmit} />
    </Form>
  );
}
