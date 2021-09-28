import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

const blue = 'rgb(0, 51, 255)';
const red = 'rgb(255, 0, 0)';
const green = 'rgb(0,255,8)';
const yellow = 'rgb(255, 247, 0)';

describe('the app', () => {
  it('does what it\'s supposed to...', () => {
    const { container } = render(<App />);
    expect(container).not.toBeEmptyDOMElement();

    const colorWheel = screen.getByLabelText('butthole');
    expect(colorWheel.style.backgroundColor).toEqual(red);

    const nextColor = screen.getByLabelText('color-wheel');
    fireEvent.change(nextColor, blue);
    waitFor(() => 
      expect(nextColor.style.backgroundColor).toEqual(blue));
  });
});
