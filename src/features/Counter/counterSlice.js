import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase(state) {
      return state + 1;
    },

    decrease(state) {
      return state - 1;
    },
  },
});

// const { actions, reducers } = counterSlice;
const { actions, reducer } = counterSlice;

export const { increase, decrease } = actions;
export default reducer;
// const couterSlice = createSlice({
//   name: 'counter',
//   initialState: 0,
//   reducers:{
//     plus(state, action){
//       return state + 1
//     },
//     divs(state, action){
//       return state - 1
//     }
//   }
// })
// const {actions, reducers} = couterSlice
// const {plus, divs} = actions

// ex
