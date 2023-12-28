import { combineReducers } from 'redux';
import { cartSlice } from './Cart/cart-slice';
import { userSlice } from './User/user-slice';

// concentrar todos os reducers da aplicacao dentro de um objeto
export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  cartReducer: cartSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
