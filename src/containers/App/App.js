import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import GlobalStyle from 'globalStyle';
import Routes from 'router/Routes';
import NavBar from 'router/NavBar';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 10px auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
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