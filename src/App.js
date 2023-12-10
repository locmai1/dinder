import "./App.css";
import { Route, Routes } from "react-router";
import Explore from "./pages/Explore";
import Hosting from "./pages/Hosting";
import Joining from "./pages/Joining";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/joining" element={<Joining />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </div>
  );
}

export default App;
