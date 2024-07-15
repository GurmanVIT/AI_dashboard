import "../src/assets/style/Style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./component/SignUp/SignUp";
import SignIn from "./component/SignIn/SignIn";
import Otp from "./component/Otp/Otp";
import CreateProfile from "./component/CreateProfile/CreateProfile";
import Sidebar from "./component/Sidebar/Sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";
import CreateProject from "./component/CreateProject";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="Otp" element={<Otp />} />
          <Route path="CreateProfile" element={<CreateProfile />} />
          <Route path="Sidebar" element={<Sidebar />} />
          <Route path="CreateProject" element={<CreateProject />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
