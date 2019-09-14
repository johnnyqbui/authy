import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import SignupForm from './components/SignupForm'
import { H1 } from 'components'

const Wrapper = styled.div`
    display: flex;
    background: rgba(20, 40, 40, .8);
    transition: .2s;
    max-width: 450px;
    width: 100%;
    margin: 0 auto;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 450px;
    box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, .5);
`

export default () => {
  return (
    <Wrapper>
      <H1>Sign Up</H1>
      <SignupForm />
    </Wrapper>
  );
}
