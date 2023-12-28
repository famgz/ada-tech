import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../data/products';
import { addProduct, removeProduct } from '../../redux/Cart/cart-slice';
import { RootReducer } from '../../redux/root-reducer';
import * as S from './styles';

// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: { rate: number; count: number };
// }

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  // variavel booleana que informa se o produto esta no carrinho
  const isProductOnCart =
    cart.find((productOnCart: Product) => product.id === productOnCart.id) !== undefined;

  // adicionar item ao carrinho
  function handleAddProductToCart() {
    // despachar a action de adicionar o produto ao carrinho
    dispatch(addProduct(product))
  }

  // remover item do carrinho
  function handleRemoveProductFromCart() {
    dispatch(removeProduct(product))
  }

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />

      <S.InfoWrapper>
        <S.ProductTitle>{product.title}</S.ProductTitle>
        <S.ReviewPriceContainer>
          <S.Review>
            <S.ReviewStars>
              {/* {Array.from({length:5}).map((_, index)=> index < Math.round(product.rating.rate) ? '★' : '☆')} */}
              {'★'.repeat(Math.round(product.rating.rate))}
              {'☆'.repeat(5 - Math.round(product.rating.rate))}
            </S.ReviewStars>
            ({product.rating.rate})
          </S.Review>
          <S.Price>${product.price}</S.Price>
        </S.ReviewPriceContainer>
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do Carrinho
            <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCartButton onClick={handleAddProductToCart}>
            Adicionar ao Carrinho
            <FiShoppingCart />
          </S.AddToCartButton>
        )}
      </S.InfoWrapper>
    </S.Card>
  );
};
