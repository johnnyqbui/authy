import React from 'react'
import { Link } from '@reach/router';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const AuthWrapper = styled.div`
  display: flex;
  flex-flow: column;
`

const NavBar = () => {
  return (
    <NavBarWrapper>
      <Link to='/'>Home</Link>
      <AuthWrapper>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Log in</Link>
      </AuthWrapper>
    </NavBarWrapper>
  )
}

export default NavBar