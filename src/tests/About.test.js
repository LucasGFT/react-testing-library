import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import About from '../pages/About';

test('É exibido na tela um h2 com texto About Pokédex', () => {
  renderWithRouter(<About />);
  const hDois = screen.getByRole('heading', { name: 'About Pokédex' });
  expect(hDois).toBeInTheDocument();
});

test('O atributo src da imagem é', () => {
  renderWithRouter(<About />);
  const srcImg = screen.getByRole('img');
  expect(srcImg.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
