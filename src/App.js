import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Error,
  Dashboard,
  DashboardDetails,
  Authoring,
  Deployment,
  Login,
  SessionOut,
} from "./pages";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Logout" element={<SessionOut />}></Route>

        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Dashboard/:environment" element={<Dashboard />}></Route>
        {/* <Route path="/Dashboard/details" element={<DashboardDetails />}></Route> */}

        <Route path="/authoring" element={<Authoring />}></Route>
        <Route path="/authoring/:documentId" element={<Authoring />}></Route>


        <Route path="/Deployment" element={<Deployment />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
