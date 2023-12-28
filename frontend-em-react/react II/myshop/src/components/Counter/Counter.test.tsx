import '@testing-library/jest-dom'  // sendo importado globalmente em setupTests.js
import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';
import userEvent from '@testing-library/user-event';

// agrupar testes com caracteristicas em comum
describe('Counter > Unit tests', () => {
  test('it should render Counter component correctly', async () => {
    render(<Counter />);

    // const counterValueElement = screen.getByText('0')  //<h1>0</h1>
    const counterValueElement = await screen.findByRole('heading', { level: 1 }); // findByRole ira esperar ate 1 segundo pelo elemento
    const increaseButtonElement = screen.getByRole('button', {
      name: 'Aumentar',
    });
    const decreaseButtonElement = screen.getByRole('button', {
      name: 'Diminuir',
    });

    expect(counterValueElement).toHaveTextContent('0');
    expect(increaseButtonElement).toBeInTheDocument();
    expect(decreaseButtonElement).toBeInTheDocument();
  });

  it('should decrease counter value when increase button is clicked', () => {
    // renderizamos o componente Counter
    render(<Counter />);

    // Clicar no botao Aumentar para aumentar o valor do contador
    const counterValueElement = screen.getByRole('heading', { level: 1 });
    const decreaseButton = screen.getByRole('button', { name: 'Diminuir' });

    userEvent.click(decreaseButton);

    // Espero que o valor do contador seja 1
    expect(counterValueElement).toHaveTextContent('-1');
  });

  it('should increase counter value when increase button is clicked', () => {
    // renderizamos o componente Counter
    render(<Counter />);

    // Clicar no botao Aumentar para aumentar o valor do contador
    const increaseButton = screen.getByRole('button', { name: 'Aumentar' });
    userEvent.click(increaseButton);

    const counterValueElement = screen.getByText('1', { exact: true });

    // Espero que o valor do contador seja 1
    expect(counterValueElement).toBeInTheDocument();
  });
});
