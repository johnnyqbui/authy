import React from 'react';
import { shallow } from 'enzyme';

import { Home } from './Home';

describe('Page: Home', () => {
  const defaultProps = {
    addInitialLoad: () => { },
  };

  beforeEach(() => {
    wrapper = shallow(<Home {...defaultProps} />);
  });

  it('renders <Home /> page', () => {
    const rendered = renderer.create(<Home />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
