import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },

    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addTocard(state, action) {
      // newItem = {id, product, quantity}
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        ///add to card
        state.cartItems.push(newItem);
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      // check if products is available in cart
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      } else {
        console.log("sai");
      }
    },
    removeFromCard(state, action) {
      /// id
      const idneddtoRemove = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== idneddtoRemove);
    },
    changeOnCard(state, action) {
      /// id,  quantity
      const newCount = action.payload;
      state.cartItems.push(newCount);
    },
  },
});

// const { actions, reducers } = cartSlice;
const { actions, reducer } = cartSlice;

// selector
const valueaddtoCard = (state) => state.cart.cartItems;
console.log(valueaddtoCard);

export const { showMiniCart, hideMiniCart, addTocard, setQuantity, removeFromCard, changeOnCard } = actions;
export default reducer;
