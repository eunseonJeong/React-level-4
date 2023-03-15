import React, { useState } from "react";
import {
  deleteTodo,
  editTodo,
  fixTodo,
} from "../../../redux/modules/todoModule";
import { useDispatch } from "react-redux/es";
import styled from "styled-components";

function Card({ todo }) {

  const [editTitle, setEditTitle] = useState(todo.title);
  const [editText, setEditText] = useState(todo.text);

  //이건뭐?.. 묶어서 넘겨 주면 편해ㅇㅋ
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
          <StyleBtn
            onClick={(e) => {
              dispatch(fixTodo(updates));
              setFix((fix) => !fix);
            }}
          >
            수정완료
          </StyleBtn>
          <StyleBtn onClick={(e) => setFix((fix) => !fix)}>뒤로가기</StyleBtn>
        </Styleline>
      ) : (
        <Styleline>
          {[todo].map((item) => {
            return (
              <div key={item.id}>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.text}</div>
                <StyleBtn onClick={() => setFix((fix) => !fix)}>수정</StyleBtn>
                <StyleBtn onClick={() => dispatch(deleteTodo(item.id))}>
                  삭제
                </StyleBtn>
                <StyleBtn onClick={() => dispatch(editTodo(item.id))}>
                  확인
                </StyleBtn>
              </div>
            );
          })}
        </Styleline>
      )}
    </div>
  );
}

const Styleline = styled.div`
  border: 3px solid black;
  border-radius: 40px;
  width: 200px;
  height: 200px;
  margin: 30px;
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyleBtn = styled.button`
  background: transparent;
  margin-top: 20px;
  margin-left: 10px;
  border-radius: 20px;
`;


export default Card;
