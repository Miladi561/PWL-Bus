import './App.css';
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/login"} element={<Login />} />
      <Route exact path={"/dashboard"} element={<Dashboard />} />
    </Routes>
  );
}

export default App;
