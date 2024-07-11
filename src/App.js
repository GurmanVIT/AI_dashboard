import "../src/assets/style/Style.scss";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import SignUp from "./component/SignUp/SignUp";
import SignIn from "./component/SignIn/SignIn";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
