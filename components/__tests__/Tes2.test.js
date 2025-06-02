import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../../src/app/page';
import axios from 'axios';

jest.mock('axios');

test('muestra un mensaje si el campo está vacío', async () => {
  render(<Home />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByTestId('error-message')).toHaveTextContent('Por favor ingresa una ciudad');
});

test('muestra un mensaje de error genérico si ocurre un error 500', async () => {
  axios.get.mockRejectedValueOnce({ response: { status: 500 } });
  render(<Home />);
  const input = screen.getByPlaceholderText(/search city/i);
  fireEvent.change(input, { target: { value: 'ErrorCity' } });
  const button = screen.getByRole('button');
  fireEvent.click(button);
  await waitFor(() =>
    expect(screen.getByTestId('error-message')).toHaveTextContent('Ocurrió un error. Intenta de nuevo.')
  );
});

test('muestra un mensaje de error cuando se ingresa una ciudad inválida', async () => {
  // Simula error 404 de Axios
  axios.get.mockRejectedValueOnce({
    response: { status: 404 }
  });

  render(<Home />);

  const input = screen.getByPlaceholderText(/search city/i);
  fireEvent.change(input, { target: { value: 'CiudadInvalida' } });

  const button = screen.getByRole('button');
  fireEvent.click(button);

  await waitFor(() =>
    expect(screen.getByTestId('error-message')).toHaveTextContent('Ciudad no encontrada')
  );
});