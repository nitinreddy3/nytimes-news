/* eslint-env jest */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Card } from 'antd';

import Adapter from 'enzyme-adapter-react-16';
import NewsItem from '../NewsItem';

Enzyme.configure({ adapter: new Adapter() });

describe('Search', () => {
  it('should have a `<NewsItem/>` element', () => {
    const wrapper = shallow(<NewsItem />);
    expect(wrapper.find(Card).length).toBe(1);
  });
});
