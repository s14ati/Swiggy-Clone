import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: () => {
      return [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer