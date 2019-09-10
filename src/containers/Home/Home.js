import React, { Component } from 'react';

import ErrorBoundary from 'components/ErrorBoundary';
import TestError from 'components/TestError';
import H1 from 'components/H1';

export default class Home extends Component {
  componentDidMount() {
    this.props.addInitialLoad();
  }

  render() {
    console.log(this.props)
    return (
      <section>
        <H1>Welcome to the home page</H1>
        <ErrorBoundary>
          <TestError />
        </ErrorBoundary>
      </section>
    );
  }
}