import { BrowserRouter,Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home.jsx";
import AboutMe from "../pages/AboutMe.jsx";


export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        // Rutas con NavBar y Footer
        <Route element={<App />}>
          <Route path="/" element={<Home/>} />
        </Route>
        // Rutas sin NavBar y Footer
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}