import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('renders Card component without errors', () => {
  render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />);
});
