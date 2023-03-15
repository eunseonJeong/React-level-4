import React, { useState } from 'react'
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'; // useNavigate 추가
import { BsFillHouseHeartFill } from "react-icons/bs"; //아이콘
import { useDispatch } from 'react-redux/es';
import { newTodo } from '../redux/modules/todoModule';
// import { __addTodo,getTodos } from '../redux/modules/todoModule';
// import { QueryClient, useMutation, useQuery,useQueryClient } from 'react-query';

function List() {
  // const {isLoading, isError, data} = useQuery("todos", getTodos)
  // const qureyClient = useQueryClient();

  const [name,setName] = useState('');
  const [title,setTitle] = useState('');
  const [text,setText] = useState('');

  const nameChgButton = e => {
    setName(e.target.value)
  };

  const titleChgButton = e => {
    setTitle(e.target.value)
  };

  const textChgButton = e => {
    setText(e.target.value)
  };

  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate 할당
  console.log(setName)

  // if (isLoading) {
  //   return <div>로딩 중 ...</div>
  // };
  // if (isError) {
  //   return <div>오류가 발생했습니다 ...</div>
  // }

  return (
    <Style>
       <Link to="/">
            <BsFillHouseHeartFill/>
         </Link>
        <h2>작성자</h2>
        <StyleInput type="text" 
        placeholder='작성자의 이름을 입력해주세요. (5자 이내)'
        required
        value={name}
        onChange={nameChgButton}/>

        <h2>제목</h2>
        <StyleInput type="text" 
        placeholder='제목을 입력해주세요.(50자 이내)'
        required
        value={title}
        onChange={titleChgButton}/>

        <h2>내용</h2>
        <StyleInput type="text" 
        placeholder='내용을 입력해주세요. (200자 이내)'
        style={{
            height: '300px'
        }}
        required
        value={text}
        onChange={textChgButton}/>

        {/* 추가하기 클릭하면 홈 밑부분에 카드 map돌려서 붙이기 어떻게 연결할건가?! */}
        <button onClick={(e) => {
          e.preventDefault();
          dispatch(newTodo({name,title,text}));
          navigate('/'); // 클릭 시 홈으로 이동
        }}>추가하기</button>
        </Style>
  )
};

const Style = styled.form`
    margin-left: 20px;
    margin-right: 20px;
`
const StyleInput = styled.input`
    width: 200vh;
    height: 50px;
`

export default List

