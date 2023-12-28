import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { Product } from '../../data/products';
import { RootReducer } from '../../redux/root-reducer';
import { removeProduct } from '../../redux/Cart/cart-slice';

interface CartProps {
  showCart: boolean;
  selfClose: () => void
}

export const Cart: React.FC<CartProps> = ({ showCart, selfClose }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

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
      <S.CartTotal>Total: ${total}</S.CartTotal>
    </S.Container>
  );
};
