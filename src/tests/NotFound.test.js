import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../pages/NotFound';

test('É exibido na tela um h2 com o texto Page requested not found', () => {
  renderWithRouter(<NotFound />);
  const hDois = screen.getByRole('heading', { name: 'Page requested not found' });
  expect(hDois).toBeInTheDocument();
});
test('O atributo src da imagem é', () => {
  renderWithRouter(<NotFound />);
  const srcImg = screen.getByRole('img');
  expect(srcImg.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
