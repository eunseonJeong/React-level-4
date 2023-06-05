import React, { useState } from "react";
import {
  deleteTodo,
  editTodo,
  fixTodo,
} from "../../../redux/modules/todoModule";
import { useDispatch } from "react-redux/es";
import { StSmallBtn, Styleline } from "../../../shared/styled";

function Card({ todo }) {
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editText, setEditText] = useState(todo.text);

  const updates = [todo.id, editTitle, editText];
  const [fix, setFix] = useState(false);

  const dispatch = useDispatch();

  return (
    <div>
      {fix ? (
        <Styleline key={todo.id}>
          <label todoList For="">
            제목:
          </label>
          <input
            type="text"
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          />
          <label htmlFor="">내용:</label>
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
