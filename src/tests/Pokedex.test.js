import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

test('Os botões de filtragem por tipo possuem o nome correto', () => {
  renderWithRouter(<App />);

  const a = screen.getByRole('button', { name: 'All' });
  expect(a).toHaveTextContent('All');
  const types = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
  const textButton = screen.getAllByTestId('pokemon-type-button');
  textButton.map((element, index) => expect(element.textContent).toBe(types[index]));
});

test('É possível clicar no botão de filtragem All', () => {
  renderWithRouter(<App />);

  const a = screen.getByRole('button', { name: 'All' });
  expect(a).toBeInTheDocument();
  userEvent.click(a);
});
