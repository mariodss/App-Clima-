import React from 'react';
import { render, screen } from '@testing-library/react';
import Clima from '../Clima';

// Mock de next/image para evitar errores en test
jest.mock('next/image', () => (props) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} />;
});

test('muestra la información del clima correctamente después de una búsqueda exitosa', () => {
    const weatherData = {
        name: 'Madrid',
        main: { temp: 20, feels_like: 18, humidity: 60 },
        weather: [{ main: 'Clear', icon: '01d' }], // <-- en inglés
        wind: { speed: 10 }
    };

    render(<Clima data={weatherData} />);

    expect(screen.getByText(/Weather in Madrid/i)).toBeInTheDocument();
    expect(screen.getByText(/20°/)).toBeInTheDocument();
    expect(screen.getByText(/Clear/i)).toBeInTheDocument(); // <-- en inglés
    expect(screen.getByText(/18°/)).toBeInTheDocument();
    expect(screen.getByText(/60%/)).toBeInTheDocument();
    expect(screen.getByText(/10 MPH/i)).toBeInTheDocument();
});