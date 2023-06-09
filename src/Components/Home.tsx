import React from "react";
import { useSelector } from "react-redux";
import { List } from "../redux/modules/todoSlice";
import { RootState } from "../redux/config/configStore";
import Card from "./Card";

interface Props {
  isDone: boolean;
}

const Home: React.FC<Props> = ({ isDone }) => {
  const todoList = useSelector((state: RootState) => state.todo);

  return (
    <>
      <h3>{isDone ? "Done😎" : "Working👻"}</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {todoList.map((item: List) => {
          return item.isDone === isDone && <Card key={item.id} todo={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
