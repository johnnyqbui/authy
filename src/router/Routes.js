import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';

const Home = lazy(() => import("containers/Home"));
const Signup = lazy(() => import("containers/Signup"));
const Login = lazy(() => import("containers/Login"));
const NotFound = lazy(() => import("containers/NotFound"));

const Routes = () => (
  <Suspense fallback={<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>Loading...</div>}>
    <Router>
      <Home path="/" />
      <Signup path="/signup" />
      <Login path="/login" />
      <NotFound default />
    </Router>
  </Suspense>
);

export default Routes
