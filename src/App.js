import "./App.css";
import { Route, Routes } from "react-router";
import Explore from "./Explore";
import Hosting from "./Hosting";
import Joining from "./Joining";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/joining" element={<Joining />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
