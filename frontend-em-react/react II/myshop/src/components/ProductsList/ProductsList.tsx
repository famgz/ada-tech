import React from 'react';
import * as S from './styles';
import { ProductCard } from '../ProductCard/ProductCard';
import { products } from '../../data/products';

export const ProductsList: React.FC = () => {
  // se preferir, pode utilizar um useEffect para puxar estes dados da api de produtos

  return (
    <S.Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
