import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';

import Home from 'containers/Home'
import Signup from 'containers/Signup';
import Login from 'containers/Login';
import NotFound from 'containers/NotFound';

const Routes = () => (
  <Router>
    <Home path="/" />
    <Signup path="/signup" />
    <Login path="/login" />
    <NotFound default />
  </Router>
);

export default Routes
