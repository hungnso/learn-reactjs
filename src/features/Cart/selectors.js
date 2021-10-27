import { createSelector } from "@reduxjs/toolkit";

export const cartItemSelector = (state) => state.cart.cartItems;

//count number of products in cart
export const cartItemsCountSlector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((count, item) => (item.quantity > 0 ? count + item.quantity : 0), 0)
);

///calculate total of cart

export const cartTotalSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.product.salePrice * item.quantity, 0)
);

export const cartTotleItem = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.product.salePrice * item.quantity, 0)
);
