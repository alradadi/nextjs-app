import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from '@/src/redux/store';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    reset: state => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export type CounterActions = typeof counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export const {
  increment,
  decrement,
  reset,
  incrementByAmount,
} = counterSlice.actions;

export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export default counterSlice.reducer;
