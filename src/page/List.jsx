import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate 추가
import { BsFillHouseHeartFill } from "react-icons/bs"; //아이콘
import { useDispatch } from "react-redux/es";
import { newTodo } from "../redux/modules/todoModule";
import { StForm, StInput } from "../shared/styled";

function List() {
  const [output, setOutput] = useState({
    name: "",
    title: "",
    text: "",
  });

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setOutput((old) => {
      return { ...old, [name]: value };
    });
  };

  const { name, title, text } = output;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <StForm>
      <Link to="/">
        <BsFillHouseHeartFill />
      </Link>
      <h2>작성자</h2>
      <StInput
        type="text"
        placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
        required
        value={output.name}
        name="name"
        onChange={onChangeHandler}
      />

      <h2>제목</h2>
      <StInput
        type="text"
        placeholder="제목을 입력해주세요.(50자 이내)"
        required
        value={output.title}
        name="title"
        onChange={onChangeHandler}
      />

      <h2>내용</h2>
      <StInput
        type="text"
        placeholder="내용을 입력해주세요. (200자 이내)"
        style={{
          height: "300px",
        }}
        required
        value={output.text}
        name="text"
        onChange={onChangeHandler}
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(newTodo({ name, title, text }));
          navigate("/");
        }}
      >
        추가하기
      </button>
    </StForm>
  );
}

export default List;
