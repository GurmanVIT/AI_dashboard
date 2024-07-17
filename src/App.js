import "../src/assets/style/Style.scss";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SignUp from "./component/SignUp/SignUp";
import SignIn from "./component/SignIn/SignIn";
import Otp from "./component/Otp/Otp";
import CreateProfile from "./component/CreateProfile/CreateProfile";
import Sidebar from "./component/Sidebar/Sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";
import CreateProject from "./component/CreateProject";
import Home from "./component/Home/Home";
import YourAi from "./component/YourAi/YourAi";
import Project from "./component/Project/Project";
import About from "./component/About/About";
import Integrations from "./component/Integrations/Integrations";
import Documents from "./component/Documents/Documents";
import ProjectEdit from "./component/ProjectEdit/ProjectEdit";

function App() {

  function SidebarCommon() {
    return (
      <>
        <div className="">
          <Outlet />
          <Sidebar />
        </div>
      </>
    );
  }


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
          <Route path="home" element={<Home />} />
          <Route path="YourAi" element={<YourAi />} />
          <Route path="Project" element={<Project />} />
          <Route path="About" element={<About />} />
          <Route path="Integrations" element={<Integrations />} />
          <Route path="Documents" element={<Documents />} />
          <Route path="ProjectEdit" element={<ProjectEdit />} />


          <Route element={<SidebarCommon />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
