import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type List = {
  id: number;
  name: string;
  title: string;
  text: string;
  isDone: boolean;
  edit: boolean;
};

//초깃값
// const initialState : List[] = [];
const initialState: List[] = [
  {
    id: 1,
    name: "Sun",
    title: "리액트",
    text: "뿌셔보기",
    isDone: false,
    edit: false,
  },
  {
    id: 2,
    name: "Moon",
    title: "점심 먹어보자",
    text: "화이팅",
    isDone: true,
    edit: true,
  },
  {
    id: 3,
    name: "j",
    title: "돈가스",
    text: "어떄???",
    isDone: false,
    edit: false,
  },
  {
    id: 4,
    name: "춘향",
    title: "안녕",
    text: "화이팅@!!!",
    isDone: true,
    edit: true,
  },
];

//기능구현
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    newTodo: (state, { payload }: PayloadAction<List>) => {
      const data = state.push({
        id: Math.random(),
        name: payload.name,
        title: payload.title,
        text: payload.text,
        isDone: false,
        edit: false,
      });
      console.log("newTodo:", data);
    },
    deleteTodo: (state, { payload }: PayloadAction<number>) => {
      const data = state.filter((item) => item.id !== payload);
      console.log("deleteTodo:", data);
      return data;
    },
    // editTodo: (state, { payload }: PayloadAction<List>) => {
    //   return state.map((item) =>
    //     item.id === payload ? { ...item, edit: !item.edit } : item
    //   );
    // },
    editTodo: (state, { payload }: PayloadAction<List>) => {
      const data = state.map((item) =>
        item.id === payload.id ? { ...item, edit: !item.edit } : item
      );
      console.log("deleteTodo:", data);
      return data;
    },
    fixTodo: (state, { payload }: PayloadAction<number>) => {
      return state.map((item) =>
        item.id === payload[0]
          ? { ...item, title: payload[1], text: payload[2], edit: !item.edit }
          : item
      );
    },
  },
});

export const { newTodo, deleteTodo, editTodo, fixTodo } = todoSlice.actions;
export default todoSlice.reducer;
