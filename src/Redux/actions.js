import { ADD, REMOVE, ADD_MANY } from "./actionTypes";

export const addTodo = (content) => ({
  type: ADD,
  content,
});


export const removeTodo = (content) => ({
  type: REMOVE,
  content,
});
