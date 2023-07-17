import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;