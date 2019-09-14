import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import GlobalStyle from 'globalStyle';
import Routes from 'router/Routes';
import NavBar from 'router/NavBar';

const AppWrapper = styled.div`
  height: 100vh;
  background: #222;
`;

const App = () => {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Sample" defaultTitle="Sample">
        <meta name="description" content="Sample content" />
      </Helmet>
      <GlobalStyle />
      <NavBar />
      <Routes />
    </AppWrapper>
  );
}

export default App