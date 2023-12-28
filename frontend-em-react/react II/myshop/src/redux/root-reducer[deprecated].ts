import { combineReducers } from 'redux';
import { userReducer } from './User/user-reducer[deprecated]';
import { cartReducer } from './Cart/cart-reducer[deprecated]';

// concentrar todos os reducers da aplicacao dentro de um objeto
export const rootReducer = combineReducers({
  userReducer, // userReducer: userReducer
  cartReducer,
} as const);

export type RootReducer = ReturnType<typeof rootReducer>;
