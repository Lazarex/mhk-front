// Must have at least one test file in this directory or Mocha will throw an error.
import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('<Home />', () => {
  it('should have a header called \'Sample\'', () => {
    const wrapper = shallow(<Home />);
    const actual = wrapper.find('h2.first').text();
    const expected = 'Sample';

    expect(actual).toEqual(expected);
  });
});
