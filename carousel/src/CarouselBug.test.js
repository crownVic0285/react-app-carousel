import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel'; 

test('left arrow moves to previous image', () => {
  const photos = [
    { caption: 'Caption 1', src: 'image1.jpg' },
    { caption: 'Caption 2', src: 'image2.jpg' },
  ];
  const { getByTestId } = render(<Carousel photos={photos} title="Test Carousel" />);
  
  // Simulate moving to the second image
  fireEvent.click(getByTestId('right-arrow'));
  
  // Click the left arrow
  fireEvent.click(getByTestId('left-arrow'));

  // Check if the caption of the currently displayed image is the caption of the first image
  const captionElement = getByTestId('caption');
  expect(captionElement.textContent).toBe(photos[0].caption);
});
