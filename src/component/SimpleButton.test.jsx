import React from 'react';
import SimpleButton from './SimpleButton';
import { shallow } from 'enzyme';


describe('SimpleButton', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SimpleButton />);
    expect(wrapper).toMatchSnapshot();
  });
});