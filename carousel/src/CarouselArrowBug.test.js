import React from 'react';
import { render } from '@testing-library/react';
import Carousel from './Carousel'; 

test('left arrow is missing on first image, right arrow is missing on last image', () => {
  const photos = [
    { caption: 'Caption 1', src: 'image1.jpg' },
    { caption: 'Caption 2', src: 'image2.jpg' },
    { caption: 'Caption 3', src: 'image3.jpg' },
  ];
  const { queryByTestId, getByTestId } = render(<Carousel photos={photos} title="Test Carousel" />);
  
  // Check if the left arrow is missing on the first image
  const leftArrow = queryByTestId('left-arrow');
  expect(leftArrow).toBeNull();

  // Simulate moving to the last image
  fireEvent.click(getByTestId('right-arrow'));
  fireEvent.click(getByTestId('right-arrow'));
  
  // Check if the right arrow is missing on the last image
  const rightArrow = queryByTestId('right-arrow');
  expect(rightArrow).toBeNull();
});
