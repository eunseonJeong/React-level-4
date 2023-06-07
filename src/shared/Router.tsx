import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../page/Main";
import List from "../page/List";
import Header from "../Components/Header";

const Router = () => {
  <Header />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
