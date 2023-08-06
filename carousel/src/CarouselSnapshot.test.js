import React from 'react';
import { render } from '@testing-library/react';
import Carousel from './Carousel'; 

test('matches snapshot', () => {
  const { asFragment } = render(<Carousel photos={[{ caption: 'Caption 1', src: 'image1.jpg' }]} title="Test Carousel" />);
  expect(asFragment()).toMatchSnapshot();
});
