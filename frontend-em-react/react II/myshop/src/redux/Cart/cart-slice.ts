import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../data/products';

export interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

export interface CartAction {
  type: string;
  payload: Product;
}

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProduct: (state, action) => {
      const productToRemove = action.payload;
      const filteredCart = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );
      state.cart = filteredCart;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
