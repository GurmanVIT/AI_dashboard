import "../src/assets/style/Style.scss";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import SignUp from "./component/SignUp/SignUp";
import SignIn from "./component/SignIn/SignIn";
import Otp from "./component/Otp/Otp";
import CreateProfile from "./component/CreateProfile/CreateProfile";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="Otp" element={<Otp />} />
        <Route path="CreateProfile" element={<CreateProfile />} />
        <Route path="Sidebar" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
