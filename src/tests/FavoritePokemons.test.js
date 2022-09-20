import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import { FavoritePokemons } from '../pages';

test('É exibido na tela a mensagem No favorite pokemon found', () => {
  renderWithRouter(<FavoritePokemons />);
  const NoFavorite = screen.getByText('No favorite pokemon found');
  expect(NoFavorite).toBeInTheDocument();
});
