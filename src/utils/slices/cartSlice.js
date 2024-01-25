import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item?.info?.id === action.payload?.info?.id,
      );

      if (existingItem) {
        state.items = state.items.map((item) =>
          item?.info?.id === action.payload?.info?.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const removingItemExist = state.items.find(
        (item) => item?.info?.id === action.payload?.info?.id,
      );

      if (removingItemExist) {
        state.items = state.items.map((item) =>
          item?.info?.id === action.payload?.info?.id &&
          item.quantity !== 0
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity !== 0);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
