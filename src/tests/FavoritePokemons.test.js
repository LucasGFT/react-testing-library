import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import { FavoritePokemons } from '../pages';

test('É exibido na tela a mensagem No favorite pokemon found', () => {
  renderWithRouter(<FavoritePokemons />);
  const NoFavorite = screen.getByText('No favorite pokemon found');
  expect(NoFavorite).toBeInTheDocument();
});
