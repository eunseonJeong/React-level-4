import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../modules/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;

//state 타입을 export -> Home에서 사용
export type RootState = ReturnType<typeof store.getState>;
