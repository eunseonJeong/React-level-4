import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../modules/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;

//state 타입을 export 해두는건데 나중에 쓸 데가 있음
export type RootState = ReturnType<typeof store.getState>;
