import AboutUS from "./Components/AboutUS";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Stories from "./Components/Stories";
import Support from "./Components/Support";
import Login from "./Components/Login";



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/aboutUS" element={<AboutUS/>}></Route>
    <Route path="/stories" element={<Stories/>}></Route>
    <Route path="/support" element={<Support/>}></Route>
    <Route path="/login" element={<Login/>}></Route>

    </Routes>
    </>
  );
}

export default App;
