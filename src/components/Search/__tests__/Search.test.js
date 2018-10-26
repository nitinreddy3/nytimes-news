/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Input } from 'antd';

import Adapter from 'enzyme-adapter-react-16';
import Search from '../Search';

const { Search: AntSearch } = Input;

Enzyme.configure({ adapter: new Adapter() });

describe('Search', () => {
  it('should have a `<AntSearch/>` element', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find(AntSearch).length).toBe(1);
  });
});
