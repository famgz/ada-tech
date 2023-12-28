import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { Product } from '../../data/products';
import { RootReducer } from '../../redux/root-reducer';
import { removeProduct } from '../../redux/Cart/cart-slice';

interface CartProps {
  showCart: boolean;
  cart: Product[]
  selfClose: () => void
}

export const Cart: React.FC<CartProps> = ({ showCart, cart, selfClose }) => {

  const dispatch = useDispatch();

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  // remover item do carrinho
  function handleRemoveProductFromCart(product: Product) {
    dispatch(removeProduct(product));
  }

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
      <button
        onClick={selfClose}
      >
        Fechar
      </button>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <strong>{product.title}</strong> - ${product.price} {' '}
            <button onClick={() => handleRemoveProductFromCart(product)}>
              Remover
            </button>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>
      <S.CartTotal data-testid='total'>Total: ${total}</S.CartTotal>
    </S.Container>
  );
};
