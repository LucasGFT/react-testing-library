import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

const renderWithRouter = (element) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{element}</Router>), history,
  });
};
export default renderWithRouter;
