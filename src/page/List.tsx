import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillHouseHeartFill } from "react-icons/bs"; //아이콘
import { useDispatch } from "react-redux/es";
import { newTodo } from "../redux/modules/todoModule";
import { StBtn, StForm, StInput } from "../shared/styled";

interface Output {
  name: string;
  title: string;
  text: string;
}

function List() {
  const [output, setOutput] = useState<Output>({
    name: "",
    title: "",
    text: "",
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
        required
        value={output.text}
        name="text"
        onChange={onChangeHandler}
      />

      <StBtn
        onClick={(e) => {
          e.preventDefault();
          dispatch(newTodo({ name, title, text }));
          navigate("/");
        }}
      >
        추가하기
      </StBtn>
    </StForm>
  );
}

export default List;
