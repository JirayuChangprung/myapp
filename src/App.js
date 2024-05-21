import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Foodordering from "./foodordering";
import Login from "./login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/foodordering" element={<Foodordering />} />
      </Routes>
    </>
  );
}

export default App;
