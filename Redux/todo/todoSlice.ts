/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { TodoObject } from '../../types/TodoObject';

interface TodoState {
  todoList: TodoObject[];
}

const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    remove: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
  },
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;
