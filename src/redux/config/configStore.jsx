// //중앙 데이터 관리소(state)를 설정하는 부분

import { configureStore } from '@reduxjs/toolkit'
import todoModule from '../modules/todoModule'

const store = configureStore({
  reducer: {
    todo: todoModule
  },
})

export default store
