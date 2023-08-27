import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  itemCount: 0,
  alreadyInCart: false
};

const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cartItems.find((item) => item.id === action.payload.id)) {
        state.alreadyInCart = true
        window.alert("Item already in cart")
      } else {
        state.alreadyInCart = false
        state.cartItems.push({
            id: action.payload.id,
            title: action.payload.title,
            image: action.payload.image,
            price: action.payload.price,
        });
      }
      state.itemCount+=1 
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;