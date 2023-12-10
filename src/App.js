import "./App.css";
import { Route, Routes } from "react-router";
import Explore from "./pages/Explore";
import Hosting from "./pages/Hosting";
import Joining from "./pages/Joining";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import withAuth from "./utils/withAuth";

function App() {
  const AuthenticatedHosting = withAuth(Hosting);
  const AuthenticatedJoining = withAuth(Joining);
  const AuthenticatedMyProfile = withAuth(MyProfile);
  const AuthenticatedExlpore = withAuth(Explore);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthenticatedExlpore />} />
        <Route path="/hosting" element={<AuthenticatedHosting />} />
        <Route path="/joining" element={<AuthenticatedJoining />} />
        <Route path="/profile" element={<AuthenticatedMyProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
