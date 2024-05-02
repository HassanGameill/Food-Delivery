

import {configureStore} from '@reduxjs/toolkit';

import cartSlice from './shopping-cart/cartSlice.js';
import cartUiSlice from './shopping-cart/cartUiSlice.js';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartUi: cartUiSlice,
  }
})

export default store;