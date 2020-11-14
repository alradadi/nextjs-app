import { configureStore } from '@reduxjs/toolkit';

import counterReducer, { CounterActions } from './slices/counterSlice';

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppActions = CounterActions; // TODO: Update type after the new release of redux-toolkit
