import React, { useState } from 'react';
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';
import { Cart } from '../Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';

// import { HeaderTitle, StyledHeader } from './styles';
import * as S from './styles'; // forma de diferenciar componentes estilizados de funcionais
import { login, logout } from '../../redux/User/user-slice';

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
      dispatch(
        login({
          name: 'Walter',
          email: 'walter@email.com',
        })
      );

      // usuario esta logado, fazer logout
    } else {
      dispatch(logout({}));
    }
  }

  function handleShowCart() {
    setShowCart(!showCart)
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

          <S.CartButton onClick={handleShowCart}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} selfClose={handleShowCart}/>
    </S.StyledHeader>
  );
};
