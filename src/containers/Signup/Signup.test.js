import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { About } from '.';

describe('Page: About', () => {
  const defaultProps = {
    counter: 5,
    incrementCounter: () => { },
  };

  beforeEach(() => {
    wrapper = shallow(<About {...defaultProps} />);
  });

  it('renders <About /> page', () => {
    const rendered = renderer.create(<About />).toJSON();
    expect(rendered).toBeTruthy();
  });

});
