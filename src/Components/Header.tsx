import React from "react";
import { Link } from "react-router-dom";
import { BsFillHouseHeartFill } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <Link to="/">
        <BsFillHouseHeartFill />
      </Link>
      <h2>무엇을 할까요?</h2>
    </>
  );
}
