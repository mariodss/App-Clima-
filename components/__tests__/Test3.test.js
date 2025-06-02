import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../../src/app/page';
import axios from 'axios';

jest.mock('axios');

test('el campo de entrada y el botón de búsqueda funcionan correctamente', () => {
  render(<Home />);

  // Encuentra el input y el botón
  const input = screen.getByPlaceholderText(/search city/i);
  const button = screen.getByRole('button');

  // Escribe en el input
  fireEvent.change(input, { target: { value: 'Barcelona' } });
  expect(input.value).toBe('Barcelona');

  // Simula la respuesta de la API
  axios.get.mockResolvedValueOnce({
    data: {
      name: 'Barcelona',
      main: { temp: 25, feels_like: 23, humidity: 55 },
      weather: [{ main: 'Clear', icon: '01d' }],
      wind: { speed: 8 }
    }
  });

  // Haz clic en el botón de búsqueda
  fireEvent.click(button);

  // No se comprueba el resultado de la búsqueda aquí, solo que el input y el botón funcionan
});