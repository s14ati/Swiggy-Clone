import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../src/redux/cartSlice.js'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})