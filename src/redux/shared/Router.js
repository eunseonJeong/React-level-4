import { BrowserRouter , Route , Routes } from "react-router-dom";
import Main from "../../page/Main";
import List from "../../page/List";

const Router = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='list' element={<List />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;