import styled from 'styled-components';

export const Card = styled.article`
  background-color: white;
  width: 100%;
  max-width: 350px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: contain; // evitar distorcao da imagem */
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Review = styled.span``;

export const ReviewStars = styled.span`
  font-size: 1.3rem;
  margin-right: 5px;
`;

export const Price = styled.strong``;

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  background-color: blue;
  color: white;

  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: center;

  svg {
    font-size: 0.8rem;
  }
`;

export const RemoveFromCartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  background-color: violet;
  color: balck;

  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: center;

  svg {
    font-size: 0.8rem;
  }
`;
