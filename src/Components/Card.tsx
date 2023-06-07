import React, { useEffect, useState } from "react";
import {
  List,
  deleteTodo,
  editTodo,
  fixTodo,
} from "../redux/modules/todoSlice";
import { useDispatch } from "react-redux";
import { Styleline, StSmallBtn } from "../shared/styled";

interface Todo {
  todo: List;
}

function Card({ todo }: Todo) {
  const [editTitle, setEditTitle] = useState<string>(todo.title);
  const [editText, setEditText] = useState<string>(todo.text);

  const updates: [number, string, string] = [todo.id, editTitle, editText];
  const [fix, setFix] = useState<boolean>(false);

  const dispatch = useDispatch();

  const deleteBtnHandler = (id: number) => {
    alert("삭제할거야?");
    dispatch(deleteTodo(id));
  };

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
            onClick={() => {
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
                <h4>name:</h4>
                {item.name}
                <h4>title:</h4>
                {item.title}
                <h4>text:</h4>
                {item.text}
                <StSmallBtn onClick={() => setFix((fix) => !fix)}>
                  수정
                </StSmallBtn>
                <StSmallBtn onClick={() => deleteBtnHandler(item.id)}>
                  삭제
                </StSmallBtn>
                <StSmallBtn onClick={() => dispatch(editTodo(item))}>
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
