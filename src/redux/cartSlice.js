import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      let existItem = state.find((item) => item.id === action.payload.id);
      if (existItem) {
        existItem.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    IncrementQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.qty += 1; // Directly modify the object (Immer handles immutability)
      }
    },
    DecrementQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.qty -= 1; // Directly modify the object (Immer handles immutability)
      }
    }
  }
});

export const { AddItem, RemoveItem, IncrementQty, DecrementQty } = cartSlice.actions;
export default cartSlice.reducer;
