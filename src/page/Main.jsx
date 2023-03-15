import React from "react";
import Home from "../Components/page/page/Home";
import { Link } from "react-router-dom";
import { BsFillHouseHeartFill } from "react-icons/bs";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <div>
      {/* <List />     */}
      <h3> 할일 기록하기 </h3>
      <Link to="/">
        <BsFillHouseHeartFill />
      </Link>
      <h3>모두의 투두리스트 </h3>
      <h1>무엇을 할까요?</h1>

      <Button
        style={{
          width: "200vh",
          height: "50px",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        }}
        onClick={() => navigate("/list")}
      >
        할 일 추가하기
      </Button>
      
      <h3>TODO LIST</h3>
      <Home isDone={false} />
      <Home isDone={true} />
    </div>
  );
}

export default Main;
