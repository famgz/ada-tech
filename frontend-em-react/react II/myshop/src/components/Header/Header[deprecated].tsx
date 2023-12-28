import React, { useState } from 'react';
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';
import { Cart } from '../Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';

// import { HeaderTitle, StyledHeader } from './styles';
import * as S from './styles'; // forma de diferenciar componentes estilizados de funcionais

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );
  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handleUserAuth() {
    // usuario nao esta logado, fazer login
    if (user === null) {
      // despachar a action de login
      dispatch({
        type: 'user/login',
        payload: {
          name: 'Walter',
          email: 'walter@email.com',
        },
      });
    // usuario esta logado, fazer logout
    } else {
      dispatch({
        type: 'user/logout',
      });
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? 'Logout' : 'Login'}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} selfClose={() => setShowCart(!showCart)}/>
    </S.StyledHeader>
  );
};
