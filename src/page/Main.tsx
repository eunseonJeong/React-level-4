import { Link } from "react-router-dom";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Home from "../Components/Home";
import { StBtn, StForm } from "../shared/styled";

function Main() {
  const navigate = useNavigate();

  return (
    <StForm>
      <Link to="/">
        <BsFillHouseHeartFill />
      </Link>
      <h2>무엇을 할까요?</h2>

      <StBtn onClick={() => navigate("/list")}>할 일 추가하기</StBtn>

      <h3>TODO LIST</h3>
      <Home isDone={false} />
      <Home isDone={true} />
    </StForm>
  );
}

export default Main;
