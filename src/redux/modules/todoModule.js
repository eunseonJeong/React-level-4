import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __addTodo = createAsyncThunk(
  "getTodos",
  async (payload , thunkAPI)=> {
    //ㅇㅔ러 핸들링
    try{
      const response = await axios.get(`http://localhost:5000/`)
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data)
    }catch(error){
      console.log('error!')
      return thunkAPI.rejectWithValue(error)
    }
  }
);

//초깃값
const initialState = [
  {id:1,
  name:'Sun',
  title:'리액트',
  text:'뿌셔보기',
  isDone: false,
  edit: false,
  },
  {id:2,
    name:'Moon',
    title:'점심 먹어보자',
    text:'화이팅',
    isDone: true,
    edit: true,
    }
];



//기능구현
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        newTodo: (state, {payload}) => {
            state.push({
                id: state.length + 1,
                name: payload.name,
                title: payload.title,
                text: payload.text,
                isDone: false,
                edit: false,
            })
        },
        deleteTodo: (state, {payload}) => {
          return state.filter(item => item.id !== payload)
        },
        editTodo: (state, {payload}) => {
          return state.map(item => item.id === payload ? {...item, edit : !item.edit} : item)
        },
        fixTodo: (state, {payload}) => {
          return state.map(item=> item.id === payload[0] ? {...item,  name:payload[1], title: payload[2], text: payload[3], edit: !item.edit}: item)
        }
    },
    extraReducers:{
      [__addTodo.pending]: (state, action) => {
        state.isLoading = true;
        state.isError = false;
      },
      [__addTodo.fulfilled]: (state, action) => {
        console.log("fulfilled",action);
        state.isLoading = false;
        state.isError = false;
        state.todos = action.payload;
      },
      [__addTodo.rejected]: (state, action) => {
        state.isLoading = true;
        state.isError = true;
        state.error = action.payload;
      }
    }
});

export const {newTodo,deleteTodo,editTodo,fixTodo,addTodo} = todoSlice.actions;
export default todoSlice.reducer;
