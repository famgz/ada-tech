import '@testing-library/jest-dom'; // sendo importado globalmente em setupTests.js
import  userEvent from '@testing-library/user-event'; // sendo importado globalmente em setupTests.js
import { render, screen } from '@testing-library/react';
import { Cart } from './Cart';
import { Product, products } from '../../data/products';
import { removeProduct } from '../../redux/Cart/cart-slice';

const cart = products.slice(0, 2); // obtendo os 2 primeiros produtos do array

const mockDispatch = jest.fn(); // mock function

// Mock: tornar biblioteca react-redux fake
jest.mock('react-redux', () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
  };
});

describe('Cart > Unit tests', () => {
  it('should render an empty Cart', () => {
    render(<Cart showCart={true} cart={[]} selfClose={() => {}} />);

    const titleElement = screen.getByRole('heading', { level: 1 });
    const totalElement = screen.getByTestId('total');
    const cartListElement = screen.getByRole('list'); // ul -> list

    screen.debug(cartListElement); // roda um console.log() no elemento
    screen.debug(totalElement);

    expect(titleElement).toHaveTextContent('Carrinho');
    expect(totalElement).toHaveTextContent('$0');
    expect(cartListElement).toBeEmptyDOMElement();
  });

  it('should render a cart with 2 products', () => {
    render(<Cart showCart={true} cart={cart} selfClose={() => {}} />);

    const productsItemElements = screen.getAllByRole('listitem'); // li -> listitem
    const firstProductTitleElement = screen.getByText(cart[0].title.trim());
    const secondProductTitleElement = screen.getByText(cart[1].title.trim());

    screen.debug(firstProductTitleElement);

    expect(productsItemElements.length).toBe(2);
    expect(firstProductTitleElement).toBeInTheDocument();
    expect(secondProductTitleElement).toBeInTheDocument();
  });

  it('should remove product when remove button is clicked', () => {
    render(<Cart showCart={true} cart={[cart[0]]} selfClose={() => {}} />);

    const removeProductButton = screen.getByRole('button', { name: 'Remover' });

    userEvent.click(removeProductButton);

    expect(mockDispatch).toHaveBeenCalled()
    expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0]))
  });
});
