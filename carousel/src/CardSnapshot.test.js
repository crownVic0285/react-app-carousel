import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card'; 

test('matches snapshot', () => {
  const { asFragment } = render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />);
  expect(asFragment()).toMatchSnapshot();
});
