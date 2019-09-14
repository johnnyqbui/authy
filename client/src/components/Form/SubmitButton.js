import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.input`
  border: 1px solid rgba(10, 180, 180, 1);
  background: rgba(20, 20, 20, .6);
  font-size: 18px;
  color: white;
  margin-top: 20px;
  padding: 10px 50px;
  cursor: pointer;
  transition: .4s;
  &:hover {
    background: rgba(20, 20, 20, .8);
    padding: 10px 80px;
  }
`

const Button = (props) => {
  return (
    <ButtonWrapper type='submit' {...props} />
  )
}

export default Button
