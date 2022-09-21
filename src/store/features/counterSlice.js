import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 1,
    title: 'redux toolkit pre',
  },
  reducers: {
    increment(state, { payload }) {
      state.count = state.count + payload.step; // 内置了immutable
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

// 对应的action
export const { increment, decrement } = counterSlice.actions;

export const asyncIncrement = (payload) => (dispath) => {
  setTimeout(() => {
    dispath(increment(payload));
  }, 1000);
};

// 导出的是正常的reducer函数
export default counterSlice.reducer;
