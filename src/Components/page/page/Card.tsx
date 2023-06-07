import React, { useState } from "react";
import {
  deleteTodo,
  editTodo,
  fixTodo,
} from "../../../redux/modules/todoModule";
import { useDispatch } from "react-redux";
import { StSmallBtn, Styleline } from "../../../shared/styled";

interface Todo {
  id: number;
  title: string;
  text: string;
}

function Card({ todo }: { todo: Todo }) {
  const [editTitle, setEditTitle] = useState<string>(todo.title);
  const [editText, setEditText] = useState<string>(todo.text);

  const updates: [number, string, string] = [todo.id, editTitle, editText];
  const [fix, setFix] = useState<boolean>(false);

  const dispatch = useDispatch();

  return (
    <div>
      {fix ? (
        <Styleline key={todo.id}>
          <label htmlFor="todoList">제목:</label>
          <input
            type="text"
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          />
          <label htmlFor="todoList">내용:</label>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => {
              setEditTitle(e.target.value);
            }}
          />
          <StSmallBtn
            onClick={(e) => {
              dispatch(fixTodo(updates));
              setFix((fix) => !fix);
            }}
          >
            수정완료
          </StSmallBtn>
          <StSmallBtn onClick={(e) => setFix((fix) => !fix)}>
            뒤로가기
          </StSmallBtn>
        </Styleline>
      ) : (
        <Styleline>
          {[todo].map((item) => {
            return (
              <div key={item.id}>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.text}</div>
                <StSmallBtn onClick={() => setFix((fix) => !fix)}>
                  수정
                </StSmallBtn>
                <StSmallBtn onClick={() => dispatch(deleteTodo(item.id))}>
                  삭제
                </StSmallBtn>
                <StSmallBtn onClick={() => dispatch(editTodo(item.id))}>
                  확인
                </StSmallBtn>
              </div>
            );
          })}
        </Styleline>
      )}
    </div>
  );
}

export default Card;
