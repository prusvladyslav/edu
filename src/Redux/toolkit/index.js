import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./toolkitReducer";

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
