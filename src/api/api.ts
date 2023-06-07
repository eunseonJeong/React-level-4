import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react"; // FC 타입 임포트 추가

const Todos: FC = (): JSX.Element => {
  // FC 타입 적용
  useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await axios.get("http://localhost:5000/todos");
      console.log("APIdata", data);
    },
  });
  return;
};

export default Todos;
