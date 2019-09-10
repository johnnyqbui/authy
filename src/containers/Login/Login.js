import React from 'react'
import { H1, Button } from 'components'

export default (props) => {
  const incrementCounter = () => {
    props.incrementCounter()
  }

  return (
    <section>
      <>
        <H1>Login Page</H1>
        <Button onClick={incrementCounter}>Increment</Button>
        <p>Current Count: {props.counter}</p>
      </>
    </section>
  );
}
