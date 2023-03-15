import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Home = ({isDone}) => {
    const todoList = useSelector((state) => state.todo);
    return (
      <>
        <h3>{isDone ? "Done😎" : "Working👻"}</h3>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todoList.map((item) => {
            return item.isDone === isDone && <Card key={item.id} todo={item} />;
          })}
        </div>
      </>
    );
  };

export default Home;
