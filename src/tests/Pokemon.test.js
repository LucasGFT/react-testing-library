import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const url = '/pokemons/25';
test('A imagem do pokemon possui o src correto', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push(url);
  });

  const t = screen.getAllByRole('img');
  expect(t[0].src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
});
test('A imagem do pokemon possui o alt <name> sprite', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push(url);
  });

  const pokemonName = screen.getByTestId('pokemon-name').textContent;

  const t = screen.getAllByRole('img');
  expect(t[0].alt).toBe(`${pokemonName} sprite`);
});

test('A imagem de favorito star possui o src /star-icon.svg', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push(url);
  });

  const buttonFavoritar = screen.getByRole('checkbox');
  userEvent.click(buttonFavoritar);

  const imgFavorito = screen.getAllByRole('img');
  expect(imgFavorito[1].src).toBe('http://localhost/star-icon.svg');

  const pokemonName = screen.getByTestId('pokemon-name').textContent;
  expect(imgFavorito[1].alt).toBe(`${pokemonName} is marked as favorite`);
});

test('É exibido na tela um texto com o tipo do pokemon', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push(url);
  });
  const pokemonType = screen.getByTestId('pokemon-type').textContent;
  expect(pokemonType).toBe('Electric');
});

it('É exibido na tela um link com o href /pokemons/<id>', () => {
  renderWithRouter(<App />);

  const maisDetalhes = screen.getByRole('link', { name: 'More details' });

  expect(maisDetalhes.href).toBe('http://localhost/pokemons/25');
});
